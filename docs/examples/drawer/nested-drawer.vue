<template>
  <k-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </k-button>

  <k-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <k-button @click="innerDrawer = true">Click me!</k-button>
      <k-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </k-drawer>
    </div>
  </k-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KMessageBox } from 'kbt-ui'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  KMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
