# Financial Dashboard

A modern financial dashboard built with Vue 3, featuring a clean interface for tracking income, expenses, and savings. This project was developed as an optional technical challenge for a front-end position.

## 🚀 Technologies Used

- [Vue.js 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vuetify](https://vuetifyjs.com/) - Material Design Component Framework
  - [Progress Circular](https://vuetifyjs.com/en/components/progress-circular/) - For expense and income indicators
- [PrimeVue](https://primevue.org/) - UI Component Suite
  - [PrimeIcons](https://primevue.org/icons) - Icon Library for action buttons
- [Vite](https://vitejs.dev/) - Build Tool and Development Server
- [Less](https://lesscss.org/) - CSS Preprocessor
- [Blobmaker](https://gradients.app/pt/blob) - Background Blob Generator

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- NPM (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/financial-dashboard.git
   ```

2. Enter the project directory:
   ```bash
   cd financial-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:5173`

## 📦 Production Build

To generate a production build:

```bash
npm run build
```

## 🎨 Design Features

### Color Palette
- Primary Purple: `#7B68EE`
- Income Blue: `#7D83FF`
- Expense Red: `#E94F37`
- Savings Gold: `#B68F40`
- Wallet Purple: `#8A4FFF`

### Typography
The project uses [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) from Google Fonts for optimal readability.

### Visual Elements
- Decorative blobs from [Blobmaker](https://gradients.app/pt/blob) for background aesthetics
- Progress circles from Vuetify for visual data representation
- Icons from PrimeIcons for intuitive navigation

## 📱 Features

- Real-time financial overview
- Monthly balance tracking
- Income and expense breakdown
- Interactive charts
- Responsive design
- Savings progress tracking
- Quick action buttons

## 📁 Project Structure

```
src/
├── assets/
│   └── styles/          # Less stylesheets
│       ├── base/        # Base styles and variables
│       ├── components/  # Component-specific styles
│       └── shared/      # Shared style utilities
├── components/
│   ├── wallet/         # Wallet-related components
│   ├── balance/        # Balance tracking components
│   ├── expenses/       # Expense management
│   └── income/         # Income tracking
├── stores/
│   └── finance.js      # Centralized state management
├── App.vue             # Root component
└── main.js            # Application entry point
```

## 🛠️ Implementation Details

- Modular component architecture
- Centralized state management
- Data visualization
- Clean and maintainable code structure
- Comprehensive commenting

## 🔄 Data Management

Currently using hardcoded data for demonstration purposes. In a production environment, this would be replaced with:
- API integration
- Real-time data updates
- Persistent storage
- User authentication

## 📄 License

This project is under the Unlicense. This is a software of public domain - use as you wish.
