# Flashbang Effect Button

A modern, reusable React component that creates a flashbang effect when clicked. The component features a sleek moon icon button that, when clicked, creates a bright flash effect across the screen that fades away after 3.5 seconds. After the first click, it shows a stylish glass-effect popup message.

## Demo Preview
- Dark mode button with moon icon
- Smooth hover animations
- 3.5-second flashbang effect
- Modern glass-effect popup message after first click
- Fully responsive

## Features
- Clean, minimal design
- Smooth animations
- Glass-morphism popup effect
- Backdrop blur effects
- Modern typography

## Installation

### Method 1: Copy Component Files
1. Copy the following files to your React project:
   ```
   src/components/FlashbangButton.jsx
   src/components/FlashbangButton.css
   ```

### Method 2: Manual Implementation
1. Create a new component file `FlashbangButton.jsx` in your components directory
2. Create a new CSS file `FlashbangButton.css` in the same directory
3. Copy the code from both files in this repository

## Usage

1. Import the component in your React file:
   ```jsx
   import FlashbangButton from './components/FlashbangButton';
   ```

2. Use the component in your JSX:
   ```jsx
   <FlashbangButton />
   ```

## Customization

You can customize the following aspects in the CSS file:

1. Button size:
   ```css
   .flashbang-button {
     width: 40px;  /* Adjust size */
     height: 40px; /* Adjust size */
   }
   ```

2. Flash duration:
   ```jsx
   // In FlashbangButton.jsx
   setTimeout(() => {
     setIsFlashing(false);
   }, 3500); // Adjust duration in milliseconds
   ```

3. Flash animation:
   ```css
   @keyframes flashbang {
     0% { opacity: 0; }
     5% { opacity: 1; }
     30% { opacity: 1; } /* Adjust flash intensity and duration */
     100% { opacity: 0; }
   }
   ```

4. Popup styling:
   ```css
   .glass-popup {
     background: rgba(255, 255, 255, 0.1); /* Adjust background opacity */
     backdrop-filter: blur(10px); /* Adjust blur intensity */
     /* Customize other popup styles */
   }
   ```

## Dependencies
- React (v16.8 or higher for hooks support)

## Project Setup from Scratch

1. Create a new React project:
   ```bash
   npm create vite@latest my-app -- --template react
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add the component files as described in the Installation section

4. Run the development server:
   ```bash
   npm run dev
   ```

## Notes
- The flash effect uses a full-screen overlay with high z-index
- The effect is triggered through React state management
- The component is accessible with proper aria-labels
- The animation is handled through CSS for better performance

## Browser Support
Works in all modern browsers that support:
- CSS Animations
- CSS Flexbox
- React 16.8+
