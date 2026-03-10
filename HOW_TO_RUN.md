# How to Run the Portfolio Application

## Prerequisites Check

✅ **Node.js**: Installed (v22.15.1)  
❌ **PHP**: Not detected - You'll need to install PHP 8.1+ and Composer

## Installation Steps

### Step 1: Install PHP and Composer (if not installed)

**Option A: Using XAMPP (Easiest for Windows)**
1. Download XAMPP from https://www.apachefriends.org/
2. Install XAMPP (includes PHP and MySQL)
3. Add PHP to PATH: `C:\xampp\php`
4. Download Composer from https://getcomposer.org/download/
5. Install Composer globally

**Option B: Using Laragon (Recommended for Laravel)**
1. Download Laragon from https://laragon.org/
2. Install Laragon (includes PHP, MySQL, Composer)
3. Everything is pre-configured!

**Option C: Manual Installation**
1. Download PHP 8.1+ from https://windows.php.net/download/
2. Download Composer from https://getcomposer.org/download/
3. Add PHP to your system PATH

### Step 2: Set Up Database

1. Start MySQL (via XAMPP, Laragon, or your MySQL server)
2. Create a database:
   ```sql
   CREATE DATABASE ken_portfolio;
   ```

### Step 3: Backend Setup

Open a **new terminal** and run:

```powershell
# Navigate to backend folder
cd backend

# Copy environment file
copy .env.example .env

# Install dependencies (requires Composer)
composer install

# Generate application key
php artisan key:generate

# Edit .env file - Update database credentials:
# DB_DATABASE=ken_portfolio
# DB_USERNAME=root
# DB_PASSWORD=your_mysql_password

# Run migrations
php artisan migrate

# Create admin user
php artisan tinker
# Then paste this command:
# \App\Models\User::create(['name' => 'Admin', 'email' => 'admin@example.com', 'password' => \Hash::make('password')]);
# Type 'exit' to quit tinker

# Start Laravel server
php artisan serve
```

✅ Backend will run on: **http://localhost:8000**

### Step 4: Frontend Setup

Open a **new terminal** (keep backend running) and run:

```powershell
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend will run on: **http://localhost:3000**

## Access the Application

1. **Public Portfolio**: Open http://localhost:3000 in your browser
2. **Admin Panel**: Navigate to http://localhost:3000/admin/login
   - Email: `admin@example.com`
   - Password: `password`

## Quick Commands Reference

### Backend (Terminal 1)
```powershell
cd backend
php artisan serve
```

### Frontend (Terminal 2)
```powershell
cd frontend
npm run dev
```

## Troubleshooting

### "php is not recognized"
- PHP is not in your PATH
- Solution: Add PHP installation folder to Windows PATH environment variable
- Or use XAMPP/Laragon which handles this automatically

### "composer is not recognized"
- Install Composer from https://getcomposer.org/download/
- Or use XAMPP/Laragon which includes Composer

### Database Connection Error
- Make sure MySQL is running
- Check credentials in `backend/.env`
- Verify database `ken_portfolio` exists

### CORS Errors
- Make sure `FRONTEND_URL=http://localhost:3000` is in `backend/.env`
- Restart Laravel server after changing .env

### Port Already in Use
- Backend: Change port: `php artisan serve --port=8001`
- Frontend: Edit `frontend/vite.config.js` and change port

## What You'll See

1. **Home Page**: Hero section with your name, skills showcase, and featured projects
2. **Projects Page**: All your portfolio projects
3. **About Page**: Your experience and skills breakdown
4. **Admin Panel**: Full CRUD interface to manage content

## Next Steps After Running

1. Login to admin panel
2. Add your projects, skills, and experiences
3. Customize colors and content
4. Update social media links in `frontend/src/pages/Home.jsx`

Enjoy your portfolio! 🚀
