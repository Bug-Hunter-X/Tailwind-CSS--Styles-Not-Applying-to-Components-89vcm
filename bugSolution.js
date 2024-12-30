```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'], // <-- Include Vue files if applicable
  theme: {
    extend: {
      // ... your custom theme ...
    },
  },
  plugins: [],
};
```