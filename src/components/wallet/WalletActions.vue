/**
 * Wallet Actions Component
 * Displays quick action buttons for common financial operations
 */
<script setup>
import { walletActions } from '../../stores/finance'
</script>

<template>
  <!-- Scrollable actions container -->
  <div class="actions-scroll">
    <!-- Grid/flex container for action buttons -->
    <div class="actions-container">
      <button 
        v-for="action in walletActions" 
        :key="action.label"
        class="action-button"
        :title="action.label"
      >
        <i class="pi" :class="action.icon"></i>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/components/_wallet-actions.less';
</style> 