# How to Create Database Using XAMPP

## Method 1: Using phpMyAdmin (Easiest)

### Step 1: Start XAMPP Services
1. Open **XAMPP Control Panel**
2. Click **Start** button next to **Apache** (if not already running)
3. Click **Start** button next to **MySQL** (if not already running)
   - Both should show green "Running" status

### Step 2: Open phpMyAdmin
1. Open your web browser
2. Go to: **http://localhost/phpmyadmin**
   - Or click **Admin** button next to MySQL in XAMPP Control Panel

### Step 3: Create Database
1. Click on **"New"** in the left sidebar (or click **"Databases"** tab at the top)
2. In the **"Create database"** section:
   - **Database name**: Enter `ken_portfolio` (or any name you prefer)
   - **Collation**: Select `utf8mb4_unicode_ci` (recommended)
3. Click **"Create"** button

✅ **Done!** Your database is now created.

### Step 4: Verify Database
- You should see your database `ken_portfolio` in the left sidebar
- Click on it to see it's empty (no tables yet)

---

## Method 2: Using MySQL Command Line

### Step 1: Open MySQL Command Line
1. Open **XAMPP Control Panel**
2. Click **Shell** button (or open Command Prompt)
3. Navigate to MySQL:
   ```bash
   cd C:\xampp\mysql\bin
   mysql.exe -u root
   ```
   - If you have a MySQL password, use: `mysql.exe -u root -p`

### Step 2: Create Database
In the MySQL command line, type:
```sql
CREATE DATABASE ken_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Step 3: Verify
```sql
SHOW DATABASES;
```
You should see `ken_portfolio` in the list.

### Step 4: Exit
```sql
EXIT;
```

---

## After Creating Database

### Update Your .env File

Edit `backend\.env` file and make sure these settings match your database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ken_portfolio
DB_USERNAME=root
DB_PASSWORD=
```

**Note**: 
- If you set a MySQL root password, add it to `DB_PASSWORD=`
- If no password (default XAMPP), leave `DB_PASSWORD=` empty

### Run Migrations

After creating the database, run Laravel migrations to create tables:

```powershell
cd "C:\xampp\htdocs\KEN PORTFOLIO\backend"
C:\xampp\php\php.exe artisan migrate
```

This will create all the necessary tables:
- `users`
- `projects`
- `skills`
- `experiences`
- etc.

### Add Skills to Database

After migrations, you can add skills using:

**Option 1: SQL Script (Easiest)**
1. Open phpMyAdmin
2. Select `ken_portfolio` database
3. Click **SQL** tab
4. Copy and paste contents of `backend/ADD_SKILLS.sql`
5. Click **Go**

**Option 2: Admin Panel**
1. Start your backend: `php artisan serve`
2. Start your frontend: `npm run dev`
3. Go to http://localhost:3000/admin/login
4. Login and add skills through the admin panel

---

## Troubleshooting

### Issue: "Access denied for user 'root'@'localhost'"
**Solution**: 
- Check if MySQL password is set in XAMPP
- Update `DB_PASSWORD=` in `.env` file
- Or reset MySQL password in XAMPP

### Issue: "Database doesn't exist"
**Solution**: 
- Make sure you created the database with the exact name
- Check spelling in `.env` file matches database name

### Issue: "Can't connect to MySQL server"
**Solution**: 
- Make sure MySQL is running in XAMPP Control Panel
- Check if port 3306 is not blocked by firewall

### Issue: phpMyAdmin shows "404 Not Found"
**Solution**: 
- Make sure Apache is running in XAMPP
- Try: http://localhost/phpmyadmin/index.php

---

## Quick Checklist

- [ ] XAMPP Control Panel is open
- [ ] Apache is running (green)
- [ ] MySQL is running (green)
- [ ] Database `ken_portfolio` is created
- [ ] `.env` file is configured with database name
- [ ] Migrations are run (`php artisan migrate`)
- [ ] Skills are added to database

Once all checked, your portfolio should work! 🎉
