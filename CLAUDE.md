# asharicloud-web

Next.js 15 application with GitHub Copilot-like UI.

## Technology Stack

- **Runtime**: Bun
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS, Radix UI
- **Icons**: Lucide React
- **Styling**: PostCSS with Autoprefixer

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Project Structure

```
asharicloud-web/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (Copilot UI)
│   └── globals.css     # Global styles
├── lib/
│   └── utils.ts        # Utility functions
├── next.config.ts      # Next.js configuration
└── postcss.config.mjs  # PostCSS configuration (includes Tailwind)
```

## Coding Standards

- Use TypeScript strict mode
- Follow Next.js 15 App Router conventions
- Use Server Components by default
- Client Components only when necessary (use "use client" directive)
- Tailwind CSS for styling with utility classes
- Radix UI for accessible components
- clsx + tailwind-merge for conditional classes

## Commands

All commands use Bun instead of npm/yarn:

- `bun install` instead of `npm install`
- `bun run dev` instead of `npm run dev`
- `bun add <package>` instead of `npm install <package>`
- `bun add -d <package>` for dev dependencies
