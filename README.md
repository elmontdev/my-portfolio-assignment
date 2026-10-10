Min Aung Hla Oo — Personal Developer Portfolio

A modern, responsive, and lightweight single-page portfolio website built for Min Aung Hla Oo (Software Engineer & Full-Stack Developer). Designed with high attention to UI/UX, fast performance, and zero external framework dependencies—powered purely by vanilla HTML, CSS, and JavaScript.

✨ Features

⚡ Lightweight & Fast: Built without heavy front-end libraries or utility frameworks for maximum load speed and smooth performance.

🌙 Dark & Light Theme: Built-in CSS custom variables with automatic persistence using localStorage.

📱 Fully Responsive: Seamless layout adaptivity from high-resolution monitors down to small mobile viewports.

⌨️ Dynamic Typing Effect: Animated header typing sequence showcasing key engineering skill sets (Software Engineer, Full-Stack Web Developer, Next.js & Laravel Specialist, Mobile App Engineer).

🎯 Interactive Filtering: Dynamic, real-time category filters for tech stack skills and highlighted projects.

✉️ Validated Contact Form: Interactive contact submission feedback powered by inline, non-intrusive toast notifications.

♿ Accessible UI: Clean DOM structure, standard semantic markup, and proper ARIA labels.

🛠️ Tech Stack & Dependencies

Structure: HTML5 Semantic Elements

Styling: Custom CSS3 (Variables, Flexbox, Grid, Animations)

Scripting: Vanilla JavaScript (ES6+)

Fonts: Google Fonts (Plus Jakarta Sans & JetBrains Mono)

Icons: Font Awesome Free 6.5.1

📁 File Structure

.
├── index.html     # Single-file bundle containing HTML, CSS, and JS
└── README.md      # Project documentation


🚀 Getting Started

Since the portfolio is self-contained in a single HTML file, setup is instantaneous.

Prerequisites

Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Edge).

Installation & Local Run

Clone or download the repository:

git clone https://github.com/your-username/portfolio.git
cd portfolio


Open the site:

Double-click index.html to view it directly in your browser, or

Serve it using a local development server such as VS Code's Live Server extension:

npx serve .


⚙️ Customization Guide

Update Personal Information:

Search for Min Aung Hla Oo inside index.html and replace it with your own name.

Update contact details (email, phone, location, social links) under the #contact section.

Change Profile Picture / Avatars:

Replace the default placeholder image URLs (https://placehold.co/...) in the hero card and project grid with links to your hosted assets.

Color Palette Customization:

You can modify global accent colors and theme variables inside the <style> tag at the top of index.html:

:root {
    --accent: #6366f1; /* Main Accent Color */
    --accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
}


📄 License

This project is licensed under the MIT License — free to use, modify, and distribute.
