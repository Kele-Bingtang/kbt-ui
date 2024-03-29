// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    KAffix: typeof import('kbt-ui')['KAffix']
    KAlert: typeof import('kbt-ui')['KAlert']
    KAside: typeof import('kbt-ui')['KAside']
    KAutocomplete: typeof import('kbt-ui')['KAutocomplete']
    KAvatar: typeof import('kbt-ui')['KAvatar']
    KAnchor: typeof import('kbt-ui')['KAnchor']
    KAnchorLink: typeof import('kbt-ui')['KAnchorLink']
    KBacktop: typeof import('kbt-ui')['KBacktop']
    KBadge: typeof import('kbt-ui')['KBadge']
    KBreadcrumb: typeof import('kbt-ui')['KBreadcrumb']
    KBreadcrumbItem: typeof import('kbt-ui')['KBreadcrumbItem']
    KButton: typeof import('kbt-ui')['KButton']
    KButtonGroup: typeof import('kbt-ui')['KButtonGroup']
    KCalendar: typeof import('kbt-ui')['KCalendar']
    KCard: typeof import('kbt-ui')['KCard']
    KCarousel: typeof import('kbt-ui')['KCarousel']
    KCarouselItem: typeof import('kbt-ui')['KCarouselItem']
    KCascader: typeof import('kbt-ui')['KCascader']
    KCascaderPanel: typeof import('kbt-ui')['KCascaderPanel']
    KCheckbox: typeof import('kbt-ui')['KCheckbox']
    KCheckboxButton: typeof import('kbt-ui')['KCheckboxButton']
    KCheckboxGroup: typeof import('kbt-ui')['KCheckboxGroup']
    KCol: typeof import('kbt-ui')['KCol']
    KCollapse: typeof import('kbt-ui')['KCollapse']
    KCollapseItem: typeof import('kbt-ui')['KCollapseItem']
    KCollapseTransition: typeof import('kbt-ui')['KCollapseTransition']
    KColorPicker: typeof import('kbt-ui')['KColorPicker']
    KContainer: typeof import('kbt-ui')['KContainer']
    KConfigProvider: typeof import('kbt-ui')['KConfigProvider']
    KDatePicker: typeof import('kbt-ui')['KDatePicker']
    KDialog: typeof import('kbt-ui')['KDialog']
    KDivider: typeof import('kbt-ui')['KDivider']
    KDrawer: typeof import('kbt-ui')['KDrawer']
    KDropdown: typeof import('kbt-ui')['KDropdown']
    KDropdownItem: typeof import('kbt-ui')['KDropdownItem']
    KDropdownMenu: typeof import('kbt-ui')['KDropdownMenu']
    KEmpty: typeof import('kbt-ui')['KEmpty']
    KFooter: typeof import('kbt-ui')['KFooter']
    KForm: typeof import('kbt-ui')['KForm']
    KFormItem: typeof import('kbt-ui')['KFormItem']
    KHeader: typeof import('kbt-ui')['KHeader']
    KIcon: typeof import('kbt-ui')['KIcon']
    KImage: typeof import('kbt-ui')['KImage']
    KImageViewer: typeof import('kbt-ui')['KImageViewer']
    KInput: typeof import('kbt-ui')['KInput']
    KInputNumber: typeof import('kbt-ui')['KInputNumber']
    KLink: typeof import('kbt-ui')['KLink']
    KMain: typeof import('kbt-ui')['KMain']
    KMenu: typeof import('kbt-ui')['KMenu']
    KMenuItem: typeof import('kbt-ui')['KMenuItem']
    KMenuItemGroup: typeof import('kbt-ui')['KMenuItemGroup']
    KOption: typeof import('kbt-ui')['KOption']
    KOptionGroup: typeof import('kbt-ui')['KOptionGroup']
    KPageHeader: typeof import('kbt-ui')['KPageHeader']
    KPagination: typeof import('kbt-ui')['KPagination']
    KPopconfirm: typeof import('kbt-ui')['KPopconfirm']
    KPopper: typeof import('kbt-ui')['KPopper']
    KPopover: typeof import('kbt-ui')['KPopover']
    KProgress: typeof import('kbt-ui')['KProgress']
    KRadio: typeof import('kbt-ui')['KRadio']
    KRadioButton: typeof import('kbt-ui')['KRadioButton']
    KRadioGroup: typeof import('kbt-ui')['KRadioGroup']
    KRate: typeof import('kbt-ui')['KRate']
    KRow: typeof import('kbt-ui')['KRow']
    KScrollbar: typeof import('kbt-ui')['KScrollbar']
    KSelect: typeof import('kbt-ui')['KSelect']
    KSlider: typeof import('kbt-ui')['KSlider']
    KStep: typeof import('kbt-ui')['KStep']
    KSteps: typeof import('kbt-ui')['KSteps']
    KSubMenu: typeof import('kbt-ui')['KSubMenu']
    KSwitch: typeof import('kbt-ui')['KSwitch']
    KTabPane: typeof import('kbt-ui')['KTabPane']
    KTable: typeof import('kbt-ui')['KTable']
    KTableColumn: typeof import('kbt-ui')['KTableColumn']
    KTabs: typeof import('kbt-ui')['KTabs']
    KTag: typeof import('kbt-ui')['KTag']
    KText: typeof import('kbt-ui')['KText']
    KTimePicker: typeof import('kbt-ui')['KTimePicker']
    KTimeSelect: typeof import('kbt-ui')['KTimeSelect']
    KTimeline: typeof import('kbt-ui')['KTimeline']
    KTimelineItem: typeof import('kbt-ui')['KTimelineItem']
    KTooltip: typeof import('kbt-ui')['KTooltip']
    KTransfer: typeof import('kbt-ui')['KTransfer']
    KTree: typeof import('kbt-ui')['KTree']
    KTreeV2: typeof import('kbt-ui')['KTreeV2']
    KTreeSelect: typeof import('kbt-ui')['KTreeSelect']
    KUpload: typeof import('kbt-ui')['KUpload']
    KSpace: typeof import('kbt-ui')['KSpace']
    KSkeleton: typeof import('kbt-ui')['KSkeleton']
    KSkeletonItem: typeof import('kbt-ui')['KSkeletonItem']
    KStatistic: typeof import('kbt-ui')['KStatistic']
    KCheckTag: typeof import('kbt-ui')['KCheckTag']
    KDescriptions: typeof import('kbt-ui')['KDescriptions']
    KDescriptionsItem: typeof import('kbt-ui')['KDescriptionsItem']
    KResult: typeof import('kbt-ui')['KResult']
    KSelectV2: typeof import('kbt-ui')['KSelectV2']
    KWatermark: typeof import('kbt-ui')['KWatermark']
    KTour: typeof import('kbt-ui')['KTour']
    KTourStep: typeof import('kbt-ui')['KTourStep']
  }

  interface ComponentCustomProperties {
    $message: typeof import('kbt-ui')['KMessage']
    $notify: typeof import('kbt-ui')['KNotification']
    $msgbox: typeof import('kbt-ui')['KMessageBox']
    $messageBox: typeof import('kbt-ui')['KMessageBox']
    $alert: typeof import('kbt-ui')['KMessageBox']['alert']
    $confirm: typeof import('kbt-ui')['KMessageBox']['confirm']
    $prompt: typeof import('kbt-ui')['KMessageBox']['prompt']
    $loading: typeof import('kbt-ui')['KLoadingService']
  }
}

export {}
