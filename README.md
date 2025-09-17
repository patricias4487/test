# Easy Daily Recipe Website

A modern, responsive recipe website featuring 100+ international recipes from around the world. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🍳 100+ International Recipes
- 🔍 Search and Filter Functionality
- 📱 Fully Responsive Design
- 🍪 Cookie Consent Dialog
- 📄 Legal Pages (Terms & Privacy)
- 🎨 Modern UI with Background Images
- 🌍 Recipes from Multiple Cuisines

## Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Download and extract the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

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
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **React Router** - Navigation
- **Lucide React** - Icons

## Recipe Categories

- Asian Cuisine (Japanese, Korean, Thai, Chinese, Indian)
- European Cuisine (Italian, French, German, Spanish)
- American Cuisine (BBQ, Comfort Food, Regional Specialties)
- African Cuisine (Ethiopian, Moroccan, Nigerian)
- Middle Eastern Cuisine (Lebanese, Turkish, Persian)
- Latin American Cuisine (Mexican, Brazilian, Argentine)

## Deployment

### GitHub Pages (Recommended)
1. Upload all files to a GitHub repository
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions"
4. Your site will be live at: `https://yourusername.github.io/easy-daily-recipe`

### Netlify
1. Upload to GitHub repository
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Set the publish directory to `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please visit the contact page on the website.

---

**Note:** This website uses cookies for analytics and advertising. Please review our Privacy Policy and Terms & Conditions for more information.