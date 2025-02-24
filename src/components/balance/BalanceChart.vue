/**
 * Balance Chart Component
 * Displays a bar chart showing financial distribution over months
 */
<script setup>
import { months, getChartSegmentHeight, monthlyData } from '../../stores/finance'

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <!-- Chart container with fixed height -->
  <div class="chart-container">
    <!-- Container for all month bars -->
    <div class="bars-container">
      <div 
        v-for="(value, index) in monthlyData" 
        :key="index"
        class="month-container"
      >
        <!-- Individual bar with segments -->
        <div class="bar-container">
          <!-- Income segment -->
          <div 
            class="bar-segment income"
            :style="{ height: getChartSegmentHeight(value, 'income') }"
          />
          <!-- Expenses segment -->
          <div 
            class="bar-segment expenses"
            :style="{ height: getChartSegmentHeight(value, 'expenses') }"
          />
          <!-- Savings segment -->
          <div 
            class="bar-segment savings"
            :style="{ height: getChartSegmentHeight(value, 'savings') }"
          />
          <!-- Others segment -->
          <div 
            class="bar-segment others"
            :style="{ height: getChartSegmentHeight(value, 'others') }"
          />
        </div>
        <!-- Month label -->
        <span class="month-label">{{ months[index] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// Main chart container
.chart-container {
  flex: 1;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

// Container for all bars
.bars-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  gap: 8px;
  width: 100%;
  margin: 0;
}

// Individual month container
.month-container {
  flex: 1;
  max-width: 24px;
  min-width: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

// Bar container with segments
.bar-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 6px;
  height: calc(100% - 24px);
  justify-content: flex-end;
  align-items: center;
}

// Individual bar segment styles
.bar-segment {
  width: 100%;
  border-radius: 50px;
  transition: height 0.3s ease;

  // Color variations for different types
  &.income {
    background-color: #7D83FF;
  }

  &.expenses {
    background-color: #E94F37;
  }

  &.savings {
    background-color: #B68F40;
  }

  &.others {
    background-color: #0D1F2D;
  }
}

// Month label styles
.month-label {
  font-size: 11px;
  font-weight: 500;
  color: @gray-600;
  padding-top: 6px;
  text-align: center;
  width: 100%;
}
</style> 