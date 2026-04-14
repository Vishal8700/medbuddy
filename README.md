# MedStudy - Medical Learning Platform

A comprehensive, interactive medical education platform built with Next.js 16, featuring MCQ tests, resource library, and AI-powered chatbot assistant with advanced rendering capabilities.

## 🎯 Key Features

### 📚 Interactive Library
- Browse digital textbooks and study materials
- Search across all resources
- Filter by subject (Physics, Chemistry, Biology)
- Download PDFs and study guides
- Organized with metadata and descriptions

### 🧪 MCQ Test System
- 15 comprehensive questions (5 per subject)
- Real-time feedback and progress tracking
- Interactive question navigator
- Multiple choice with visual selection
- Instant scoring and performance metrics

### ✅ Detailed Solutions & Analysis
- **Complete explanations for every question**
- Score breakdown with percentages
- Visual progress indicators
- Question-by-question review with expandable details
- Correct/incorrect answer comparison
- Learning-focused feedback

### 💬 AI-Powered Chatbot Assistant
- **LaTeX Formula Support**: Render mathematical equations (`$$formula$$` syntax)
- **Code Syntax Highlighting**: Multiple language support with dark theme
- **Text Streaming**: Real-time response generation
- **Context-Aware**: Understands medical, physics, chemistry, and biology questions
- **Rich Formatting**: Bold, italic, code, and formatted text support

### 🎨 Professional UI with Light/Dark Mode
- Medical blue accent color scheme
- Light and dark mode toggle
- System preference detection
- Responsive design (mobile, tablet, desktop)
- Accessible components with semantic HTML

---

## 🚀 Quick Start

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### First Steps
1. **Take a Test** - Click any subject to try 5 sample questions
2. **View Results** - See detailed explanations and solutions
3. **Chat with AI** - Click the chat button to ask questions
4. **Explore Library** - Search for study materials

For detailed instructions, see [QUICKSTART.md](QUICKSTART.md)

---

## 📖 Documentation

### Getting Started
- **[QUICKSTART.md](QUICKSTART.md)** - 30-second setup and usage guide

### Features & Customization  
- **[FEATURES.md](FEATURES.md)** - Complete feature documentation and component details
- **[SETUP.md](SETUP.md)** - Advanced setup, customization guide, and troubleshooting

### Project Overview
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Detailed project structure and statistics

---

## 🏗️ Project Structure

```
MedStudy/
├── app/
│   ├── page.tsx              # Main page with navigation
│   ├── layout.tsx            # Root layout with theme
│   ├── globals.css           # Theme tokens and styles
│   └── api/
│       └── chat/route.ts     # Chatbot API endpoint
│
├── components/
│   ├── layout.tsx            # Sidebar navigation
│   ├── library/
│   │   └── library-page.tsx  # Resource browser
│   ├── mcq/
│   │   ├── mcq-page.tsx      # Test interface
│   │   └── results-page.tsx  # Results display
│   └── chatbot/
│       ├── chatbot.tsx       # Chat container
│       └── chat-message.tsx  # Message rendering
│
├── lib/
│   ├── questions/
│   │   ├── physics.ts        # 5 physics Q&A
│   │   ├── chemistry.ts      # 5 chemistry Q&A
│   │   └── biology.ts        # 5 biology Q&A
│   └── utils/
│       └── formatting.ts     # Utility functions
│
└── types/
    ├── index.ts              # TypeScript interfaces
    ├── katex.d.ts            # KaTeX declarations
    └── react-syntax-highlighter.d.ts
```

---

## 💻 Technology Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development

### UI & Styling
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible primitives
- **Tailwind CSS v4** - Utility-first CSS
- **next-themes** - Theme management

### Advanced Features
- **KaTeX** - LaTeX math rendering
- **react-syntax-highlighter** - Code highlighting
- **Lucide React** - Icon library

---

## 🎓 Features in Detail

### Light/Dark Mode ✨
- Blue accent color scheme (medical-focused)
- OKLCH color space for perceptual uniformity
- System preference detection
- Smooth theme transitions
- Professional styling

### Library Explorer 📚
- 6 sample medical textbooks
- Full-text search across titles and authors
- Filter by 3 subjects
- File size and metadata display
- Download button integration
- Responsive grid layout

### MCQ Testing 🧪
- **Physics**: 5 questions covering mechanics, electricity, optics, thermodynamics
- **Chemistry**: 5 questions on reactions, bonding, stoichiometry, pH
- **Biology**: 5 questions on cells, genetics, physiology, metabolism
- Visual feedback on selection
- Progress tracking during test
- Question navigator with status
- Ability to change answers

### Results Analysis ✅
- Detailed score breakdown
- Percentage calculation
- Visual progress ring
- **Complete explanations including**:
  - Why the correct answer is right
  - Why other options are wrong
  - Relevant formulas and concepts
  - Real-world examples
- Expandable answer details
- Pass/fail determination (60% threshold)

### AI Chatbot 💬
- Floating interface (always accessible)
- **LaTeX Equations**: `$$E=mc^2$$` renders as proper math notation
- **Code Blocks**: Syntax highlighted with language detection
- **Smart Responses** for:
  - Physics questions (Newton's laws, Ohm's law, thermodynamics)
  - Chemistry topics (pH, molar calculations, bonding)
  - Biology concepts (cells, DNA, metabolism)
- Real-time response streaming
- Message history preservation

---

## 🎨 Color Scheme

### Light Mode
- **Primary Blue**: `oklch(0.45 0.15 250)` - Medical blue
- **Accent**: `oklch(0.55 0.15 250)` - Bright blue
- **Background**: `oklch(0.98 0 0)` - Off-white
- **Foreground**: `oklch(0.15 0 0)` - Dark gray

### Dark Mode  
- **Primary Blue**: `oklch(0.65 0.15 250)` - Brighter blue
- **Accent**: `oklch(0.72 0.15 250)` - Light blue
- **Background**: `oklch(0.12 0 0)` - Deep navy
- **Foreground**: `oklch(0.95 0 0)` - Off-white

---

## 🔧 Customization Examples

### Add New Questions
```typescript
// lib/questions/anatomy.ts
export const anatomyQuestions: Question[] = [
  {
    id: 'anat_001',
    question: 'Which bone is the largest in the human body?',
    options: ['Femur', 'Tibia', 'Fibula', 'Humerus'],
    correctAnswer: 0,
    explanation: 'The femur (thighbone) is the longest and strongest bone...',
    topic: 'Skeletal System',
  },
]
```

### Add Books to Library
```typescript
{
  id: 'book_007',
  title: 'Advanced Anatomy',
  author: 'Dr. Smith',
  subject: 'Anatomy',
  size: '52 MB',
  type: 'pdf',
  description: 'Comprehensive guide to human anatomy',
}
```

### Enhance Chatbot Responses
```typescript
if (lowerMessage.includes('bone') || lowerMessage.includes('skeleton')) {
  return `The human skeleton contains 206 bones...`
}
```

### Change Theme Colors
```css
:root {
  --primary: oklch(0.50 0.18 200);  /* Different blue shade */
  --accent: oklch(0.60 0.16 190);   /* Adjusted accent */
}
```

---

## 📱 Responsive Design

- **Mobile** (< 768px): Hamburger menu, single column, touch-optimized
- **Tablet** (768px - 1024px): Sidebar visible, 2-column layout
- **Desktop** (> 1024px): Full sidebar, 3-column grid layouts

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader friendly content
- Focus indicators on interactive elements

---

## 📊 Project Statistics

| Metric | Count |
|--------|-------|
| Custom Components | 8 |
| UI Components | 50+ |
| Question Sets | 3 |
| Total Questions | 15 |
| Sample Books | 6 |
| Color Variants | 2 (light/dark) |
| Responsive Breakpoints | 3 |
| Lines of Code | 2000+ |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
vercel deploy
```
- Automatic deployments
- Environment management
- Built-in analytics
- CDN distribution

### Self-Host
```bash
pnpm build
pnpm start
```

---

## 🔍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📦 Dependencies

### Main Libraries
```json
{
  "next": "16.2.0",
  "react": "^19",
  "tailwindcss": "^4.2.0",
  "katex": "^0.16.4",
  "react-syntax-highlighter": "^15.5.0",
  "next-themes": "^0.4.6"
}
```

See `package.json` for complete list.

---

## 🎯 Planned Enhancements

- [ ] User authentication with Supabase
- [ ] Progress tracking and analytics
- [ ] Spaced repetition algorithm
- [ ] Video tutorial integration
- [ ] Voice-based learning
- [ ] Community discussion forums
- [ ] Real-time multiplayer quizzes
- [ ] AI-generated practice questions
- [ ] Mobile app version

---

## 🐛 Troubleshooting

### Issues?
1. Check [SETUP.md](SETUP.md) troubleshooting section
2. Clear cache: `rm -rf .next && pnpm dev`
3. Verify all imports use `@/` aliases
4. Check browser console for errors

### Need Help?
- **Quick questions?** → [QUICKSTART.md](QUICKSTART.md)
- **Setup problems?** → [SETUP.md](SETUP.md)
- **Feature details?** → [FEATURES.md](FEATURES.md)

---

## 📄 License

This project is open source and available for educational use.

---

## 🙌 Contributing

To customize or extend the platform:

1. **Add Questions** - Create files in `lib/questions/`
2. **Add Resources** - Update `components/library/library-page.tsx`
3. **Enhance Chatbot** - Extend `app/api/chat/route.ts`
4. **Customize Theme** - Edit `app/globals.css`

See [SETUP.md](SETUP.md) for detailed customization guides.

---

## 📞 Support

For detailed documentation:
- **Quick Start**: [QUICKSTART.md](QUICKSTART.md)
- **Features**: [FEATURES.md](FEATURES.md)
- **Setup Guide**: [SETUP.md](SETUP.md)
- **Project Summary**: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 🎓 Welcome to MedStudy!

Your comprehensive medical education platform is ready. Start learning, testing, and exploring with advanced AI assistance!

**Let's get started:** `pnpm dev` → Open http://localhost:3000

---

**Built with ❤️ for medical students everywhere.**
