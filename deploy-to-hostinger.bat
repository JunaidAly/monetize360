@echo off
echo Building project...
call npm run build

echo.
echo Build complete!
echo.
echo Now upload these files from the 'dist' folder to Hostinger public_html:
echo - All files and folders in dist/
echo - .htaccess file from project root
echo.
pause
