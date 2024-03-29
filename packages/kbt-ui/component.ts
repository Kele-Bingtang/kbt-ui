import { KAffix } from '@kbt-ui/components/affix'
import { KAlert } from '@kbt-ui/components/alert'
import { KAutocomplete } from '@kbt-ui/components/autocomplete'
import { KAvatar } from '@kbt-ui/components/avatar'
import { KBacktop } from '@kbt-ui/components/backtop'
import { KBadge } from '@kbt-ui/components/badge'
import { KBreadcrumb, KBreadcrumbItem } from '@kbt-ui/components/breadcrumb'
import { KButton, KButtonGroup } from '@kbt-ui/components/button'
import { KCalendar } from '@kbt-ui/components/calendar'
import { KCard } from '@kbt-ui/components/card'
import { KCarousel, KCarouselItem } from '@kbt-ui/components/carousel'
import { KCascader } from '@kbt-ui/components/cascader'
import { KCascaderPanel } from '@kbt-ui/components/cascader-panel'
import { KCheckTag } from '@kbt-ui/components/check-tag'
import {
  KCheckbox,
  KCheckboxButton,
  KCheckboxGroup,
} from '@kbt-ui/components/checkbox'
import { KCol } from '@kbt-ui/components/col'
import { KCollapse, KCollapseItem } from '@kbt-ui/components/collapse'
import { KCollapseTransition } from '@kbt-ui/components/collapse-transition'
import { KColorPicker } from '@kbt-ui/components/color-picker'
import { KConfigProvider } from '@kbt-ui/components/config-provider'
import {
  KAside,
  KContainer,
  KFooter,
  KHeader,
  KMain,
} from '@kbt-ui/components/container'
import { KDatePicker } from '@kbt-ui/components/date-picker'
import {
  KDescriptions,
  KDescriptionsItem,
} from '@kbt-ui/components/descriptions'
import { KDialog } from '@kbt-ui/components/dialog'
import { KDivider } from '@kbt-ui/components/divider'
import { KDrawer } from '@kbt-ui/components/drawer'
import {
  KDropdown,
  KDropdownItem,
  KDropdownMenu,
} from '@kbt-ui/components/dropdown'
import { KEmpty } from '@kbt-ui/components/empty'
import { KForm, KFormItem } from '@kbt-ui/components/form'
import { KIcon } from '@kbt-ui/components/icon'
import { KImage } from '@kbt-ui/components/image'
import { KImageViewer } from '@kbt-ui/components/image-viewer'
import { KInput } from '@kbt-ui/components/input'
import { KInputNumber } from '@kbt-ui/components/input-number'
import { KLink } from '@kbt-ui/components/link'
import {
  KMenu,
  KMenuItem,
  KMenuItemGroup,
  KSubMenu,
} from '@kbt-ui/components/menu'
import { KPageHeader } from '@kbt-ui/components/page-header'
import { KPagination } from '@kbt-ui/components/pagination'
import { KPopconfirm } from '@kbt-ui/components/popconfirm'
import { KPopover } from '@kbt-ui/components/popover'
import { KPopper } from '@kbt-ui/components/popper'
import { KProgress } from '@kbt-ui/components/progress'
import { KRadio, KRadioButton, KRadioGroup } from '@kbt-ui/components/radio'
import { KRate } from '@kbt-ui/components/rate'
import { KResult } from '@kbt-ui/components/result'
import { KRow } from '@kbt-ui/components/row'
import { KScrollbar } from '@kbt-ui/components/scrollbar'
import { KOption, KOptionGroup, KSelect } from '@kbt-ui/components/select'
import { KSelectV2 } from '@kbt-ui/components/select-v2'
import { KSkeleton, KSkeletonItem } from '@kbt-ui/components/skeleton'
import { KSlider } from '@kbt-ui/components/slider'
import { KSpace } from '@kbt-ui/components/space'
import { KStatistic } from '@kbt-ui/components/statistic'
import { KCountdown } from '@kbt-ui/components/countdown'
import { KStep, KSteps } from '@kbt-ui/components/steps'
import { KSwitch } from '@kbt-ui/components/switch'
import { KTable, KTableColumn } from '@kbt-ui/components/table'
import { KAutoResizer, KTableV2 } from '@kbt-ui/components/table-v2'
import { KTabPane, KTabs } from '@kbt-ui/components/tabs'
import { KTag } from '@kbt-ui/components/tag'
import { KText } from '@kbt-ui/components/text'
import { KTimePicker } from '@kbt-ui/components/time-picker'
import { KTimeSelect } from '@kbt-ui/components/time-select'
import { KTimeline, KTimelineItem } from '@kbt-ui/components/timeline'
import { KTooltip } from '@kbt-ui/components/tooltip'
import { KTooltipV2 } from '@kbt-ui/components/tooltip-v2'
import { KTransfer } from '@kbt-ui/components/transfer'
import { KTree } from '@kbt-ui/components/tree'
import { KTreeSelect } from '@kbt-ui/components/tree-select'
import { KTreeV2 } from '@kbt-ui/components/tree-v2'
import { KUpload } from '@kbt-ui/components/upload'
import { KWatermark } from '@kbt-ui/components/watermark'
import { KTour, KTourStep } from '@kbt-ui/components/tour'
import { KAnchor, KAnchorLink } from '@kbt-ui/components/anchor'

import type { Plugin } from 'vue'

export default [
  KAffix,
  KAlert,
  KAutocomplete,
  KAutoResizer,
  KAvatar,
  KBacktop,
  KBadge,
  KBreadcrumb,
  KBreadcrumbItem,
  KButton,
  KButtonGroup,
  KCalendar,
  KCard,
  KCarousel,
  KCarouselItem,
  KCascader,
  KCascaderPanel,
  KCheckTag,
  KCheckbox,
  KCheckboxButton,
  KCheckboxGroup,
  KCol,
  KCollapse,
  KCollapseItem,
  KCollapseTransition,
  KColorPicker,
  KConfigProvider,
  KContainer,
  KAside,
  KFooter,
  KHeader,
  KMain,
  KDatePicker,
  KDescriptions,
  KDescriptionsItem,
  KDialog,
  KDivider,
  KDrawer,
  KDropdown,
  KDropdownItem,
  KDropdownMenu,
  KEmpty,
  KForm,
  KFormItem,
  KIcon,
  KImage,
  KImageViewer,
  KInput,
  KInputNumber,
  KLink,
  KMenu,
  KMenuItem,
  KMenuItemGroup,
  KSubMenu,
  KPageHeader,
  KPagination,
  KPopconfirm,
  KPopover,
  KPopper,
  KProgress,
  KRadio,
  KRadioButton,
  KRadioGroup,
  KRate,
  KResult,
  KRow,
  KScrollbar,
  KSelect,
  KOption,
  KOptionGroup,
  KSelectV2,
  KSkeleton,
  KSkeletonItem,
  KSlider,
  KSpace,
  KStatistic,
  KCountdown,
  KSteps,
  KStep,
  KSwitch,
  KTable,
  KTableColumn,
  KTableV2,
  KTabs,
  KTabPane,
  KTag,
  KText,
  KTimePicker,
  KTimeSelect,
  KTimeline,
  KTimelineItem,
  KTooltip,
  KTooltipV2,
  KTransfer,
  KTree,
  KTreeSelect,
  KTreeV2,
  KUpload,
  KWatermark,
  KTour,
  KTourStep,
  KAnchor,
  KAnchorLink,
] as Plugin[]
