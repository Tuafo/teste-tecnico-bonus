<script setup>
import BalanceHeader from './BalanceHeader.vue'
import BalanceChart from './BalanceChart.vue'
</script>

<template>
  <section class="balance-section-card">
    <div class="card-content">
      <BalanceHeader />
      <div class="chart-container">
        <BalanceChart />
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../../assets/styles/components/_balance-section.less';
</style> 