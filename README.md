# asharicloud-web

A Next.js 15 application with a GitHub Copilot-like user interface, built using the latest web technologies and Bun runtime.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server (runs on port 3432)
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## 🛠 Tech Stack

- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime
- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3
- **Components**: [Radix UI](https://radix-ui.com) for accessible components
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org) with strict mode

## 📁 Project Structure

```
asharicloud-web/
├── app/                  # Next.js App Router directory
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with Copilot UI
│   └── globals.css      # Global styles and Tailwind directives
├── lib/                 # Utility functions
│   └── utils.ts         # cn() helper for class names
├── .env                 # Environment variables (PORT=3432)
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration with Tailwind
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## ✨ Features

- **Modern UI**: Clean, GitHub Copilot-inspired interface
- **Responsive Design**: Fully responsive layout
- **Dark Mode Ready**: CSS variables configured for theme switching
- **Type Safety**: Full TypeScript support with strict mode
- **Fast Development**: Bun runtime for quick startup and hot reload
- **Accessible Components**: Built with Radix UI primitives

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3432  # Custom port for development/production
```

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Create optimized production build
- `bun run start` - Start production server
- `bun run lint` - Run ESLint (if configured)

## 🎨 UI Components

The application includes:

- **Sidebar Navigation**: Home and Spaces sections
- **Chat Interface**: Input area with file attachment and AI model selection
- **Action Buttons**: Quick access to issues, files, pull requests, and Git
- **Tooltips**: Helpful hints using Radix UI tooltips
- **Icons**: Consistent iconography with Lucide React

## 📝 Development Guidelines

1. **Component Structure**: Use Server Components by default, Client Components only when needed
2. **Styling**: Utilize Tailwind CSS utility classes with the `cn()` helper
3. **TypeScript**: Maintain strict type safety
4. **File Organization**: Follow Next.js App Router conventions

## 🚀 Performance

- Built with Next.js 15 and React 19 for optimal performance
- Server Components reduce client-side JavaScript
- Bun runtime provides fast development experience
- Tailwind CSS for minimal CSS bundle size

## 📄 License

Private project - see package.json for details
