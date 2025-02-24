/**
 * Root Application Component
 * Serves as the main container for the finance card interface
 */
<script setup>
import FinanceCard from './components/FinanceCard.vue'
</script>

<template>
  <!-- Main application container -->
  <div class="app">
    <FinanceCard />
  </div>
</template>

<style lang="less">
// Import Noto Sans font with all weights and styles
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

// Root styles
:root {
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
}

// Base body styles
body {
  margin: 0;
  min-height: 100vh;
  background: #f8f9fa;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Main app container styles
.app {
  padding: 2rem;
  min-height: 100vh;
  position: relative;
}

// Mobile responsive styles
@media (max-width: 768px) {
  body {
    background: none;
  }

  .app {
    padding: 0;
    height: 100vh;
    overflow: auto;
  }
}
</style>
