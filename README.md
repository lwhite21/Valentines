# Valentine's Day React App 💕

A fun and interactive React app to ask your girlfriend to be your Valentine with animated text, a runaway "No" button, and a success screen with pictures.

## Features

✨ **Animated Text** - The text "Will you be my Valentine?" appears word by word with pop-out animations
🏃 **Runaway No Button** - The "No" button runs away from your cursor when you get close
❤️ **Interactive Yes Button** - Click "Yes" to proceed to the success screen
📸 **Success Screen** - Display 3 pictures of you together after saying yes

## Getting Started

### Prerequisites
- Node.js (v20.19+)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173/`

## Customization

### Adding Your Pictures

To replace the placeholder images with your actual pictures:

1. Open `src/components/SuccessScreen.jsx`
2. Replace the `src` values in the `pictures` array with the paths to your images

Example:
```jsx
const [pictures] = useState([
  {
    id: 1,
    src: '/path/to/your/picture1.jpg',
    alt: 'Picture 1',
  },
  {
    id: 2,
    src: '/path/to/your/picture2.jpg',
    alt: 'Picture 2',
  },
  {
    id: 3,
    src: '/path/to/your/picture3.jpg',
    alt: 'Picture 3',
  },
])
```

You can either:
- Place images in the `public` folder and use relative paths like `/picture1.jpg`
- Use absolute URLs from cloud storage or image hosting services

### Customizing Text and Colors

**Change the question text:**
- Edit `src/components/ValentineQuestion.jsx`, line 11

**Change the success message:**
- Edit `src/components/SuccessScreen.jsx`, line 19

**Change colors:**
- Valentine Question background: Edit `src/components/ValentineQuestion.css`, `.valentine-container` gradient
- Success Screen background: Edit `src/components/SuccessScreen.css`, `.success-container` gradient

## Building for Production

```bash
npm run build
```

This will create an optimized build in the `dist` folder that you can deploy.

## How to Use

1. Show the app to your girlfriend on your computer/phone
2. The animated text will appear asking if she'll be your Valentine
3. If she clicks "Yes" ❤️, she'll see a beautiful screen with your pictures together
4. The "No" button will run away (it's just for fun!)

---

Made with ❤️ for your special someone

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
