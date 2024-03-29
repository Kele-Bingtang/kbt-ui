<template>
  <div>
    <k-button @click="show = !show">Click Me</k-button>

    <div style="margin-top: 20px">
      <k-collapse-transition>
        <div v-show="show" style="height: 400px">
          <div class="transition-box">k-collapse-transition</div>
          <div class="transition-box">k-collapse-transition</div>
        </div>
      </k-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
