# ✈️ Travel Agency Website

A modern travel agency website built with **Angular and TypeScript**, designed to showcase beautiful travel destinations and tourist attractions.

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-24-339933?logo=nodedotjs&logoColor=white" />
</p>

---

## 🌍 Overview

The Travel Agency Website is a web application developed to present attractive travel destinations through an interactive and visually engaging interface.

Visitors can explore different countries, discover tourist attractions, view destination images and navigate between destinations.

The current application showcases destinations such as **Indonesia and Thailand**.

## ✨ Features

- **Destination Showcase:** Explore different countries and tourist destinations.
- **Interactive Navigation:** Move between destinations using previous and next controls.
- **Destination Cards:** Display tourist attractions with images and ratings.
- **Dynamic Content:** Update destination information when navigating.
- **Modern Interface:** A visual layout designed for travel inspiration.
- **Reusable Components:** Modular Angular components for better code organization.

## 🖥️ Application Preview

Add your application screenshots here.

```text
docs/
  screenshots/
    home.png
    destinations.png
```

Once you add the screenshots, you can display them using:

```markdown
![Home Page](docs/screenshots/home.png)
```

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Angular 21 | Frontend framework |
| TypeScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| Node.js | Development environment |
| npm | Dependency management |

## 🏗️ Project Architecture

The project follows a component-based Angular architecture.

```text
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   └── destination-card/
│   │
│   ├── data/
│   │   └── destinations.ts
│   │
│   ├── models/
│   │   └── destination.model.ts
│   │
│   └── pages/
│       └── home/
│
├── assets/
│   └── images/
│
├── index.html
└── styles.css
```

### Main Components

- **NavbarComponent:** Displays the navigation bar.
- **HeroComponent:** Presents the selected destination and handles destination navigation.
- **DestinationCardComponent:** Displays destination images and titles.
- **HomeComponent:** Combines the main components to build the homepage.

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js (compatible with Angular 21)
- npm
- Visual Studio Code

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/travel-agency-website.git
```

### 2. Navigate to the project folder

```bash
cd travel-agency-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

### 5. Open the application

Navigate to:

```text
http://localhost:4200/
```

The application automatically reloads when source files are modified.

## 🏗️ Build

To generate a production build:

```bash
npm run build
```

## 🧪 Testing

To run the project's tests:

```bash
npm test
```

## 🚀 Future Improvements

Potential features planned for future versions:

- Destination search and filtering.
- Detailed destination pages.
- Hotel and flight information.
- User authentication.
- Online booking functionality.
- Responsive design improvements.
- Integration with travel APIs.

## 👩‍💻 Author

**Sara Aitoufel**

GitHub: [@Saraaitoufel](https://github.com/Saraaitoufel)

---

⭐ If you find this project interesting, feel free to explore the repository and follow its development.

**Built with Angular and TypeScript.**
