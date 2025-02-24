/**
 * Expenses List Component
 * Displays a list of all expenses with progress indicators
 */
<script setup>
import { 
  expenses, 
  getExpensePercentage, 
  formatCurrency 
} from '../../stores/finance'
</script>

<template>
  <!-- Main list container -->
  <div class="expenses-list">
    <!-- Individual expense items -->
    <div 
      v-for="expense in expenses" 
      :key="expense.id" 
      class="expense-item"
    >
      <!-- Circular progress indicator -->
      <div class="expense-progress">
        <v-progress-circular
          :model-value="getExpensePercentage(expense.amount)"
          :size="40"
          :width="4"
          color="#E94F37"
        >
          <span class="percentage">{{ getExpensePercentage(expense.amount) }}%</span>
        </v-progress-circular>
      </div>
      
      <!-- Expense details -->
      <div class="expense-details">
        <div>
          <h3>{{ expense.name }}</h3>
          <span class="category">{{ expense.category }}</span>
        </div>
        <span class="amount">{{ formatCurrency(expense.amount) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_list.less';
@import '../../assets/styles/components/_expenses-section.less';
</style> 