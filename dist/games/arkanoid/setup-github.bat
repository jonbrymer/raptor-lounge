@echo off
echo ========================================
echo   Arkanoid GitHub Repository Setup
echo ========================================
echo.

echo Checking current git status...
git status
echo.

echo Current remotes:
git remote -v
echo.

echo ========================================
echo   NEXT STEPS:
echo ========================================
echo.
echo 1. Go to https://github.com and create a new repository named "Arkanoid"
echo    - Description: A classic Arkanoid/Breakout game built with HTML5 Canvas
echo    - Make it public
echo    - DO NOT initialize with README, .gitignore, or license (we have them)
echo.
echo 2. Copy the repository URL (should be: https://github.com/lefrasso/Arkanoid.git)
echo.
echo 3. Run these commands:
echo    git remote add origin https://github.com/lefrasso/Arkanoid.git
echo    git push -u origin main
echo.
echo 4. Enable GitHub Pages in repository settings
echo.

pause

echo.
echo ========================================
echo   Would you like to add the remote now?
echo ========================================
echo.
set /p repo_url="Enter your GitHub repository URL (or press Enter to skip): "

if not "%repo_url%"=="" (
    echo Adding remote origin...
    git remote add origin %repo_url%
    echo.
    echo Remote added! Now pushing to GitHub...
    git push -u origin main
    echo.
    echo ========================================
    echo   SUCCESS! Repository pushed to GitHub
    echo ========================================
    echo.
    echo Your game is now available at:
    echo Repository: %repo_url%
    echo GitHub Pages: https://lefrasso.github.io/Arkanoid/
    echo.
    echo Don't forget to enable GitHub Pages in repository settings!
) else (
    echo Skipping remote setup. Run the commands manually when ready.
)

echo.
echo Opening game locally for testing...
start index.html

echo.
echo Opening screenshot helper...
start screenshot-helper.html

pause
