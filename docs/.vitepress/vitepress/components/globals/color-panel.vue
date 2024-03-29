<template>
  <pxw-row class="basic_container">
    <div class="color-container">
      <div v-for="(list, index) in options" :key="index" :class="['button-box', index % 4 === 0 ? 'ml' : '']">
        <div
          class="itemColor"
          v-for="(item, ind) in list"
          :key="ind"
          :style="{ background: item, color: ind < 5 ? 'black' : 'white' }"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </pxw-row>
</template>

<script lang="ts" setup>
const options = [
  ["#FFEEE8", "#FCD0C3", "#F9B19F", "#F5907C", "#F26E59", "#EF4A38", "#C62E23", "#9E1712", "#750707", "#4D0003"],
  ["#FFF2E8", "#FCDBC4", "#F9C2A0", "#F7A77D", "#F48B5B", "#F16C39", "#C84D23", "#9F3113", "#761B07", "#4D0B00"],
  ["#FFF8E8", "#FEE8BD", "#FDD692", "#FCC168", "#FBA93E", "#FA9014", "#CF6E0C", "#A35007", "#783502", "#4D1F00"],
  ["#FFFFE8", "#FEFCC4", "#FCF6A0", "#FBEE7D", "#F9E45A", "#F8D837", "#CDAB22", "#A28112", "#775907", "#4D3600"],
  ["#FAFFE8", "#E4F4B6", "#CCE987", "#B3DF5C", "#99D434", "#80C910", "#65AA0A", "#4D8B06", "#376C02", "#244D00"],
  ["#E8FFED", "#B2F0C0", "#80E19A", "#54D27A", "#2DC35F", "#0BB449", "#079A42", "#04803A", "#026631", "#004D26"],
  ["#E8FFFD", "#BFF9F5", "#98F3F0", "#73ECEC", "#4FE1E6", "#2DD5E0", "#1CABBB", "#0F8496", "#065F71", "#003D4D"],
  ["#E8F8FF", "#BEE8FF", "#95D6FF", "#6BC1FF", "#42AAFF", "#1890FF", "#0F6DD2", "#084FA6", "#033479", "#001D4D"],
  ["#F2F5FF", "#D9E6FF", "#A4BFFC", "#7A9DF5", "#577AE8", "#395AE3", "#233DC2", "#132598", "#071272", "#00054D"],
  ["#FFE8F1", "#FCC3DB", "#F8A0C8", "#F57DB7", "#F15BA9", "#EE3A9E", "#C62482", "#9D1368", "#75074E", "#4D0034"],
  ["#F5E8FF", "#DFBFF8", "#C799F1", "#AD74EB", "#9351E4", "#7830DD", "#591EB9", "#3F1095", "#280671", "#16004D"],
  ["#FFE8FB", "#F7BEF0", "#EF96E6", "#E870E0", "#E04CDB", "#D82BD8", "#B01BB5", "#890F92", "#65066F", "#42004D"],
];
</script>

<style lang="scss" scoped>
.basic_container {
  width: 100%;

  .color-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .button-box {
      width: calc((100% - 60px) / 4);
      height: 480px;
      margin-bottom: 20px;
      margin-left: 20px;
    }

    .ml {
      margin-left: 0;
    }

    .button-box > div {
      width: 100%;
      height: 48px;
    }

    .itemColor {
      display: flex;
      align-items: center;
      padding-left: 24px;
    }
  }
}
</style>
