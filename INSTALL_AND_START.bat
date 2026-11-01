@echo off
title AkhlaqiBaatein.com - Development Server
echo ========================================================
echo   AkhlaqiBaatein.com - Islamic ^& Moral Wisdom Portal
echo ========================================================
echo.
echo Step 1: Checking dependencies...
if not exist node_modules (
    echo Installing packages... Yeh sirf pehli dafa 1-2 minute le ga.
    call npm install
) else (
    echo Packages already installed.
)
echo.
echo Step 2: Starting Development Server on http://localhost:3000 ...
start http://localhost:3000
call npm run dev
pause
