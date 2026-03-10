@echo off
echo Starting React Frontend...
echo.
cd frontend
if not exist node_modules (
    echo Installing dependencies...
    call npm install
    echo.
)
npm run dev
pause
