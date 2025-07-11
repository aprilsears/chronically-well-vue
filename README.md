# chronically-well-vue

**Overview:**
Continuation of the Code:You Capstone project "chronically well" using Vue.js framework to convert JavaScript files.

**Project Overview:**
Most fitness applications lack accommodations for individuals with chronic illnesses, creating barriers to maintaining an active lifestyle. This project addresses the need for customizable, accessible fitness resources that considers ability levels and health conditions through a modern Vue.js implementation.

## 📋 Project Organization

| Page | Description |
|------|-------------|
| **Landing Page** | The landing page provides users with options to navigate the web application and gives an overview of what to expect, featuring sections for workout routines, macro-nutrient calculator, and nutrition planning. |
| **Workout Database Page** | Using a custom Vue database and YouTube integration, this page displays categorized exercises (Push/Pull/Legs) with instructional videos, detailed information, and modifications for different ability levels. |
| **Macro Calculator** | An interactive tool that allows users to input their weight and activity level to receive personalized nutrition recommendations, including daily calorie, protein, fat, and carbohydrate targets. |
| **Nutrition** | Integrates with Nutritionix API to allow users to search for food items and view detailed nutritional information, supporting better dietary choices for those with chronic conditions. |

## 🚀 Key Features

- **Accessible Workout Database**: Exercises categorized with modifications for different ability levels
- **Chronic Illness Accommodations**: Customizable fitness resources considering health conditions
- **Nutritionix API Integration**: Comprehensive food database for dietary tracking
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Modern Vue.js Architecture**: Clean, maintainable code with component-based structure

- **Frontend**: Vue.js 3 (Composition API)
- **State Management**: Pinia
- **Routing**: Vue Router
- **HTTP Client**: Axios
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: Vite (implied from Vue 3 structure)

## 🎨 Design System

The application uses a custom CSS variable system for consistent theming:

```css
/* Custom Color Palette */
--flora: /* Light background color */
--sage: /* Secondary background */
--ethereal: /* Light accent */
--bark: /* Dark primary */
--plum: /* Primary brand color */
--cliff: /* Secondary accent */
```

## 🏋️ Workout Database Feature

The workout database categorizes exercises into three main groups:

- **Push**: Chest, shoulders, triceps exercises
- **Pull**: Back, biceps exercises  
- **Legs**: Lower body exercises

Each exercise includes:
- Detailed instructions
- Video demonstrations (embedded YouTube)
- Difficulty levels
- Equipment requirements
- Modifications for different fitness levels

### Key Components:

```vue
<!-- Workout Store (Pinia) -->
export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    categories: ['push', 'pull', 'legs'],
    workouts: workoutDatabase
  }),
  getters: {
    getExercisesByCategory: (state) => (category) => {
      return state.workouts[category]?.exercises || []
    }
  }
})
```

## 🥗 Nutrition Tracking

The nutrition feature integrates with the Nutritionix API to provide comprehensive food data, specifically designed to support individuals with chronic conditions in making informed dietary choices:

- Search for food items via Nutritionix API
- View detailed nutritional information
- Track calories, protein, fat, and carbohydrates
- Responsive table layout for mobile devices
- Chronic illness-friendly food recommendations

### Nutritionix API Integration:

```javascript
async function onSearch() {
  try {
    const response = await axios.post('/api/nutrition', { 
      query: foodQuery.value 
    })
    nutritionResults.value = response.data
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to fetch nutrition data.'
  }
}
```

## 📱 Responsive Design

The application features comprehensive mobile responsiveness:

### Mobile-First Approach:
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized table displays for small screens
- Adaptive typography and spacing

### Breakpoints:
- **Mobile**: `max-width: 480px`
- **Tablet**: `max-width: 900px`
- **Desktop**: `min-width: 900px`

## 🔧 State Management

Uses Pinia for centralized state management:

```javascript
// Workout Store
const useWorkoutStore = defineStore('workout', {
  state: () => ({
    categories: ['push', 'pull', 'legs'],
    workouts: workoutDatabase
  })
})

// Nutrition Store (placeholder for future features)
const useNutritionStore = defineStore('nutrition', {
  // Implementation pending
})
```

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🌟 Key Vue.js Features Utilized

- **Composition API**: Modern, reactive state management
- **Single File Components**: Organized, maintainable code structure
- **Reactive Data Binding**: Real-time UI updates
- **Component-Based Architecture**: Reusable, modular components
- **Vue Router**: Seamless navigation between views
- **Scoped Styling**: Component-specific CSS without conflicts

## 🎯 Future Enhancements

- Complete nutrition store implementation
- User authentication and profiles
- Workout tracking and progress monitoring
- Meal planning features
- Integration with fitness trackers
- Offline capability with service workers

## 📋 API Requirements

The application integrates with the following APIs:

- `POST /api/nutrition` - Nutritionix API integration for food data search
- YouTube for embedded workout videos
- Additional endpoints for workout data management

## 👨‍💻 Developer Information

**GitHub Profile**: [April Sears](https://github.com/aprilsears)
**Personal Site & Blog**: [Personal](https://github.com/aprilsears/aprilsears-site-blog)

This project showcases modern Vue.js development practices and demonstrates collaborative development through Code:You's innovative approach to software engineering education.

## 🎯 Project Goals

This Vue.js redesign addresses the critical gap in fitness applications for individuals with chronic illnesses by:

- Creating accessible, customizable fitness resources
- Providing modifications for different ability levels
- Integrating comprehensive nutritional support
- Utilizing modern web technologies for better user experience

## 🤝 Contributing

This project demonstrates modern Vue.js development practices including:
- Composition API usage for reactive state management
- Pinia for centralized state management
- Responsive design principles with accessibility focus
- Modular component architecture
- API integration best practices
- Human-AI collaborative development methodology

## 🏆 Acknowledgments

- **Code:You** for the innovative capstone project structure
- **Claude AI (Anthropic)** for collaborative development partnership
- **Nutritionix** for comprehensive food database API
- **YouTube** for educational video content integration

---
