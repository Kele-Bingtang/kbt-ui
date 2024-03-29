<template>
  <k-badge :value="12" class="item">
    <k-button>comments</k-button>
  </k-badge>
  <k-badge :value="3" class="item">
    <k-button>replies</k-button>
  </k-badge>
  <k-badge :value="1" class="item" type="primary">
    <k-button>comments</k-button>
  </k-badge>
  <k-badge :value="2" class="item" type="warning">
    <k-button>replies</k-button>
  </k-badge>

  <k-dropdown trigger="click">
    <span class="k-dropdown-link">
      Click Me
      <k-icon class="k-icon--right"><caret-bottom /></k-icon>
    </span>
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item class="clearfix">
          comments
          <k-badge class="mark" :value="12" />
        </k-dropdown-item>
        <k-dropdown-item class="clearfix">
          replies
          <k-badge class="mark" :value="3" />
        </k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.k-dropdown {
  margin-top: 1.1rem;
}
</style>
