<script setup lang="ts">
import { reactive } from 'vue'

const config = reactive({
  content: 'Kbt UI',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})
</script>

<template>
  <div class="wrapper">
    <k-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="demo">
        <h1>Kbt UI</h1>
        <h2>基于 Vue 3，面向设计师和开发者的组件库</h2>
        <img src="/images/hamburger.png" alt="示例图片" />
      </div>
    </k-watermark>
    <k-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <k-form-item label="Content">
        <k-input v-model="config.content" />
      </k-form-item>
      <k-form-item label="Color">
        <k-color-picker v-model="config.font.color" show-alpha />
      </k-form-item>
      <k-form-item label="FontSize">
        <k-slider v-model="config.font.fontSize" />
      </k-form-item>
      <k-form-item label="zIndex">
        <k-slider v-model="config.zIndex" />
      </k-form-item>
      <k-form-item label="Rotate">
        <k-slider v-model="config.rotate" :min="-180" :max="180" />
      </k-form-item>
      <k-form-item label="Gap">
        <k-space>
          <k-input-number v-model="config.gap[0]" controls-position="right" />
          <k-input-number v-model="config.gap[1]" controls-position="right" />
        </k-space>
      </k-form-item>
      <k-form-item label="Offset">
        <k-space>
          <k-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <k-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </k-space>
      </k-form-item>
    </k-form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.watermark {
  display: flex;
  flex: auto;
}
.demo {
  flex: auto;
}
.form {
  width: 330px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

img {
  z-index: 10;
  width: 100%;
  max-width: 300px;
  position: relative;
}
</style>
