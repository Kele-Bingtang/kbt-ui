<template>
  <k-row :gutter="16">
    <k-col :span="8">
      <div class="statistic-card">
        <k-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <k-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <k-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </k-icon>
              </k-tooltip>
            </div>
          </template>
        </k-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <k-icon>
                <CaretTop />
              </k-icon>
            </span>
          </div>
        </div>
      </div>
    </k-col>
    <k-col :span="8">
      <div class="statistic-card">
        <k-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <k-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <k-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </k-icon>
              </k-tooltip>
            </div>
          </template>
        </k-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <k-icon>
                <CaretBottom />
              </k-icon>
            </span>
          </div>
        </div>
      </div>
    </k-col>
    <k-col :span="8">
      <div class="statistic-card">
        <k-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </k-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <k-icon>
                <CaretTop />
              </k-icon>
            </span>
          </div>
          <div class="footer-item">
            <k-icon :size="14">
              <ArrowRight />
            </k-icon>
          </div>
        </div>
      </div>
    </k-col>
  </k-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--k-fill-color) !important;
}

.k-statistic {
  --k-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--k-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--k-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--k-color-success);
}
.red {
  color: var(--k-color-error);
}
</style>
