// === Import Dependencies ===
const express = require('express');
const path = require('path');

const app = express();

// Use the Cloud Run dynamic port (8080 default)
const PORT = process.env.PORT || 8080;

// === Middleware ===
app.use(express.json());

// === API ROUTES ===
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      shortDescription: 'Full-stack e-commerce solution',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web App',
      featured: true,
      images: [],
      thumbnail: '/images/ecommerce-thumb.jpg',
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/example/ecommerce',
      dateCreated: '2024-01-15',
      dateUpdated: '2024-02-20',
      order: 1,
    },
    {
      id: '2',
      title: 'Task Management API',
      description:
        'RESTful API for task management with user authentication, real-time updates, and team collaboration features.',
      shortDescription: 'RESTful task management API',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
      category: 'API',
      featured: true,
      images: [],
      thumbnail: '/images/task-api-thumb.jpg',
      liveUrl: 'https://api.example.com',
      githubUrl: 'https://github.com/example/task-api',
      dateCreated: '2024-03-10',
      dateUpdated: '2024-03-25',
      order: 2,
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills with modern UI/UX design.',
      shortDescription: 'Modern portfolio website',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      category: 'Web App',
      featured: false,
      images: [],
      thumbnail: '/images/portfolio-thumb.jpg',
      liveUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/example/portfolio',
      dateCreated: '2024-04-01',
      dateUpdated: '2024-04-15',
      order: 3,
    },
  ];

  res.json(projects);
});

// === Static Files (Production Builds) ===
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));

  // Handle React Router fallback
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    }
  });
}

// === Basic Route ===
app.get('/', (req, res) => {
  res.send('✅ Hello from backend — running successfully!');
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}/`);
  console.log(`📡 API: http://localhost:${PORT}/api/projects`);
});
