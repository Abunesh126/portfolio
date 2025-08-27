@echo off
echo =============================================
echo   Mobile Portfolio Hosting Setup
echo =============================================
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| find "IPv4"') do set "ip=%%a"
set "ip=%ip: =%"

echo Building portfolio for production...
call npm run build

echo.
echo Starting local server for mobile testing...
echo.
echo Your portfolio is available at:
echo - Local: http://localhost:3000
echo - Mobile: http://%ip%:3000
echo.
echo Make sure your mobile device is on the same WiFi network!
echo Press Ctrl+C to stop the server
echo.

call npm run preview -- --host 0.0.0.0 --port 3000
