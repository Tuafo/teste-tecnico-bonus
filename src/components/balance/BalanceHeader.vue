/**
 * Balance Header Component
 * Displays balance overview with expandable detailed view
 */
<script setup>
import { ref, computed } from 'vue'
import { 
  formatCurrency, 
  getBalanceTotals,
  monthlyData 
} from '../../stores/finance'

// Controls the visibility of the details popup
const isExpanded = ref(false)

// Get the current month's financial value
const currentMonthValue = computed(() => {
  return monthlyData.value[monthlyData.value.length - 1]
})

// Calculate totals for all financial categories
const totals = computed(() => getBalanceTotals(currentMonthValue.value))

// Toggle the details popup visibility
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="balance-header">
    <!-- Header content with title and expand button -->
    <div class="header-content">
      <div class="title-row">
        <h2 class="title">Meu Balanço</h2>
        <button class="expand-button" @click="toggleExpand">
          <i class="pi pi-expand"></i>
        </button>
      </div>
    </div>

    <!-- Detailed balance popup -->
    <div class="popup-overlay" v-if="isExpanded" @click="toggleExpand">
      <div class="popup-content" @click.stop>
        <!-- Popup header with close button -->
        <div class="popup-header">
          <h3>Detalhes do Balanço</h3>
          <button class="close-button" @click="toggleExpand">
            <i class="pi pi-times"></i>
          </button>
        </div>
        <!-- Grid of financial totals -->
        <div class="totals-grid">
          <div class="total-item income">
            <span class="label">Ganhos</span>
            <span class="value">{{ formatCurrency(totals.income) }}</span>
          </div>
          <div class="total-item expenses">
            <span class="label">Gastos</span>
            <span class="value">{{ formatCurrency(totals.expenses) }}</span>
          </div>
          <div class="total-item savings">
            <span class="label">Poupança</span>
            <span class="value">{{ formatCurrency(totals.savings) }}</span>
          </div>
          <div class="total-item others">
            <span class="label">Outros</span>
            <span class="value">{{ formatCurrency(totals.others) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../assets/styles/components/_balance-header.less';

// Header content styles
.header-content {
  padding: @spacing-base @spacing-lg;
}

// Title row layout
.title-row {
  display: flex;
  align-items: center;
  gap: @spacing-sm;

  .title {
    margin: 0;
  }
}

// Expand button styles
.expand-button {
  background: none;
  border: none;
  padding: @spacing-xs;
  cursor: pointer;
  color: @gray-600;
  display: flex;
  align-items: center;
  justify-content: center;

  .pi {
    font-size: @font-size-lg;
  }

  &:hover {
    color: @primary;
  }
}

// Popup overlay styles
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

// Popup content container
.popup-content {
  background: @white;
  border-radius: @border-radius-lg;
  padding: @spacing-xl;
  width: 400px;
  box-shadow: @shadow-lg;
}

// Popup header styles
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: @spacing-lg;

  h3 {
    margin: 0;
    font-size: @font-size-xl;
    font-weight: 600;
    color: @gray-800;
  }
}

// Close button styles
.close-button {
  background: none;
  border: none;
  padding: @spacing-sm;
  cursor: pointer;
  color: @gray-600;
  display: flex;
  align-items: center;
  justify-content: center;

  .pi {
    font-size: @font-size-xl;
  }

  &:hover {
    color: @gray-800;
  }
}

// Grid layout for totals
.totals-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: @spacing-base;
}

// Individual total item styles
.total-item {
  display: flex;
  flex-direction: column;
  gap: @spacing-xs;
  padding: @spacing-base;
  background: @gray-100;
  border-radius: @border-radius-md;
  transition: @transition-default;

  &:hover {
    transform: translateY(-2px);
    box-shadow: @shadow-sm;
  }

  .label {
    font-size: @font-size-sm;
    color: @gray-600;
  }

  .value {
    font-size: @font-size-lg;
    font-weight: 600;
  }

  // Color variations for different types
  &.income .value {
    color: @income-color;
  }

  &.expenses .value {
    color: @expense-color;
  }

  &.savings .value {
    color: @savings-color;
  }

  &.others .value {
    color: @gray-900;
  }
}

// Mobile responsive styles
@media (max-width: 768px) {
  .header-content {
    padding: @spacing-base;
  }

  .popup-content {
    width: 320px;
    padding: @spacing-lg;
    margin: @spacing-base;
  }

  .popup-header {
    margin-bottom: @spacing-base;

    h3 {
      font-size: @font-size-lg;
    }
  }

  .totals-grid {
    gap: @spacing-sm;
  }

  .total-item {
    padding: @spacing-sm;

    .value {
      font-size: @font-size-base;
    }
  }
}
</style> 