<template>
  <div style="display: flex; align-items: center">
    <k-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <k-button style="margin-right: 16px">Click to activate</k-button>
      </template>
      <k-table :data="gridData">
        <k-table-column width="150" property="date" label="date" />
        <k-table-column width="100" property="name" label="name" />
        <k-table-column width="300" property="address" label="address" />
      </k-table>
    </k-popover>

    <k-popover
      :width="300"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <k-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
      </template>
      <template #default>
        <div
          class="demo-rich-conent"
          style="display: flex; gap: 16px; flex-direction: column"
        >
          <k-avatar
            :size="60"
            src="https://avatars.githubusercontent.com/u/72015883?v=4"
            style="margin-bottom: 8px"
          />
          <div>
            <p
              class="demo-rich-content__name"
              style="margin: 0; font-weight: 500"
            >
              Kbt UI
            </p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--k-color-info)"
            >
              @kbt-ui
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Kbt UI, a Vue 3 based component library for developers, designers
            and product managers
          </p>
        </div>
      </template>
    </k-popover>
  </div>
</template>

<script lang="ts" setup>
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>
