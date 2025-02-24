/**
 * Income Section Component
 * Container for income header and list of income sources
 */
<script setup>
import IncomeHeader from './IncomeHeader.vue'
import IncomeList from './IncomeList.vue'
</script>

<template>
  <!-- Main income section container -->
  <section class="income-section-card">
    <div class="card-content">
      <!-- Income total header -->
      <IncomeHeader />
      <!-- List of all income sources -->
      <IncomeList />
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_card.less';
@import '../../assets/styles/components/_income-section.less';
</style> 