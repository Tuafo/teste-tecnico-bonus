/**
 * Wallet Header Component
 * Displays the current balance in the wallet section
 */
<script setup>
import { formatCurrency, totalIncome } from '../../stores/finance'
</script>

<template>
  <!-- Wallet header container -->
  <div class="wallet-header">
    <!-- Balance information -->
    <div class="balance-section">
      <h2 class="balance-label">Saldo</h2>
      <h1 class="balance-value">{{ formatCurrency(totalIncome) }}</h1>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/components/_wallet-header.less';
</style> 