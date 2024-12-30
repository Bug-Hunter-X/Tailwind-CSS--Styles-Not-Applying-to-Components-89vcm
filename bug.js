```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // <-- Potential problem here
  theme: {
    extend: {
      // ... your custom theme ...
    },
  },
  plugins: [],
};
```