// @ts-nocheck
import { describe, expect, it, vi } from 'vitest'
import triggerEvent from '@kbt-ui/test-utils/trigger-event'
import KTable from '../src/table.vue'
import KTableColumn from '../src/table-column'
import { doubleWait, getTestData, mount } from './table-test-common'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

describe('table column', () => {
  describe('column attributes', () => {
    const createTable = function (
      props1?,
      props2?,
      props3?,
      props4?,
      opts?,
      tableProps?
    ) {
      return mount(
        Object.assign(
          {
            components: {
              KTable,
              KTableColumn,
            },
            template: `
          <k-table :data="testData" ${tableProps || ''}>
            <k-table-column prop="name" ${props1 || ''} />
            <k-table-column prop="release" ${props2 || ''} />
            <k-table-column prop="director" ${props3 || ''} />
            <k-table-column prop="runtime" ${props4 || ''} />
          </k-table>
        `,

            created() {
              this.testData = getTestData()
            },
          },
          opts
        )
      )
    }

    it('label', async () => {
      const wrapper = createTable('label="啊哈哈哈"', 'label="啊啦啦啦"')
      await doubleWait()
      const ths = wrapper
        .findAll('thead th')
        .map((node) => node.text())
        .filter((o) => o)

      expect(ths).toEqual(['啊哈哈哈', '啊啦啦啦'])
      wrapper.unmount()
    })

    it('width', async () => {
      const wrapper = createTable('width="123px"', ':width="102"', 'width="39"')
      await doubleWait()
      const ths = wrapper
        .findAll('.k-table__header-wrapper col')
        .map((node) => node.attributes('width'))
        .filter((o) => o)
      expect(ths).toContain('123')
      expect(ths).toContain('102')
      expect(ths).toContain('39')
      wrapper.unmount()
    })

    it('fixed', async () => {
      const wrapper = createTable(
        'fixed label="test1" width="100px"',
        'fixed="right" label="test2"',
        'fixed="left" label="test3"'
      )
      await doubleWait()
      const leftFixedHeaderColumns = wrapper.findAll(
        '.k-table__header .k-table-fixed-column--left'
      )
      const leftFixedBodyColumns = wrapper.findAll(
        '.k-table__body .k-table-fixed-column--left'
      )
      const rightFixedHeaderColumns = wrapper.findAll(
        '.k-table__header .k-table-fixed-column--right'
      )
      const rightFixedBodyColumns = wrapper.findAll(
        '.k-table__body .k-table-fixed-column--right'
      )
      expect(leftFixedHeaderColumns).toHaveLength(2)
      expect(leftFixedBodyColumns).toHaveLength(10)
      expect(rightFixedHeaderColumns).toHaveLength(1)
      expect(rightFixedBodyColumns).toHaveLength(5)
      expect(leftFixedHeaderColumns.at(0).text()).toBe('test1')
      expect(leftFixedHeaderColumns.at(1).text()).toBe('test3')
      expect(leftFixedHeaderColumns.at(1).classes()).toContain('is-last-column')
      expect(rightFixedHeaderColumns.at(0).text()).toBe('test2')
      expect(rightFixedHeaderColumns.at(0).classes()).toContain(
        'is-first-column'
      )
      expect(getComputedStyle(leftFixedHeaderColumns.at(0).element).left).toBe(
        '0px'
      )
      expect(getComputedStyle(leftFixedHeaderColumns.at(1).element).left).toBe(
        '100px'
      )
      expect(
        getComputedStyle(rightFixedHeaderColumns.at(0).element).right
      ).toBe('0px')
      wrapper.unmount()
    })

    it('resizable', async () => {
      const wrapper = createTable(
        'resizable',
        ':resizable="false"',
        '',
        '',
        {},
        'border'
      )
      await doubleWait()
      const firstCol = wrapper.find('thead th')
      triggerEvent(firstCol.element, 'mousemove')
      triggerEvent(firstCol.element, 'mousedown')
      wrapper.unmount()
    })

    it('formatter', async () => {
      const wrapper = createTable(':formatter="renderCell"', '', '', '', {
        methods: {
          renderCell(row) {
            return `[${row.name}]`
          },
        },
      })

      await doubleWait()
      const cells = wrapper.findAll(
        '.k-table__body-wrapper tbody tr td:first-child'
      )
      expect(cells.map((n) => n.text())).toEqual(
        getTestData().map((o) => `[${o.name}]`)
      )
      wrapper.unmount()
    })

    it('show-overflow-tooltip', async () => {
      const wrapper = createTable('show-overflow-tooltip')
      await doubleWait()
      expect(wrapper.findAll('.k-tooltip').length).toEqual(5)
      wrapper.unmount()
    })

    it('align', async () => {
      const wrapper = createTable(
        'align="left"',
        'align="right"',
        'align="center"'
      )
      await doubleWait()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.is-left').length).toEqual(len)
      expect(wrapper.findAll('.is-right').length).toEqual(len)
      expect(wrapper.findAll('.is-center').length).toEqual(len)
      wrapper.unmount()
    })

    it('class-name', async () => {
      const wrapper = createTable(
        'class-name="column-1"',
        'class-name="column-2 column-class-a"',
        'class-name="column-class-a"'
      )
      await doubleWait()
      const len = getTestData().length + 1
      expect(wrapper.findAll('.column-1').length).toEqual(len)
      expect(wrapper.findAll('.column-2').length).toEqual(len)
      expect(wrapper.findAll('.column-class-a').length).toEqual(len * 2)
      wrapper.unmount()
    })

    it('selectable === false & check selectAll status', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData" @selection-change="change">
            <k-table-column type="selection" :selectable="filterSelect" />
            <k-table-column prop="name" label="name" />
            <k-table-column prop="release" label="release" />
            <k-table-column prop="director" label="director" />
            <k-table-column prop="runtime" label="runtime" />
          </k-table>
        `,

        data() {
          return { selected: [], testData: getTestData() }
        },

        methods: {
          change(rows) {
            this.selected = rows
          },

          filterSelect() {
            return false
          },
        },
      })

      await doubleWait()
      expect(wrapper.find('.k-checkbox').attributes('checked')).toBeFalsy()
      await doubleWait()
      expect(wrapper.vm.selected.length).toEqual(0)
      wrapper.unmount()
    })

    describe('type', () => {
      const createTable = function (type) {
        return mount({
          components: {
            KTable,
            KTableColumn,
          },
          template: `
            <k-table :data="testData" @selection-change="change">
              <k-table-column type="${type}" />
              <k-table-column prop="name" label="name" />
              <k-table-column prop="release" label="release" />
              <k-table-column prop="director" label="director" />
              <k-table-column prop="runtime" label="runtime" />
            </k-table>
          `,

          created() {
            this.testData = getTestData()
          },

          data() {
            return { selected: [] }
          },

          methods: {
            change(rows) {
              this.selected = rows
            },
          },
        })
      }

      describe('= selection', () => {
        const wrapper = createTable('selection')

        it('render', async () => {
          await doubleWait()
          expect(wrapper.findAll('.k-checkbox').length).toEqual(
            getTestData().length + 1
          )
        })

        it('select all', async () => {
          wrapper.find('.k-checkbox').trigger('click')
          await doubleWait()
          expect(wrapper.vm.selected.length).toEqual(5)
          wrapper.unmount()
        })

        it('select one', async () => {
          const wrapper2 = createTable('selection')

          await doubleWait()
          wrapper2.findAll('.k-checkbox')[1].trigger('click')

          await doubleWait()
          expect(wrapper2.vm.selected.length).toEqual(1)
          expect(wrapper2.vm.selected[0].name).toEqual(getTestData()[0].name)
          wrapper2.unmount()
        })
      })

      describe('= index', () => {
        const wrapper = createTable('index')

        it('render', async () => {
          await doubleWait()
          expect(
            wrapper
              .findAll('.k-table__body-wrapper tbody tr td:first-child')
              .map((node) => node.text())
          ).toEqual(['1', '2', '3', '4', '5'])
          wrapper.unmount()
        })
      })

      describe('= expand', () => {
        const createInstance = function (extra?) {
          extra = extra || ''
          return mount({
            components: {
              KTableColumn,
              KTable,
            },
            template: `
            <k-table row-key="id" :data="testData" @expand-change="handleExpand" ${extra}>
              <k-table-column type="expand">
                <template #default="props">
                  <div>{{props.row.name}}</div>
                </template>
              </k-table-column>
              <k-table-column prop="release" label="release" />
              <k-table-column prop="director" label="director" />
              <k-table-column prop="runtime" label="runtime" />
            </k-table>
          `,

            data() {
              return {
                expandCount: 0,
                expandRowKeys: [],
                testData: getTestData(),
              }
            },

            methods: {
              handleExpand() {
                this.expandCount++
              },
              refreshData() {
                this.testData = getTestData()
              },
            },
          })
        }

        it('works', async () => {
          const wrapper = createInstance()
          await doubleWait()
          expect(wrapper.findAll('td.k-table__expand-column').length).toEqual(5)
          wrapper.unmount()
        })
      })
    })

    describe('sortable', () => {
      it('render', async () => {
        const wrapper = createTable('', '', '', 'sortable')
        await doubleWait()
        expect(wrapper.findAll('.caret-wrapper').length).toEqual(1)
        wrapper.unmount()
      })

      it('sortable orders', async () => {
        const wrapper = createTable(
          '',
          '',
          '',
          "sortable :sort-orders=\"['descending', 'ascending']\"",
          {}
        )

        await doubleWait()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable method', async () => {
        const wrapper = createTable(
          'sortable :sort-method="sortMethod"',
          '',
          '',
          '',
          {
            methods: {
              sortMethod(a, b) {
                // sort method should return number
                if (a.runtime < b.runtime) {
                  return 1
                }
                if (a.runtime > b.runtime) {
                  return -1
                }
                return 0
              },
            },
          }
        )

        await doubleWait()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable by method', async () => {
        const wrapper = createTable('sortable :sort-by="sortBy"', '', '', '', {
          methods: {
            sortBy(a) {
              return -a.runtime
            },
          },
        })

        await doubleWait()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })

      it('sortable by property', async () => {
        const wrapper = createTable(
          'sortable sort-by="runtime"',
          '',
          '',
          '',
          {}
        )

        await doubleWait()
        const elm = wrapper.find('.caret-wrapper')
        elm.trigger('click')

        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '80',
          '92',
          '92',
          '95',
          '100',
        ])
        wrapper.unmount()
      })
    })

    describe('click sortable column', () => {
      const wrapper = createTable('', '', '', 'sortable')

      it('ascending', async () => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '80',
          '92',
          '92',
          '95',
          '100',
        ])
      })

      it('descending', async () => {
        const elm = wrapper.find('.caret-wrapper')

        elm.trigger('click')
        await doubleWait()
        const lastCells = wrapper.findAll(
          '.k-table__body-wrapper tbody tr td:last-child'
        )
        expect(lastCells.map((node) => node.text())).toEqual([
          '100',
          '95',
          '92',
          '92',
          '80',
        ])
        wrapper.unmount()
      })
    })

    it('change column configuration', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <template>
            <button
              id="addBut"
              @click="
                () => {
                  cols.push('b')
                }
              "
              >+</button>
            <button
              id="delBut"
              @click="
                () => {
                  cols.pop()
                }
              "
              >-</button>
            <k-table :data="data">
              <k-table-column
                v-for="item of cols"
                :prop="item"
                :label="item"
                :key="item"
              ></k-table-column>
            </k-table>
          </template>
        `,

        data() {
          return { cols: ['a', 'v', 'b'], data: [{ a: 1, v: 2, b: 3 }] }
        },
      })

      await doubleWait()
      expect(wrapper.findAll('.k-table__header-wrapper th').length).toEqual(3)
      const addBut = wrapper.find('#addBut')
      const delBut = wrapper.find('#delBut')
      addBut.trigger('click')
      await doubleWait()
      expect(wrapper.findAll('.k-table__header-wrapper th').length).toEqual(4)
      addBut.trigger('click')
      await doubleWait()
      expect(wrapper.findAll('.k-table__header-wrapper th').length).toEqual(5)
      delBut.trigger('click')
      await doubleWait()
      expect(wrapper.findAll('.k-table__header-wrapper th').length).toEqual(4)
      delBut.trigger('click')
      await doubleWait()
      expect(wrapper.findAll('.k-table__header-wrapper th').length).toEqual(3)
    })
  })

  describe('multi level column', () => {
    it('should works', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" />
            <k-table-column label="group">
              <k-table-column prop="release"/>
              <k-table-column prop="director"/>
            </k-table-column>
            <k-table-column prop="runtime"/>
          </k-table>
        `,

        created() {
          this.testData = null
        },
      })

      await doubleWait()
      const trs = wrapper.findAll('.k-table__header tr')
      expect(trs.length).toEqual(2)
      const firstRowHeader = trs[0].findAll('th .cell').length
      const secondRowHeader = trs[1].findAll('th .cell').length
      expect(firstRowHeader).toEqual(3)
      expect(secondRowHeader).toEqual(2)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('2')
      expect(trs[0].find('th:nth-child(2)').attributes('colspan')).toEqual('2')
      wrapper.unmount()
    })

    it('should works', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" />
            <k-table-column label="group">
              <k-table-column label="group's group">
                <k-table-column prop="release" />
                <k-table-column prop="runtime"/>
              </k-table-column>
              <k-table-column prop="director" />
            </k-table-column>
            <k-table-column prop="runtime"/>
          </k-table>
        `,

        created() {
          this.testData = null
        },
      })

      await doubleWait()
      const trs = wrapper.findAll('.k-table__header tr')
      expect(trs.length).toEqual(3)
      const firstRowHeader = trs[0].findAll('th .cell').length
      const secondRowHeader = trs[1].findAll('th .cell').length
      const thirdRowHeader = trs[2].findAll('th .cell').length
      expect(firstRowHeader).toEqual(3)
      expect(secondRowHeader).toEqual(2)
      expect(thirdRowHeader).toEqual(2)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('3')
      expect(trs[0].find('th:nth-child(2)').attributes('colspan')).toEqual('3')
      expect(trs[1].find('th:first-child').attributes('colspan')).toEqual('2')
      expect(trs[1].find('th:nth-child(2)').attributes('rowspan')).toEqual('2')

      wrapper.unmount()
    })

    it('should work in one column', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column label="group">
              <k-table-column prop="release"/>
            </k-table-column>
          </k-table>
        `,

        created() {
          this.testData = null
        },
      })

      await doubleWait()
      const trs = wrapper.findAll('.k-table__header tr')
      expect(trs.length).toEqual(2)
      const firstRowLength = trs[0].findAll('th .cell').length
      const secondRowLength = trs[1].findAll('th .cell').length
      expect(firstRowLength).toEqual(1)
      expect(secondRowLength).toEqual(1)

      expect(trs[0].find('th:first-child').attributes('rowspan')).toEqual('1')
      expect(trs[0].find('th:first-child').attributes('colspan')).toEqual('1')
      wrapper.unmount()
    })

    it('should work with fixed', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" />
            <k-table-column label="group" fixed="left">
              <k-table-column label="group's group">
                <k-table-column prop="runtime" width="100" fixed="right"/>
                <k-table-column prop="director" width="100" fixed="right"/>
              </k-table-column>
              <k-table-column prop="director"/>
            </k-table-column>
            <k-table-column prop="director"/>
            <k-table-column prop="runtime"/>
            <k-table-column label="group2" fixed="right">
              <k-table-column prop="runtime" width="100" fixed="left"/>
              <k-table-column prop="director" width="50"/>
            </k-table-column>
            <k-table-column prop="runtime"/>
          </k-table>
        `,

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      const lfhcolumns = wrapper
        .findAll('.k-table__header tr')
        .map((item) => item.findAll('.k-table-fixed-column--left'))
      const lfbcolumns = wrapper.findAll(
        '.k-table__body .k-table-fixed-column--left'
      )
      const rfhcolumns = wrapper
        .findAll('.k-table__header tr')
        .map((item) => item.findAll('.k-table-fixed-column--right'))
      const rfbcolumns = wrapper.findAll(
        '.k-table__body .k-table-fixed-column--right'
      )
      expect(lfbcolumns).toHaveLength(15)
      expect(rfbcolumns).toHaveLength(10)
      expect(lfhcolumns.at(0).at(0).classes()).toContain('is-last-column')
      expect(lfhcolumns.at(1).at(1).classes()).toContain('is-last-column')
      expect(getComputedStyle(lfhcolumns.at(1).at(1).element).left).toBe(
        '200px'
      )
      expect(getComputedStyle(lfhcolumns.at(2).at(1).element).left).toBe(
        '100px'
      )
      expect(rfhcolumns.at(0).at(0).classes()).toContain('is-first-column')
      expect(rfhcolumns.at(1).at(0).classes()).toContain('is-first-column')
      expect(getComputedStyle(rfhcolumns.at(1).at(0).element).right).toBe(
        '50px'
      )
      wrapper.unmount()
    })

    it('k-table-column should callback itself', async () => {
      const TableColumn = {
        name: 'TableColumn',
        components: {
          KTableColumn,
        },
        props: {
          item: Object,
        },
        template: `
          <k-table-column :prop="item.prop" :label="item.label">
            <template v-if="item.children" #default>
              <table-column v-for="c in item.children" :key="c.prop" :item="c"/>
            </template>
          </k-table-column>
        `,
      }
      const App = {
        template: `
          <k-table :data="data">
            <table-column v-for="item in column" :key="item.prop" :item="item"/>
          </k-table>
        `,
        components: {
          KTable,
          KTableColumn,
          TableColumn,
        },
        setup() {
          const column = [
            { label: '日期', prop: 'date' },
            {
              label: '用户',
              prop: 'user',
              children: [
                { label: '姓名', prop: 'name' },
                { label: '地址', prop: 'address' },
              ],
            },
          ]
          const data = [
            {
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
            {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            },
          ]
          return {
            column,
            data,
          }
        },
      }
      const wrapper = mount(App)
      await doubleWait()
      expect(wrapper.find('.k-table__header-wrapper').text()).toMatch('姓名')
      expect(wrapper.find('.k-table__header-wrapper').text()).toMatch('地址')
    })

    it('should not rendered other components in hidden-columns', async () => {
      const Comp = {
        template: `
          <div class="other-component"></div>
        `,
      }
      const wrapper = mount({
        components: {
          KTableColumn,
          KTable,
          Comp,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name">
              <comp></comp>
            </k-table-column>
          </k-table>
        `,
        data() {
          return {
            testData: getTestData(),
          }
        },
      })
      await doubleWait()
      expect(
        wrapper.find('.hidden-columns').find('.other-component').exists()
      ).toBeFalsy()
    })

    it('should not rendered text in hidden-columns', async () => {
      const TableColumn = {
        name: 'TableColumn',
        components: {
          KTableColumn,
        },
        template: `
          <k-table-column>
            <template v-if="$slots.default" #default="scope">
              <slot v-bind="scope" />
            </template>
          </k-table-column>
        `,
      }
      const wrapper = mount({
        components: {
          KTableColumn,
          KTable,
          TableColumn,
        },
        template: `
          <k-table :data="testData">
            <table-column>
              <template #default="{ row }">Hello World</template>
            </table-column>
          </k-table>
        `,
        data() {
          return {
            testData: getTestData(),
          }
        },
      })
      await doubleWait()
      expect(wrapper.find('.hidden-columns').text().trim()).not.toContain(
        'Hello World'
      )
    })
  })

  describe('dynamic column attribtes', () => {
    it('label', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" :label="label"/>
            <k-table-column prop="release" />
            <k-table-column prop="director" />
            <k-table-column prop="runtime" />
          </k-table>
        `,
        data() {
          return {
            label: 'name',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      expect(wrapper.find('.k-table__header th .cell').text()).toEqual('name')
      wrapper.vm.label = 'NAME'
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.k-table__header th .cell').text()).toEqual('NAME')
        wrapper.unmount()
      })
    })

    it('align', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" :align="align"/>
          </k-table>
        `,

        data() {
          return {
            align: 'left',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      expect(wrapper.findAll('.k-table__body td.is-right').length).toEqual(0)
      wrapper.vm.align = 'right'
      wrapper.vm.$nextTick(() => {
        expect(
          wrapper.findAll('.k-table__body td.is-right').length > 0
        ).toBeTruthy()
        wrapper.unmount()
      })
    })
    it('header-align', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column prop="name" :align="align" :header-align="headerAlign"/>
          </k-table>
        `,

        data() {
          return {
            align: 'left',
            headerAlign: null,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })
      await doubleWait()
      expect(
        wrapper.findAll('.k-table__header th.is-left').length
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.k-table__header th.is-center').length).toEqual(0)
      expect(wrapper.findAll('.k-table__header th.is-right').length).toEqual(0)
      wrapper.vm.align = 'right'
      await doubleWait()
      expect(wrapper.findAll('.k-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.k-table__header th.is-center').length).toEqual(0)
      expect(
        wrapper.findAll('.k-table__header th.is-right').length
      ).toBeGreaterThanOrEqual(0)
      wrapper.vm.headerAlign = 'center'
      await doubleWait()
      expect(wrapper.findAll('.k-table__header th.is-left').length).toEqual(0)
      expect(
        wrapper.findAll('.k-table__header th.is-center').length
      ).toBeGreaterThanOrEqual(0)
      expect(wrapper.findAll('.k-table__header th.is-right').length).toEqual(0)
      wrapper.vm.headerAlign = null
      await doubleWait()
      expect(wrapper.findAll('.k-table__header th.is-left').length).toEqual(0)
      expect(wrapper.findAll('.k-table__header th.is-center').length).toEqual(0)
      expect(
        wrapper.findAll('.k-table__header th.is-right').length
      ).toBeGreaterThanOrEqual(0)
      wrapper.unmount()
    })

    it('width', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData" :fit="false">
            <k-table-column prop="name" :width="width"/>
          </k-table>
        `,

        data() {
          return {
            width: 100,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '100'
      )

      wrapper.vm.width = 200
      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '200'
      )

      wrapper.vm.width = '300px'
      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '300'
      )
      wrapper.unmount()
    })

    it('min-width', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData" :fit="false">
            <k-table-column prop="name" :min-width="width"/>
          </k-table>
        `,

        data() {
          return {
            width: 100,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '100'
      )

      wrapper.vm.width = 200
      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '200'
      )

      wrapper.vm.width = '300px'
      await doubleWait()
      expect(wrapper.find('.k-table__body col').attributes('width')).toEqual(
        '300'
      )
      wrapper.unmount()
    })

    it('fixed', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column :fixed="fixed" />
            <k-table-column prop="release" />
            <k-table-column prop="director" />
            <k-table-column prop="runtime" />
          </k-table>
        `,

        data() {
          return {
            fixed: false,
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      expect(wrapper.find('.k-table-fixed-column--left').exists()).toBeFalsy()
      wrapper.vm.fixed = true
      await doubleWait()
      expect(wrapper.find('.k-table-fixed-column--left').exists()).toBeTruthy()
      wrapper.unmount()
    })

    it('prop', async () => {
      const wrapper = mount({
        components: {
          KTable,
          KTableColumn,
        },
        template: `
          <k-table :data="testData">
            <k-table-column :prop="prop" />
            <k-table-column prop="release" />
            <k-table-column prop="director" />
            <k-table-column prop="runtime" />
          </k-table>
        `,

        data() {
          return {
            prop: 'name',
          }
        },

        created() {
          this.testData = getTestData()
        },
      })

      await doubleWait()
      let firstColumnContent = wrapper.find('.k-table__body td .cell').text()
      let secondColumnContent = wrapper
        .find('.k-table__body td:nth-child(2) .cell')
        .text()
      expect(firstColumnContent).not.toEqual(secondColumnContent)
      wrapper.vm.prop = 'release'
      await doubleWait()
      firstColumnContent = wrapper.find('.k-table__body td .cell').text()
      secondColumnContent = wrapper
        .find('.k-table__body td:nth-child(2) .cell')
        .text()
      expect(firstColumnContent).toEqual(secondColumnContent)
      wrapper.unmount()
    })
  })

  describe('tree table', () => {
    const getTableData = () => {
      return [
        {
          id: 1,
          date: '2016-05-02',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 1,
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 2,
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 3,
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'Wangxiaohu',
              address: '1518 Jinshajiang Road, Putuo District, Shanghai',
              index: 4,
              children: [
                {
                  id: 311,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 5,
                },
                {
                  id: 312,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 6,
                },
                {
                  id: 313,
                  date: '2016-05-01',
                  name: 'Wangxiaohu',
                  address: '1518 Jinshajiang Road, Putuo District, Shanghai',
                  index: 7,
                  disabled: true,
                },
              ],
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'Wangxiaohu',
              address: '1518 Jinshajiang Road, Putuo District, Shanghai',
              index: 8,
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'Wangxiaohu',
          address: '1518 Jinshajiang Road, Putuo District, Shanghai',
          index: 9,
        },
      ]
    }

    const createTable = function (methods) {
      return mount(
        Object.assign({
          components: {
            KTable,
            KTableColumn,
          },
          template: `
              <k-table
                ref="table"
                :data="testData"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
              >
                <k-table-column type="index"></k-table-column>
                <k-table-column type="selection" :selectable="selectable"></k-table-column>
                <k-table-column prop="id" label="id"></k-table-column>
                <k-table-column
                  prop="date"
                  label="Date"
                  sortable
                  width="180">
                </k-table-column>
                <k-table-column
                  prop="name"
                  label="Name"
                  sortable
                  width="180">
                </k-table-column>
                <k-table-column
                  prop="address"
                  label="Address">
                </k-table-column>
              </k-table>
          `,
          methods: {
            selectable(row) {
              return !row.disabled
            },
            ...methods,
          },
          data() {
            return {
              testData: getTableData(),
            }
          },
        })
      )
    }

    it('selectable index parameter should be correct', async () => {
      const result = []
      const wrapper = createTable({
        selectable(row, index) {
          result.push(row.index - 1 === index)
          return !row.disabled
        },
      })
      await doubleWait()
      wrapper.vm.$refs.table.toggleAllSelection()
      expect(result.every((item) => item)).toBeTruthy()
      wrapper.unmount()
    })
  })
})
