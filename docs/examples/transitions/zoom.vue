<template>
  <div>
    <k-button @click="show = !show">Click Me</k-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="k-zoom-in-center">
        <div v-show="show" class="transition-box">.k-zoom-in-center</div>
      </transition>

      <transition name="k-zoom-in-top">
        <div v-show="show" class="transition-box">.k-zoom-in-top</div>
      </transition>

      <transition name="k-zoom-in-bottom">
        <div v-show="show" class="transition-box">.k-zoom-in-bottom</div>
      </transition>
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
