/**
 * Expenses Section Component
 * Container for expenses header and list of expenses
 */
<script setup>
import ExpensesHeader from './ExpensesHeader.vue'
import ExpensesList from './ExpensesList.vue'
</script>

<template>
  <!-- Main expenses section container -->
  <section class="expenses-section-card">
    <div class="card-content">
      <!-- Expenses total header -->
      <ExpensesHeader />
      <!-- List of all expenses -->
      <ExpensesList />
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_card.less';
@import '../../assets/styles/components/_expenses-section.less';
</style> 