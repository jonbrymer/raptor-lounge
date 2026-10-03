# Arkanoid GitHub Repository Setup Script
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Arkanoid GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host

Write-Host "Checking current git status..." -ForegroundColor Yellow
git status
Write-Host

Write-Host "Current remotes:" -ForegroundColor Yellow
git remote -v
Write-Host

Write-Host "========================================" -ForegroundColor Green
Write-Host "   NEXT STEPS:" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host
Write-Host "1. Go to https://github.com and create a new repository named 'Arkanoid'" -ForegroundColor White
Write-Host "   - Description: A classic Arkanoid/Breakout game built with HTML5 Canvas" -ForegroundColor Gray
Write-Host "   - Make it public" -ForegroundColor Gray
Write-Host "   - DO NOT initialize with README, .gitignore, or license (we have them)" -ForegroundColor Gray
Write-Host
Write-Host "2. Copy the repository URL (should be: https://github.com/lefrasso/Arkanoid.git)" -ForegroundColor White
Write-Host
Write-Host "3. Run these commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/lefrasso/Arkanoid.git" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host
Write-Host "4. Enable GitHub Pages in repository settings" -ForegroundColor White
Write-Host

Read-Host "Press Enter to continue"

Write-Host
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "   Would you like to add the remote now?" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host

$repoUrl = Read-Host "Enter your GitHub repository URL (or press Enter to skip)"

if ($repoUrl -ne "") {
    Write-Host "Adding remote origin..." -ForegroundColor Yellow
    git remote add origin $repoUrl
    Write-Host
    Write-Host "Remote added! Now pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    Write-Host
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "   SUCCESS! Repository pushed to GitHub" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host
    Write-Host "Your game is now available at:" -ForegroundColor White
    Write-Host "Repository: $repoUrl" -ForegroundColor Cyan
    Write-Host "GitHub Pages: https://lefrasso.github.io/Arkanoid/" -ForegroundColor Cyan
    Write-Host
    Write-Host "Don't forget to enable GitHub Pages in repository settings!" -ForegroundColor Yellow
} else {
    Write-Host "Skipping remote setup. Run the commands manually when ready." -ForegroundColor Yellow
}

Write-Host
Write-Host "Opening game locally for testing..." -ForegroundColor Green
Start-Process "index.html"

Write-Host
Write-Host "Opening screenshot helper..." -ForegroundColor Green
Start-Process "screenshot-helper.html"

Read-Host "Press Enter to exit"
