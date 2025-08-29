@echo off
echo =============================================
echo   Mobile Portfolio Hosting Setup
echo   (Frontend + Backend)
echo =============================================
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| find "IPv4"') do set "ip=%%a"
set "ip=%ip: =%"

echo Building portfolio for production...
call npm run build

echo.
echo Starting full-stack application...
echo.
echo Your portfolio is available at:
echo - Frontend Local: http://localhost:3000
echo - Frontend Mobile: http://%ip%:3000
echo - Backend API: http://%ip%:3001
echo.
echo Contact form is fully functional with email backend!
echo Make sure your mobile device is on the same WiFi network!
echo Press Ctrl+C to stop the servers
echo.

call npm run fullstack:mobile
