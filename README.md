# Fiona LAN Portfolio

A clean and minimal portfolio website showcasing spatial design projects.

## About

This portfolio website presents the work of **Fiona LAN**, a Spatial Designer focusing on spatial narrative and reuse. The site features a three-column layout that elegantly displays multiple architectural and spatial design projects.

## Features

⚡️ **Three-Column Layout** - Clean, organized presentation of projects\
⚡️ **Modern UI Design** - Minimalist interface with smooth animations\
⚡️ **Flexible Image Layouts** - Support for various image arrangements:
  - Single images
  - Multi-image grids (2, 3, 4 columns)
  - Side-by-side layouts (image + text)
  - Flex equal-height layouts (different sized images with consistent height)
  - Custom width ratio layouts\
⚡️ **Fully Responsive** - Optimized for all screen sizes\
⚡️ **Image Lightbox** - Click images to view in fullscreen\
⚡️ **Smooth Animations** - ScrollReveal and Tilt.js effects\
⚡️ **Optimized Build** - Powered by Parcel bundler

## Projects Featured

- The Municipal Pigeon
- TATAbowls Restaurant
- A GRAIN OF HANGZHOU 2021
- See it
- LACERTA Showroom
- From here to eternity
- 15 Rules for Rebuilding the World
- Hidden Order
- Simulfactory
- Silver Valley Exhibition

## Getting Started

### Prerequisites

- Node.js (v16.4.2 or higher)
- npm (v7.18.1 or higher)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simplefolio-master
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:1234/`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
src/
├── assets/          # Project images and assets
├── sass/            # Stylesheets
│   ├── components/  # Component-specific styles
│   └── ...
├── scripts/         # JavaScript modules
├── index.html       # Main HTML file
└── index.js         # Main JavaScript file with project data
```

## Technologies Used

- **[Parcel](https://parceljs.org/)** - Zero-configuration bundler
- **[Sass](https://sass-lang.com/)** - CSS preprocessor
- **[ScrollReveal.js](https://scrollrevealjs.org/)** - Scroll animations
- **[Tilt.js](https://gijsroge.github.io/tilt.js/)** - Parallax tilt effects
- **Vanilla JavaScript (ES6+)** - Modern JavaScript features

## Customization

### Adding a New Project

1. Add project images to `src/assets/[ProjectName]/`
2. Import images in `src/index.js`:
```javascript
import projectMain from "./assets/[ProjectName]/main.png";
```

3. Add project data to `projectData` object:
```javascript
"project-x": {
  title: "Project Title",
  desc: "Project description",
  image: projectMain,
  scenes: [
    {
      title: "",
      desc: "",
      image: projectImage1,
    },
    // ... more scenes
  ],
}
```

4. Add project link and thumbnail in `src/index.html`

### Image Layout Options

- **Single image**: `{ image: imageSrc }`
- **Grid layout**: `{ images: [img1, img2, img3] }`
- **Side-by-side (image + text)**: `{ image: img, desc: "text", layout: "side-by-side" }`
- **Equal height (flex)**: `{ images: [img1, img2], flexEqualHeight: true }`
- **Custom width ratios**: `{ images: [img1, img2, img3], widthRatios: [6.4, 3.3, 5.3] }`
- **No crop**: `{ images: [img1, img2], noCrop: true }`
- **Centered & scaled**: `{ image: img, center: true, scale: 0.5 }`

## Contact

**Email**: lllllllanxiaoyu@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Built with [Simplefolio](https://github.com/cobiwave/simplefolio) template by [Jacobo Martinez](https://github.com/cobiwave)
