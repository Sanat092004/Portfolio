# Sanat Kumar Dhawan — Minimalist Design Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSanat092004%2FPortfolio)

A high-fidelity, minimalist design portfolio built to showcase a range of AI-driven products, mobile applications, and embedded systems engineering. 

Inspired by the refined, high-end aesthetic of [mattfredette.com](https://www.mattfredette.com/), this project focuses on high-impact typography, generous whitespace, and interactive motion.

## ✨ Key Features

- **1:1 Matt Fredette Replica**: A precise visual overhaul focusing on typographic hierarchy and editorial-style layouts.
- **Level 2 Interactivity**: 
  - **Typing Animation**: Dynamic hero greeting that simulates live terminal-style typing.
  - **Pulsating Navigation**: An animated double-chevron scroll indicator to guide users to the project showcase.
  - **Floating Pill Navbar**: Glassmorphism-style navigation that hovers at the top for easy access.
- **Device-First Showcase**: Projects are presented in "baked" device mockups (iPhone & Browser frames) with signature background colors to highlight product character.
- **Scrapbook About Section**: A 2-column "bit about me" section featuring a tilted photo and a journal-style narrative flow.

## 🎨 Tech Stack

- **Core**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with **CSS Modules** for scoped, maintainable styles.
- **Typography**: Manrope (Headings) & Inter (Body) via Google Fonts.
- **Interactions**: Custom React Hooks for typing logic and CSS keyframes for smooth micro-animations.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sanat092004/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠 Project Structure

```
portfolio/
├── src/
│   ├── components/      # Modular, reusable UI components
│   ├── data/            # Centralized project & bio content (content.js)
│   ├── hooks/           # Custom React hooks (logic & animations)
│   ├── App.jsx          # Main page assembly
│   └── index.css        # Global design system & theme tokens
├── public/              # Optimized portrait images & project screenshots
└── README.md            # You are here
```

---

*Designed and Built by **Sanat Kumar Dhawan**. Inspired by the design philosophy of Matt Fredette.*
