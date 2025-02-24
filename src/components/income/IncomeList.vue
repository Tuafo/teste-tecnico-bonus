/**
 * Income List Component
 * Displays a list of all income sources with progress indicators
 */
<script setup>
import { 
  incomeItems, 
  formatCurrency, 
  getIncomePercentage 
} from '../../stores/finance'
</script>

<template>
  <!-- Main list container -->
  <div class="income-list">
    <!-- Individual income items -->
    <div 
      v-for="item in incomeItems" 
      :key="item.id"
      class="income-item"
    >
      <!-- Circular progress indicator -->
      <div class="income-progress">
        <v-progress-circular
          :model-value="getIncomePercentage(item.amount)"
          :size="40"
          :width="4"
          color="#7D83FF"
        >
          <span class="percentage">{{ getIncomePercentage(item.amount) }}%</span>
        </v-progress-circular>
      </div>
      
      <!-- Income source details -->
      <div class="income-details">
        <div>
          <h3>{{ item.name }}</h3>
          <span class="category">{{ item.category }}</span>
        </div>
        <span class="amount">{{ formatCurrency(item.amount) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/shared/_card.less';
@import '../../assets/styles/components/_income-section.less';
</style> 