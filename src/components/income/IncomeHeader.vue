/**
 * Income Header Component
 * Displays the total income amount
 */
<script setup>
import { formatCurrency, totalIncome } from '../../stores/finance'
</script>

<template>
  <!-- Header container -->
  <div class="income-header">
    <h2 class="title">Ganhos</h2>
    <!-- Total income amount -->
    <div class="total-value">
      {{ formatCurrency(totalIncome) }}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_card.less';
@import '../../assets/styles/components/_income-section.less';
</style> 