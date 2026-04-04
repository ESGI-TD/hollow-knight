# Hollow Knight Wiki 🐛

A small web wiki displaying the main character and bosses from Hollow Knight, with their stats (HP, damage, and image).

## Preview

![Hollow Knight](./src/image/The_Knight_Front.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- npm

### Installation

```bash
git clone https://github.com/ESGI-TD/hollow-knight.git
cd hollow-knight
npm install
```

## Tech Stack

- **TypeScript** — typed JavaScript
- **HTML / CSS** — structure and styling
- **ESLint** — linting

## Project Structure

```
hollow-knight/
├── src/
│   └── index.ts        # Main entry point
├── dist/               # Compiled JS (generated)
├── index.html          # Main HTML page
├── styles.css          # Styles
├── tsconfig.json
└── package.json
```

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `tsc`          | Compile TypeScript |
| `npm run lint` | Run ESLint         |

## Features

- Display the main character **The Knight** with his stats
- Display bosses with their HP, damage and image
- Clean and simple wiki layout
