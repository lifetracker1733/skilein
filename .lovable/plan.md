

# Money Skills Learning Platform - Implementation Plan

## Overview
A premium educational platform for monetizable skills (freelancing, stocks, crypto, bonds) with admin-only course management. Dark mode design inspired by educate.io with clean, professional aesthetics.

---

## Phase 1: Foundation & Design System

### Core Setup
- Configure dark theme with slate-900 backgrounds, purple/blue gradient accents
- Set up responsive grid system (1-col mobile → 3-col desktop)
- Establish consistent spacing, typography, and hover effects

### Design Tokens
- Primary: Purple-to-blue gradients
- Background: Slate-900/800/700 hierarchy
- Text: White primary, slate-400 secondary
- Accents: Purple-400 for links and highlights

---

## Phase 2: Public Pages

### Landing Page
- **Hero Section**: Bold "Master Skills That Pay" headline with gradient CTA button
- **Category Filter Bar**: Horizontal scrolling chips (Freelancing | Stocks | Crypto | Bonds | All)
- **Search Bar**: With placeholder text and search icon
- **Course Grid**: Responsive card layout with featured courses
- **Footer**: Navigation links, social icons, copyright

### Course Cards
- 16:9 thumbnail with rounded corners
- Category badge positioned in top-right
- Bold title (24px) with 2-line description
- Price tag or "Free" label
- Hover effect: Lift animation (-translate-y-2) + enhanced shadow
- Click navigation to course detail

### Course Detail Page
- **Header**: Title, category badge, instructor name, "Start Learning" button
- **Introduction Section**: Overview paragraph, outcomes (✓ bullet list), duration/level badges
- **Video Lessons Section**:
  - Responsive video player (YouTube/Vimeo embed)
  - Lesson title and description
  - **Copy Prompt Button**: Styled code block with clipboard functionality + success toast
  - **App Links**: Badge-style external links with icons (opens new tab)
- **Related Courses**: Grid of 3 similar courses

---

## Phase 3: Database Architecture (Supabase)

### Tables
1. **courses**
   - id, title, category, description, thumbnail_url
   - instructor, price, outcomes (JSONB array)
   - created_at, updated_at

2. **lessons**
   - id, course_id (FK), title, video_url
   - description, ai_prompt, duration, order

3. **app_links**
   - id, lesson_id (FK), app_name, app_url, icon_name

4. **user_roles** (Security)
   - id, user_id (FK to auth.users), role (enum: admin/user)

### Row Level Security
- Public read access for courses/lessons
- Admin-only write access using secure `has_role()` function
- Prevent privilege escalation attacks

---

## Phase 4: Admin System

### Authentication
- Email/password login via Supabase Auth
- Protected route wrapper checking admin role
- Redirect non-admins to landing page

### Admin Dashboard
- **Course Management Table**: List all courses with edit/delete actions
- **Upload Course Form**:
  - Title input
  - Category dropdown (Freelancing, Stocks, Crypto, Bonds)
  - Description textarea
  - Thumbnail URL input
  - Dynamic outcomes list (add/remove items)
  - Video URL input
  - Lesson description
  - AI Prompt text area
  - App links manager (name + URL pairs)

---

## Phase 5: Interactive Features

### Copy Prompt Functionality
- Styled code block container (monospace font, dark background)
- Copy button with clipboard icon
- Success toast notification on copy

### App Link Badges
- Pill-shaped badges with external link icon
- Hover effect with color shift
- Opens in new tab (_blank)

### Search & Filter
- Real-time search filtering by title/description
- Category filter updates grid instantly
- Clear filters option

---

## Sample Content (Pre-loaded)

### Course 1: "Freelance Writing Mastery"
- Category: Freelancing
- Outcomes: Write $500+ articles, Find Upwork clients, Build portfolio
- Lesson: "Finding Your Niche" with AI prompt and Upwork/ChatGPT/Grammarly links

### Course 2: "Stock Market Fundamentals"
- Category: Stock Trading
- Outcomes: Read charts, Analyze companies, Build portfolio
- Lesson: "Understanding Market Cycles" with AI prompt and TradingView/Yahoo Finance links

### Course 3: "Crypto Trading Essentials"
- Category: Crypto
- Outcomes: Wallet setup, Trade safely, Identify trends
- Lesson: "Getting Started with Exchanges" with AI prompt and Coinbase/Binance links

---

## Technical Components

| Component | Purpose |
|-----------|---------|
| `<CourseCard />` | Grid display with image, title, hover effects |
| `<VideoPlayer />` | Responsive iframe with aspect ratio |
| `<CategoryFilter />` | Horizontal filter chips |
| `<CopyButton />` | Clipboard API + toast feedback |
| `<AppLinkBadge />` | External link with icon |
| `<AdminCourseForm />` | Course creation form |
| `<ProtectedRoute />` | Auth wrapper for admin pages |
| `<SearchBar />` | Autocomplete search input |

---

## Responsive Breakpoints
- **Mobile (< 768px)**: Single column, stacked layout
- **Tablet (768px - 1024px)**: 2 columns
- **Desktop (> 1024px)**: 3-4 columns

---

## Deliverables
1. Fully responsive landing page with hero and course grid
2. Dynamic course detail pages with all features
3. Admin dashboard with course CRUD operations
4. Supabase database with sample data
5. Search and category filtering
6. Copy prompt and external link functionality
7. Dark theme matching educate.io aesthetic

