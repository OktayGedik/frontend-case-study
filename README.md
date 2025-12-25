# HubX Frontend Assignment

A frontend developer case study focused on implementing a landing page design for a mobile document scanning application using React and TypeScript with a responsive and animated approach.

## 📋 Project Overview

This project is a frontend application developed based on the Figma design provided by HubX. The project includes a feature tab interface designed to showcase core functionalities such as document scanning, signing & stamping, batch scanning, advanced filters, and export features.

### Key Features

- ✅ **Responsive Design**: Mobile-first approach with perfect appearance across all devices
- ✅ **Smooth Animations**: Page transitions and interaction animations using Framer Motion
- ✅ **Tabbed Interface**: 5 different feature tabs (Document Scanner, Sign & Stamp, Batch Scanning, Advanced Filters, Export & Share)
- ✅ **Dynamic Content**: Custom animations and screen simulations for each tab
- ✅ **TypeScript Support**: Full type safety and improved developer experience
- ✅ **Code Quality**: Consistent code standards with ESLint, Prettier, and Stylelint

## 🚀 Technology Stack

### Core Technologies

- **React 18.2.0** - User interface library
- **TypeScript 5.1.6** - Static type checking
- **Vite 4.4.7** - Fast build tool and development server
- **Framer Motion 12.23.26** - Animation library

### Styling & Utilities

- **CSS Modules** - Scoped CSS styling
- **clsx 2.1.1** - Helper for CSS class combinations

### Development Tools

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatter
- **Stylelint** - CSS linting
- **Vite Plugin SVGR** - Using SVG files as React components

## 📁 Project Structure

```
src/
├── components/                    # React components
│   ├── PhoneFrameSection.tsx     # Phone frame and animations
│   ├── featureTabs/              # Feature tab interface
│   │   └── Tabs.tsx
│   ├── heroContent/              # Main heading and description
│   │   └── HeroContent.tsx
│   └── phoneFrame/               # Phone frame component
│       ├── PhoneFrame.tsx
│       └── components/
│           ├── phoneScreenImageOverlay/
│           └── screenAnimations/  # Tab-specific animations
│               ├── AdvancedFilterAnimation.tsx
│               ├── BatchScanningAnimation.tsx
│               ├── ExportAnimation.tsx
│               └── SignStampAnimation.tsx
│
├── shared/                        # Shared resources
│   ├── assets/                   # Images and icon files
│   │   ├── icons/
│   │   └── images/
│   ├── constants/                # Constants and configurations
│   │   ├── featureTabs.ts       # Tab data
│   │   ├── animationConstants.ts # Animation durations
│   │   └── batchScanningFiles.ts
│   └── types/                    # TypeScript types
│       ├── tab.interface.ts
│       ├── tabId.enum.ts
│       └── tabHeroContent.interface.ts
│
├── App.tsx                        # Main application component
├── App.module.css                 # Application styles
└── main.tsx                       # Entry point
```

## 🛠️ Development Environment Setup

### Requirements

- Node.js 16 or newer
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Access the application at `http://localhost:5173` (Vite default port).

## 📝 Available Commands

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement (HMR).

### Build

```bash
npm run build
```

Performs TypeScript checking and creates an optimized production-ready build.

### Preview

```bash
npm run preview
```

Previews the generated build locally.

### Linting

```bash
npm run lint
```

Runs all linting tools (ESLint, TypeScript, Stylelint).

```bash
npm run lint:eslint      # ESLint only
npm run lint:typescript  # TypeScript only
npm run lint:stylelint   # Stylelint only
```

### Code Formatting

```bash
npm run format
```

Formats all code using Prettier and Stylelint.

```bash
npm run format:prettier  # Prettier only
npm run format:stylelint # Stylelint only
```

## 🎨 Design References

- **Figma Design**: [Frontend Case (HubX)](<https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1>)
- **Implementation Videos**: [Google Drive](https://drive.google.com/drive/folders/1kkicvHG7UMc-MY9npv_fy4gW1cZF3QiO?usp=drive_link)

## 💡 Implementation Overview

### Tabbed Interface

- 5 different feature tabs are available
- When users click on each tab, they can view the corresponding feature description and animated phone screen simulation
- The tabs include the following features:
  - **Document Scanner**: Document scanning capabilities
  - **Sign & Stamp**: Signature and stamp functionality
  - **Batch Scanning**: Batch scanning capabilities
  - **Advanced Filters**: Advanced image filtering
  - **Export & Share**: File export options

### Animations

- **Page Transitions**: Phone frame slides smoothly from bottom to top
- **Tab Animations**: Custom screen animations are designed for each tab
  - Progress bars, file lists, signature simulations, etc.

### Responsive Design

- All screen sizes achieve optimal appearance using CSS Media Queries
- Designed with a mobile-first approach, adapted for tablets and desktop devices

## 📋 Code Quality Standards

The following code quality standards are applied to the project:

- **TypeScript Strict Mode**: Full type safety
- **ESLint Rules**: React and React Hooks best practices
- **No Warnings Policy**: Zero-warning builds
- **Code Formatting**: Automatic code formatting with Prettier
- **CSS Organization**: Consistent CSS structure with Stylelint

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration and path aliases
- `tsconfig.json` - TypeScript configuration
- `tsconfig.vite.json` - TypeScript configuration for Vite
- `.eslintrc` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `.stylelintrc` - Stylelint rules

## 📦 Dependency Management

All dependencies are specified in the `package.json` file. The project is designed with minimal dependencies, using only the necessary libraries.

## ✨ Key Development Features

1. **Path Aliases**: Using `@/` and `@/shared/` instead of long import paths
2. **Modular CSS**: Component-level styling with CSS Modules
3. **Type Safety**: Type safety with Interfaces and Enums
4. **Reusable Components**: Reusable component architecture
5. **Constants Management**: Centralized management of constant values

## 📝 Notes

- The project has been implemented in full accordance with the Figma design
- All animations run smoothly and performantly
- All code is properly linted and formatted
- Responsive design has been tested across all popular device sizes

---

**Last Updated**: December 2025
