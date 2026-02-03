# 🍹 Juice App

A simple and delightful mobile application for ordering fresh juices, built with React Native and Expo.

## Features

- **Browse Juices**: View a menu of 6 different fresh juice options
- **Add to Cart**: Select your favorite juices with a simple tap
- **Cart Management**: View your selected items and total price
- **Beautiful UI**: Clean, modern interface with emoji icons and vibrant colors
- **Real-time Updates**: Cart updates instantly as you add items

## Available Juices

1. 🍊 **Orange Juice** - Freshly squeezed orange juice ($4.99)
2. 🍎 **Apple Juice** - Crisp and refreshing apple juice ($4.49)
3. 🥭 **Mango Juice** - Tropical mango juice ($5.49)
4. 🍉 **Watermelon Juice** - Sweet watermelon juice ($4.99)
5. 🍍 **Pineapple Juice** - Tangy pineapple juice ($5.29)
6. 🍇 **Grape Juice** - Rich grape juice ($4.79)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, for easier development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/J-bot-oss/software-construction-mobile-app.git
cd software-construction-mobile-app
```

2. Install dependencies:
```bash
npm install
```

### Running the App

#### Using Expo Go (Recommended for Quick Testing)

1. Install Expo Go on your mobile device from the App Store (iOS) or Google Play (Android)

2. Start the development server:
```bash
npm start
```

3. Scan the QR code with your device:
   - **iOS**: Use the Camera app to scan the QR code
   - **Android**: Use the Expo Go app to scan the QR code

#### Using Simulators/Emulators

For iOS Simulator (macOS only):
```bash
npm run ios
```

For Android Emulator:
```bash
npm run android
```

For Web Browser:
```bash
npm run web
```

## Project Structure

```
.
├── App.js              # Main application component
├── package.json        # Project dependencies and scripts
├── app.json           # Expo configuration
├── babel.config.js    # Babel configuration
└── README.md          # This file
```

## Technology Stack

- **React Native**: Cross-platform mobile development framework
- **Expo**: Toolchain built around React Native
- **JavaScript (ES6+)**: Programming language
- **React Hooks**: For state management (useState)

## App Architecture

The app follows a simple component-based architecture:

- **Main App Component** (`App.js`): Contains all the UI and business logic
  - Juice menu display
  - Cart management
  - Price calculation
  - State management using React Hooks

### Key Features Implementation

1. **State Management**: Uses React's `useState` hook to manage cart items and selected juice
2. **Dynamic Pricing**: Calculates total price in real-time based on cart contents
3. **Responsive Design**: Uses React Native's `StyleSheet` for consistent styling
4. **Touch Interactions**: Implements `TouchableOpacity` for button presses

## Future Enhancements

- Add quantity adjustment for each juice
- Implement size options (small, medium, large)
- Add payment integration
- Include user authentication
- Add order history
- Implement juice customization (add-ons, ice level, etc.)
- Add delivery tracking
- Include juice ratings and reviews

## Contributing

This project is part of a software construction course. Contributions and suggestions are welcome!

## Group Members

1. Ebong Jesse Johnson - Coordinator
2. Nakabale Trevor Christian - App Analyst
3. Ringtho Marilyn Somers - Systems Thinker
4. Kobumanzi Trisha - Risk and Change Analyst
5. Mwesigwa Simon Peter - Documentation Lead

## License

MIT License - Feel free to use this project for learning purposes.

## Previous Project

This repository previously contained a software construction analysis of the Spotify application. That documentation has been preserved in the commit history.
