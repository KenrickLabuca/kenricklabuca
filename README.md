# KenrickLabuca Portfolio - Full Stack Portfolio Application

A modern, animated portfolio website built with React and Laravel, featuring dark mode and a comprehensive admin panel.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Full Stack**: React frontend + Laravel backend
- **Admin Panel**: Complete CRUD operations for managing portfolio content
- **Authentication**: Secure admin login with Laravel Sanctum
- **Animations**: Smooth transitions powered by Framer Motion
- **Responsive**: Works perfectly on all devices

## 📁 Project Structure

```
.
├── backend/          # Laravel API
│   ├── app/
│   ├── database/
│   └── routes/
└── frontend/         # React Application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── contexts/
    │   └── services/
    └── public/
```

## 🛠️ Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies (requires Composer):
```bash
composer install
```

3. Copy environment file:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Configure your database in `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ken_portfolio
DB_USERNAME=root
DB_PASSWORD=your_password
```

6. Run migrations:
```bash
php artisan migrate
```

7. Create admin user (using Laravel Tinker):
```bash
php artisan tinker
```
Then run:
```php
\App\Models\User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => \Hash::make('password'),
]);
```

8. Start Laravel server:
```bash
php artisan serve
```

Backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## 📝 Usage

### Admin Panel

1. Navigate to `/admin/login`
2. Login with your admin credentials
3. Manage projects, skills, and experiences
4. All changes are saved to the database

### Public Pages

- **Home** (`/`): Hero section with featured projects and skills
- **Projects** (`/projects`): All portfolio projects
- **About** (`/about`): Experience and skills breakdown

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Animations**: Modify Framer Motion animations in components
- **Content**: Use the admin panel to add/edit content

## 🔧 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Axios

### Backend
- Laravel 10
- Laravel Sanctum (Authentication)
- MySQL

## 📄 License

MIT License

## 👤 Author

Ken Portfolio

---

Built with ❤️ using React and Laravel
