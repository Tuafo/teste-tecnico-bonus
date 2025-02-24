import { ref, computed } from 'vue'

/**
 * Finance Data Store
 * Centralizes all financial data and calculations for the application
 */

// Income Data - List of all income sources
export const incomeItems = ref([
  {
    id: 1,
    name: 'Salário',
    category: 'Mensal',
    amount: 3500.00
  },
  {
    id: 2,
    name: 'Freelance',
    category: 'Projetos',
    amount: 800.00
  },
  {
    id: 3,
    name: 'Investimentos',
    category: 'Rendimentos',
    amount: 267.00
  }
])

// Expenses Data - List of all monthly expenses
export const expenses = ref([
  {
    id: 1,
    name: 'Aluguel',
    category: 'Moradia',
    amount: 1500
  },
  {
    id: 2,
    name: 'Contas',
    category: 'Utilidades',
    amount: 300
  },
  {
    id: 3,
    name: 'Mercado',
    category: 'Alimentação',
    amount: 600
  },
  {
    id: 4,
    name: 'Transporte',
    category: 'Locomoção',
    amount: 200
  }
])

// Others Data - Additional expenses and miscellaneous costs
export const othersItems = ref([
  {
    id: 1,
    name: 'Academia',
    category: 'Saúde',
    amount: 120
  },
  {
    id: 2,
    name: 'Netflix',
    category: 'Entretenimento',
    amount: 56
  },
  {
    id: 3,
    name: 'Spotify',
    category: 'Entretenimento',
    amount: 22
  },
  {
    id: 4,
    name: 'Internet',
    category: 'Serviços',
    amount: 150
  },
  {
    id: 5,
    name: 'Celular',
    category: 'Serviços',
    amount: 90
  },
  {
    id: 6,
    name: 'Lazer',
    category: 'Entretenimento',
    amount: 200
  }
])

// Chart Data - Monthly financial values for the last 12 months
export const monthlyData = ref([
  4567, 4580, 4620, 4540, 4590, 4680,
  4710, 4600, 4850, 4770, 4830, 4567
])

// Wallet Actions - Available quick actions in the wallet section
export const walletActions = [
  { icon: 'pi-qrcode', label: 'PIX' },
  { icon: 'pi-send', label: 'TRANSFERIR' },
  { icon: 'pi-credit-card', label: 'CARTÕES' },
  { icon: 'pi-money-bill', label: 'EMPRÉSTIMO' },
  { icon: 'pi-wallet', label: 'COBRAR' },
  { icon: 'pi-chart-line', label: 'INVESTIR' }
]

// Computed Values
// Calculate total income from all sources
export const totalIncome = computed(() => {
  return incomeItems.value.reduce((sum, item) => sum + item.amount, 0)
})

// Calculate total expenses excluding others
export const totalExpenses = computed(() => {
  return expenses.value.reduce((sum, expense) => sum + expense.amount, 0)
})

// Calculate total of other expenses
export const totalOthers = computed(() => {
  return othersItems.value.reduce((sum, item) => sum + item.amount, 0)
})

// Calculate monthly balance (Income - Expenses - Others)
export const monthlyBalance = computed(() => {
  return totalIncome.value - totalExpenses.value - totalOthers.value
})

// Calculate financial ratios for expenses, savings, and others
export const financialRatios = computed(() => {
  const total = totalIncome.value
  const expenseRatio = totalExpenses.value / total
  const othersRatio = totalOthers.value / total
  const savingsRatio = 1 - expenseRatio - othersRatio
  
  return {
    expenses: expenseRatio,
    savings: savingsRatio,
    others: othersRatio
  }
})

// Utility Functions

/**
 * Format a number as Brazilian currency (BRL)
 * @param {number} value - The value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

/**
 * Calculate what percentage an income amount represents of total income
 * @param {number} amount - The income amount
 * @returns {string} Percentage with one decimal place
 */
export const getIncomePercentage = (amount) => {
  return ((amount / totalIncome.value) * 100).toFixed(1)
}

/**
 * Calculate what percentage an expense amount represents of total income
 * @param {number} amount - The expense amount
 * @returns {string} Percentage with one decimal place
 */
export const getExpensePercentage = (amount) => {
  return ((amount / totalIncome.value) * 100).toFixed(1)
}

/**
 * Calculate the height for chart segments based on value and type
 * @param {number} value - The monthly value
 * @param {string} type - The segment type (income, expenses, savings, others)
 * @returns {string} CSS height value in pixels
 */
export const getChartSegmentHeight = (value, type) => {
  const baseHeight = 45
  const scale = (value / Math.max(...monthlyData.value))
  const ratios = financialRatios.value
  
  switch (type) {
    case 'income':
      return `${baseHeight * scale}px`
    case 'expenses':
      return `${baseHeight * scale * ratios.expenses}px`
    case 'savings':
      return `${baseHeight * scale * ratios.savings}px`
    case 'others':
      return `${baseHeight * scale * ratios.others}px`
  }
}

/**
 * Get the total values for each category based on monthly value
 * @param {number} monthValue - The total value for the month
 * @returns {Object} Object containing income, expenses, savings, and others values
 */
export const getBalanceTotals = (monthValue) => {
  const ratios = financialRatios.value
  return {
    income: monthValue,
    expenses: monthValue * ratios.expenses,
    savings: monthValue * ratios.savings,
    others: monthValue * ratios.others
  }
}

// Chart Labels - Abbreviated month names
export const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']