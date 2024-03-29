<template>
  <k-tooltip content="Top center" placement="top">
    <k-button>Dark</k-button>
  </k-tooltip>
  <k-tooltip content="Bottom center" placement="bottom" effect="light">
    <k-button>Light</k-button>
  </k-tooltip>

  <k-tooltip content="Bottom center" effect="customized">
    <k-button>Customized theme</k-button>
  </k-tooltip>
</template>

<style>
.k-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.k-popper.is-customized .k-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
