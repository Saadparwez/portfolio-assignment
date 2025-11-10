# Personal Portfolio Web App - Project Plan

## Goals

1. **Professional Showcase**: Create a modern, professional portfolio website to showcase projects, skills, and experience
2. **Responsive Design**: Ensure optimal viewing experience across all devices (desktop, tablet, mobile)
3. **Performance**: Deliver fast load times and smooth user interactions
4. **Maintainability**: Build a scalable, well-structured codebase that's easy to update
5. **Automated Deployment**: Implement CI/CD pipeline for seamless updates via GitHub Actions

## Pages/Sections

### Home
- Hero section with name, title, and brief introduction
- Call-to-action buttons (View Projects, Contact Me)
- Quick overview of key skills/technologies
- Professional headshot or avatar

### Projects
- Grid/list view of portfolio projects
- Filter by technology/category
- Project cards with:
  - Project image/thumbnail
  - Title and description
  - Technologies used
  - Links to live demo and GitHub repository
- Individual project detail pages with:
  - Full description
  - Feature highlights
  - Screenshots/gallery
  - Technology stack breakdown

### Skills
- Categorized skill display (Frontend, Backend, Tools, etc.)
- Skill level indicators or proficiency badges
- Icons/logos for technologies
- Brief description of experience with each technology

### Contact
- Contact form (name, email, message)
- Social media links
- Email address
- Location (optional)
- Links to professional profiles (LinkedIn, GitHub)

## Data Model for Projects

### Project Schema
```javascript
{
  id: String (UUID or slug),
  title: String (required),
  description: String (required),
  shortDescription: String (required, for cards),
  technologies: Array[String] (required),
  category: String (e.g., "Web App", "Mobile", "API"),
  featured: Boolean (default: false),
  images: Array[String] (URLs),
  thumbnail: String (URL, required),
  liveUrl: String (optional),
  githubUrl: String (optional),
  featured: Boolean,
  dateCreated: Date,
  dateUpdated: Date,
  order: Number (for manual sorting)
}
```

### Backend API Endpoints
- `GET /api/projects` - Get all projects (with optional filtering)
- `GET /api/projects/:id` - Get single project by ID
- `GET /api/projects/featured` - Get featured projects
- `POST /api/contact` - Submit contact form

## Responsive Design Approach

### Framework: Tailwind CSS

### Breakpoints Strategy
- **Mobile First**: Design for mobile, then enhance for larger screens
- **Tailwind Breakpoints**:
  - `sm`: 640px (small tablets)
  - `md`: 768px (tablets)
  - `lg`: 1024px (laptops)
  - `xl`: 1280px (desktops)
  - `2xl`: 1536px (large desktops)

### Responsive Components
- **Navigation**: Hamburger menu on mobile, horizontal nav on desktop
- **Project Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Hero Section**: Stacked layout (mobile) → side-by-side (desktop)
- **Typography**: Responsive font sizes using Tailwind's text utilities
- **Images**: Responsive images with appropriate sizing and lazy loading

### Design Principles
- Consistent spacing using Tailwind's spacing scale
- Fluid typography that scales appropriately
- Touch-friendly button sizes (min 44x44px on mobile)
- Accessible color contrast ratios
- Smooth transitions and animations

## Test Plan

### Frontend Testing
1. **Unit Tests** (Vitest/Jest)
   - Component rendering tests
   - Utility function tests
   - Hook tests (if using custom hooks)

2. **Integration Tests**
   - API integration tests
   - Form submission flows
   - Navigation tests

3. **E2E Tests** (Playwright/Cypress)
   - User journey tests
   - Cross-browser testing
   - Responsive design verification

### Backend Testing
1. **Unit Tests** (Jest)
   - Route handler tests
   - Middleware tests
   - Utility function tests

2. **Integration Tests**
   - API endpoint tests
   - Database interaction tests
   - Error handling tests

### Test Coverage Goals
- Minimum 80% code coverage
- Critical paths: 100% coverage
- All API endpoints tested

### Manual Testing Checklist
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Form validation and error messages
- [ ] Loading states and error handling
- [ ] Accessibility (keyboard navigation, screen readers)

## Deployment Plan

### Infrastructure: Google Cloud Run

### GitHub Actions CI/CD Pipeline

#### Workflow Stages

1. **On Push to Main Branch**:
   - Run linter (ESLint)
   - Run frontend tests
   - Run backend tests
   - Build frontend (Vite production build)
   - Build backend Docker image
   - Push Docker image to Google Container Registry (GCR)
   - Deploy to Cloud Run (production)

2. **On Pull Request**:
   - Run linter
   - Run all tests
   - Build check (no deployment)

#### Deployment Configuration

**Frontend**:
- Build command: `npm run build`
- Output directory: `dist/`
- Serve via Cloud Run with static file serving
- Environment variables: API endpoint URL

**Backend**:
- Docker container with Node.js
- Environment variables:
  - Port (Cloud Run sets PORT)
  - Database connection string
  - CORS origins
  - Email service credentials (for contact form)

**Cloud Run Settings**:
- Minimum instances: 0 (scale to zero)
- Maximum instances: 10
- CPU: 1 vCPU
- Memory: 512 MiB (frontend), 1 GiB (backend)
- Timeout: 300 seconds
- Request timeout: 60 seconds

#### Environment Management
- **Production**: Main branch → Production Cloud Run service
- **Staging** (optional): Develop branch → Staging Cloud Run service

#### Secrets Management
- Store sensitive data (API keys, DB credentials) in GitHub Secrets
- Use Google Secret Manager for Cloud Run environment variables
- Never commit secrets to repository

#### Monitoring & Logging
- Cloud Run built-in logging
- Error tracking (optional: Sentry)
- Performance monitoring
- Uptime monitoring

### Deployment Checklist
- [ ] Set up Google Cloud Project
- [ ] Enable Cloud Run API
- [ ] Create service account with appropriate permissions
- [ ] Configure GitHub Secrets with GCP credentials
- [ ] Set up GitHub Actions workflow
- [ ] Configure custom domain (optional)
- [ ] Set up SSL certificate
- [ ] Configure environment variables
- [ ] Test deployment pipeline
- [ ] Set up monitoring and alerts

## Technology Stack

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context API or Zustand (if needed)
- **HTTP Client**: Axios or Fetch API
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion (optional)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL or MongoDB (or JSON file for simplicity)
- **Validation**: Joi or Zod
- **CORS**: Express CORS middleware
- **Environment Variables**: dotenv

### DevOps
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Cloud Platform**: Google Cloud Run
- **Container Registry**: Google Container Registry (GCR)

## Project Structure

```
portfolio-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## Timeline Estimate

- **Week 1**: Project setup, frontend structure, basic pages
- **Week 2**: Backend API, data model implementation
- **Week 3**: Styling with Tailwind, responsive design
- **Week 4**: Testing, bug fixes, optimization
- **Week 5**: Deployment setup, CI/CD pipeline
- **Week 6**: Final polish, documentation, launch

## Success Metrics

- Page load time < 3 seconds
- Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- Zero critical bugs in production
- Mobile-friendly (responsive on all devices)
- Successful automated deployments

