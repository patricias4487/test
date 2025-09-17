# Easy Daily Recipe - Setup Instructions

## 📋 Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Quick Setup

### 1. After Download/Extract
```bash
# Navigate to project directory
cd easy-daily-recipe

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Open in Browser
Visit: `http://localhost:5173`

## 📁 Project Structure
```
easy-daily-recipe/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── CookieConsent.tsx
│   ├── data/
│   │   └── recipes.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Recipes.tsx
│   │   ├── RecipeDetail.tsx
│   │   ├── Contact.tsx
│   │   ├── Terms.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── README.md
├── LICENSE
└── .gitignore
```

## 🛠️ Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Production Build
```bash
npm run build
```
Built files will be in the `dist/` directory.

## 🔧 Troubleshooting

### If dependencies fail to install:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### If development server doesn't start:
- Check if port 5173 is available
- Try: `npm run dev -- --port 3000`

## 📞 Support
If you encounter issues, check:
1. Node.js version (should be 16+)
2. All files are properly extracted
3. Run `npm install` in the correct directory

## 🎯 Features Included
- ✅ 100+ International Recipes
- ✅ Search & Filter Functionality
- ✅ Responsive Design
- ✅ Cookie Consent Dialog
- ✅ Legal Pages (Terms & Privacy)
- ✅ Contact Form
- ✅ Modern UI with Background Images