# Creating GitHub Repository for Arkanoid Game

## Step 1: Create Repository on GitHub.com

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `Arkanoid`
   - **Description**: `A classic Arkanoid/Breakout game built with HTML5 Canvas, featuring multiple themes, power-ups, and responsive design`
   - **Visibility**: Public
   - **Initialize with**: 
     - ❌ Do NOT add README (we already have one)
     - ❌ Do NOT add .gitignore (we already have one)
     - ❌ Do NOT add license (we already have one)
5. Click "Create repository"

## Step 2: Copy the Repository URL

After creating the repository, GitHub will show you a page with setup instructions. 
Copy the HTTPS URL that looks like: `https://github.com/lefrasso/Arkanoid.git`

## Step 3: Run the Setup Commands

After creating the repository on GitHub, run these commands in PowerShell:

```powershell
# Add the remote origin (replace with your actual repo URL)
git remote add origin https://github.com/lefrasso/Arkanoid.git

# Push the code to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your game will be available at: `https://lefrasso.github.io/Arkanoid/`

## Alternative: Using GitHub Desktop

If you prefer a GUI:
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in to your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your Arkanoid folder
5. Click "Publish repository" in the top bar
6. Make sure "Keep this code private" is unchecked
7. Click "Publish Repository"

## Verification

After pushing, verify everything is working:
- [ ] Repository is visible on GitHub
- [ ] All files are present
- [ ] README displays correctly
- [ ] GitHub Pages is enabled and working
- [ ] Game loads at the GitHub Pages URL
