@echo off
echo Starting Laravel Backend...
echo.
cd backend
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo.
    echo IMPORTANT: Please edit backend\.env and configure your database settings!
    echo Then run: php artisan key:generate
    echo Then run: php artisan migrate
    echo Then run: php artisan tinker (to create admin user)
    pause
    exit
)
php artisan serve
pause
