<div align="center">

# 💕 Love Logs
### *A Beautiful Journey of Memories*

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 🌟 Overview

**Love Logs** is a beautifully crafted web application designed to capture, preserve, and celebrate the precious moments of your romantic journey. Built with modern web technologies, it provides an elegant and intuitive interface for couples to document their love story through various creative formats.

### ✨ Key Features

- **📸 Multiple Memory Types**: Notes, playlists, collages, countdowns, gratitude jars, and milestones
- **🔒 Privacy Controls**: Granular privacy settings for each memory
- **🎨 Beautiful UI**: Responsive design with romantic color schemes
- **📱 Mobile-Friendly**: Fully responsive across all devices
- **🎯 Timeline View**: Chronological display of your memories
- **🏷️ Smart Tagging**: Organize memories with custom tags
- **🔍 Quick Search**: Find memories instantly

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/love-logs.git

# Navigate to project directory
cd love-logs/project

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

---

## 🏗️ Architecture

### Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Vite** | Build Tool |
| **Lucide React** | Icons |

### Project Structure

```
love-logs/
├── project/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── AddMemoryModal.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MemoryCard.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── ...
│   │   ├── data/
│   │   │   └── sampleData.ts    # Sample memories
│   │   ├── types/
│   │   │   └── index.ts         # TypeScript interfaces
│   │   ├── App.tsx              # Main application component
│   │   └── main.tsx             # Application entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
```

---

## 🎯 Memory Types

### 1. **📝 Notes**
Simple text-based memories with descriptions and additional notes.

### 2. **🎵 Playlists**
Share your special songs with embedded YouTube links and thumbnails.

### 3. **🖼️ Collages**
Create beautiful photo collections with multiple images.

### 4. **⏰ Countdowns**
Count down to special dates and milestones.

### 5. **🏺 Gratitude Jars**
Collect little things you love about each other.

### 6. **🎯 Milestones**
Celebrate important relationship milestones.

---

## 🔐 Privacy & Security

### Privacy Levels
- **🔴 Private**: Only visible to you
- **🟡 Shared**: Visible to selected people
- **🟢 Public**: Visible to everyone

### Security Features
- Password protection for sensitive memories
- Hide from search engines
- Limited sharing options
- Secure data handling

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--rose-50: #fff1f2;
--rose-100: #ffe4e6;
--purple-50: #faf5ff;
--pink-50: #fdf2f8;

/* Gradients */
bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50
```

### Typography
- **Headings**: System fonts with romantic styling
- **Body**: Clean, readable sans-serif
- **Accents**: Script fonts for romantic touches

---

## 📱 Responsive Design

| Device | Layout |
|--------|--------|
| **Desktop** | Multi-column timeline with sidebar |
| **Tablet** | Single column with collapsible sidebar |
| **Mobile** | Full-width cards with bottom navigation |

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Memory Types

1. **Update TypeScript interfaces** in `src/types/index.ts`
2. **Create component** in `src/components/`
3. **Add styling** using Tailwind CSS
4. **Update sample data** in `src/data/sampleData.ts`

---

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Drag and drop the 'dist' folder
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for the fast build tool

---

## 📞 Support

If you have any questions or need help, please:

1. Check our [FAQ](FAQ.md)
2. Open an [issue](https://github.com/yourusername/love-logs/issues)
3. Join our [Discord community](https://discord.gg/love-logs)

---

<div align="center">

**Made with ❤️ for couples who want to cherish every moment**

[⬆ Back to top](#-love-logs)

</div>
