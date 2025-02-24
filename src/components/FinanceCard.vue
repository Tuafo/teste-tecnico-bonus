/**
 * Main Finance Card Component
 * Container for all financial information sections
 */
<script setup>
import WalletSection from './wallet/WalletSection.vue'
import BalanceSection from './balance/BalanceSection.vue'
import ExpensesSection from './expenses/ExpensesSection.vue'
import IncomeSection from './income/IncomeSection.vue'
</script>

<template>
  <div class="finance-card">
    <!-- Decorative blobs background -->
    <div class="blobs">
      <div class="blob blob-1">
        <img src="/blobs/1/1.svg" alt="blob 1 fill" class="blob-fill" />
        <img src="/blobs/1/2.svg" alt="blob 1 stroke" class="blob-stroke" />
      </div>
      <div class="blob blob-2">
        <img src="/blobs/1/1.svg" alt="blob 2 fill" class="blob-fill" />
        <img src="/blobs/1/2.svg" alt="blob 2 stroke" class="blob-stroke" />
      </div>
      <div class="blob blob-3">
        <img src="/blobs/2/1.svg" alt="blob 3" />
      </div>
      <div class="blob blob-4">
        <img src="/blobs/2/1.svg" alt="blob 4" />
      </div>
      <div class="blob blob-5">
        <img src="/blobs/1/2.svg" alt="blob 5 stroke" />
      </div>
    </div>

    <!-- Main content container -->
    <div class="card-content">
      <!-- Top section: Wallet and Balance -->
      <div class="top-section">
        <div class="wallet-section">
          <WalletSection />
        </div>
        <div class="balance-section">
          <BalanceSection />
        </div>
      </div>
      
      <!-- Bottom section: Expenses and Income -->
      <div class="bottom-section">
        <div class="expenses-section">
          <ExpensesSection />
        </div>
        <div class="income-section">
          <IncomeSection />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/components/_finance-card.less';
</style> 