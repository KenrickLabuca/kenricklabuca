# Troubleshooting: Skills Not Showing

If your skills are not appearing in the "Skills & Technologies" section, check the following:

## 1. Check if Backend is Running

The frontend needs the backend API to be running. Make sure:

```bash
# In backend folder
php artisan serve
```

Backend should be running on **http://localhost:8000**

## 2. Check if Skills are in Database

### Option A: Using phpMyAdmin
1. Open phpMyAdmin (http://localhost/phpmyadmin)
2. Select your database
3. Click on the `skills` table
4. Check if there are any records

### Option B: Using Admin Panel
1. Go to http://localhost:3000/admin/login
2. Login with your admin credentials
3. Click on "Skills" tab
4. Check if skills are listed there

### Option C: Add Skills via SQL
Run the SQL script in `backend/ADD_SKILLS.sql` in phpMyAdmin

## 3. Check Browser Console

1. Open your browser's Developer Tools (F12)
2. Go to the "Console" tab
3. Look for any error messages
4. You should see: "Skills loaded: [...]" if data is fetched successfully

## 4. Check Network Tab

1. Open Developer Tools (F12)
2. Go to "Network" tab
3. Refresh the page
4. Look for a request to `/api/skills`
5. Check if it returns 200 status and has data

## 5. Common Issues

### Issue: "Failed to load data" error
**Solution**: Make sure backend is running on port 8000

### Issue: "No skills found" message
**Solution**: Skills haven't been added to database yet. Run the SQL script or add via admin panel

### Issue: Empty array in console
**Solution**: Database is empty. Add skills using one of the methods above

### Issue: CORS error
**Solution**: Check `backend/.env` has `FRONTEND_URL=http://localhost:3000`

## Quick Fix: Add Skills Now

1. Open phpMyAdmin
2. Select your database
3. Go to SQL tab
4. Copy and paste contents of `backend/ADD_SKILLS.sql`
5. Click "Go"
6. Refresh your frontend page

The skills should now appear!
