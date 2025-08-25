# Entrix AI Website

The official website for Entrix AI and Budha - an emotionally intelligent, local-first AI co-pilot for creative flow.

## Features

- **V2 Homepage**: Modern, responsive design with emotional intelligence focus
- **V1 Preserved**: Original homepage saved as `app/page.v1.tsx`
- **Local-First**: Privacy-focused architecture
- **Waitlist Integration**: Formspree integration for email collection
- **Responsive Design**: Mobile-first with sticky CTA
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Accessibility**: WCAG compliant with proper ARIA labels

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** + **Zod** for form validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd entrixai-site
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:
```bash
# Create .env.local file
echo "NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/your-form-id" > .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/
│   ├── page.tsx          # V2 Homepage
│   ├── page.v1.tsx       # V1 Homepage (preserved)
│   ├── layout.tsx        # Root layout with metadata
│   ├── about/page.tsx    # About page
│   ├── privacy/page.tsx  # Privacy policy
│   ├── terms/page.tsx    # Terms of service
│   └── api/health/       # Health check endpoint
├── components/
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── waitlist-form.tsx # Waitlist form with validation
│   ├── feature-card.tsx  # Feature card component
│   └── section.tsx       # Section wrapper component
├── lib/
│   ├── env.ts           # Environment variable utilities
│   └── validators.ts    # Zod validation schemas
├── tests/               # Test files
└── public/             # Static assets
```

## Environment Variables

- `NEXT_PUBLIC_WAITLIST_ENDPOINT` - Formspree endpoint for waitlist form

## Deployment

The site is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## API Endpoints

- `GET /api/health` - Returns `{"ok": true}` for health checks

## Code Quality

- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Code formatting with semicolons enforced
- **TypeScript**: Strict mode enabled
- **Testing**: React Testing Library setup (tests in `/tests`)

## Performance

- **Lighthouse Scores** (Target):
  - Performance: ≥ 90
  - Accessibility: ≥ 95
  - SEO: ≥ 95

## Contributing

1. Preserve V1 homepage in `app/page.v1.tsx`
2. Follow existing code style (semicolons required)
3. Run `npm run lint:fix && npm run format` before committing
4. Ensure `npm run build` passes without errors

## License

© 2025 Entrix AI. All rights reserved.
