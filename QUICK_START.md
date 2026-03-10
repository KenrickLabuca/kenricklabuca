# Quick Start Guide

## Prerequisites

- PHP 8.1+ with Composer
- Node.js 18+ with npm
- MySQL or any SQL database

## Step-by-Step Setup

### 1. Backend Setup

```bash
cd backend

# Install dependencies (if Composer is installed)
composer install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Edit .env file and configure your database:
# DB_DATABASE=ken_portfolio
# DB_USERNAME=root
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Create admin user (run in tinker)
php artisan tinker
# Then paste:
# \App\Models\User::create(['name' => 'Admin', 'email' => 'admin@example.com', 'password' => \Hash::make('password')]);

# Start server
php artisan serve
```

Backend runs on: `http://localhost:8000`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on: `http://localhost:3000`

### 3. Access the Application

- **Public Site**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
  - Email: `admin@example.com`
  - Password: `password` (change this after first login!)

## Features to Try

1. **Dark Mode**: Toggle the moon/sun icon in the navbar
2. **Admin Panel**: Login and add projects, skills, and experiences
3. **Animations**: Navigate between pages to see smooth transitions
4. **Responsive**: Resize your browser to see mobile-friendly design

## Troubleshooting

### CORS Issues
Make sure `FRONTEND_URL=http://localhost:3000` is set in `backend/.env`

### Database Connection
Verify your database credentials in `backend/.env`

### Port Conflicts
- Backend: Change port in `php artisan serve --port=8001`
- Frontend: Change port in `vite.config.js`

## Next Steps

1. Customize colors in `frontend/tailwind.config.js`
2. Add your own projects, skills, and experiences via admin panel
3. Update social links in `frontend/src/pages/Home.jsx`
4. Deploy to your preferred hosting platform

Enjoy your new portfolio! 🚀
