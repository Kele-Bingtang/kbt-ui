<template>
  <k-carousel indicator-position="outside">
    <k-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </k-carousel-item>
  </k-carousel>
</template>

<style scoped>
.k-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.k-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.k-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
