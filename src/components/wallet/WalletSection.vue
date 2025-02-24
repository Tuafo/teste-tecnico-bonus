<script setup>
import WalletHeader from './WalletHeader.vue'
import WalletActions from './WalletActions.vue'
</script>

<template>
  <section class="wallet-section-card">
    <div class="card-content">
      <WalletHeader />
      <WalletActions />
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../../assets/styles/components/_wallet-section.less';
</style> 