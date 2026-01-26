# Odd or Even Number Checker

A modern, interactive web application that determines whether a given number is odd or even. Built with vanilla JavaScript, HTML5, and CSS3, this project demonstrates clean code practices, responsive design, and user-friendly interface design.

## Overview

This application provides an intuitive way for users to check if any integer is odd or even. Rather than using basic browser alerts, the interface features a glassmorphism design with smooth animations, real-time input validation, and visual feedback that creates an engaging user experience.

## Features

- **Real-time Validation**: Input is validated before processing to ensure only valid numbers are accepted
- **Visual Feedback**: Clear, animated result display with distinct styling for odd and even numbers
- **Keyboard Support**: Press Enter to check the number without clicking the button
- **Responsive Design**: Fully functional across desktop, tablet, and mobile devices
- **Accessibility**: Semantic HTML with ARIA labels for screen reader support
- **Modern UI**: Glassmorphism effects with a unique warm terracotta and sage color palette
- **Smooth Animations**: Subtle transitions and animations enhance the user experience

## Technology Stack

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with custom properties, gradients, and animations
- **JavaScript (ES6+)**: Clean, modular code with event handling and DOM manipulation
- **Google Fonts**: Outfit font family for premium typography

## File Structure

```
JS-Odd-Even-Number-Checker/
├── Index.html          # Main HTML structure
├── style.css           # Stylesheet with design system
├── script.js           # Application logic and functionality
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## How It Works

The application uses the modulo operator (`%`) to determine if a number is odd or even:

- If `number % 2 === 0`, the number is even (divisible by 2 with no remainder)
- If `number % 2 === 1`, the number is odd (leaves a remainder of 1 when divided by 2)

The logic includes comprehensive input validation to handle edge cases such as empty inputs, non-numeric values, and special characters.

## Usage

### Running Locally

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Martin888Maina/JS-Odd-Even-Number-Checker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd JS-Odd-Even-Number-Checker
   ```

3. Open `Index.html` in your preferred web browser:
   - Double-click the file, or
   - Use a local server for best results

### Using the Application

1. Enter any integer in the input field
2. Click the "Check Number" button or press Enter
3. View the result displayed with smooth animation
4. Enter a new number to check again

## Browser Compatibility

This application is compatible with all modern web browsers:

- Google Chrome (recommended)
- Mozilla Firefox
- Safari
- Microsoft Edge
- Opera

Note: For the best visual experience, use a browser that supports backdrop-filter for glassmorphism effects.

## Design Philosophy

The interface uses a carefully selected color palette featuring warm terracotta and sage tones, providing a unique and sophisticated aesthetic that stands apart from typical web applications. The glassmorphism design creates depth and visual interest while maintaining excellent readability.

Key design principles:
- Clean, uncluttered interface focusing on core functionality
- Consistent spacing and typography
- Smooth transitions that feel natural, not jarring
- Responsive layout that adapts to any screen size
- Accessibility considerations throughout

## Learning Outcomes

This project demonstrates proficiency in:

- Semantic HTML5 structure
- Modern CSS techniques including custom properties, gradients, and animations
- JavaScript fundamentals: variables, operators, conditionals, and functions
- DOM manipulation and event handling
- Input validation and error handling
- Responsive web design principles
- User experience design

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Martin Maina**
- GitHub: [@Martin888Maina](https://github.com/Martin888Maina)

## Acknowledgments

Built as part of a frontend development portfolio to demonstrate modern web development skills and best practices.
