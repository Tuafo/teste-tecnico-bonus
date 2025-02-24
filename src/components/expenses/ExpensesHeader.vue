/**
 * Expenses Header Component
 * Displays the total expenses amount
 */
<script setup>
import { formatCurrency, totalExpenses } from '../../stores/finance'
</script>

<template>
  <!-- Header container -->
  <div class="expenses-header">
    <h2 class="title">Despesas</h2>
    <!-- Total expenses amount -->
    <div class="total-value">
      {{ formatCurrency(totalExpenses) }}
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_card.less';
@import '../../assets/styles/components/_expenses-section.less';
</style> 