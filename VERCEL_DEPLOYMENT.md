# Vercel Deployment Fix for 404 Errors

## Problem
Getting 404 NOT_FOUND errors when navigating to routes like `/about`, `/projects`, `/contact` on Vercel.

## Solution

### Step 1: Verify vercel.json Location
The `vercel.json` file should be in the **frontend** folder if you're deploying from the frontend directory, OR in the root if deploying from root.

### Step 2: Vercel Project Settings
Go to your Vercel project dashboard → Settings → General and configure:

**If deploying from ROOT directory:**
- **Root Directory**: Leave empty or `.`
- **Build Command**: `cd frontend && npm run build`
- **Output Directory**: `frontend/dist`
- **Install Command**: `cd frontend && npm install`

**If deploying from FRONTEND directory:**
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Verify vercel.json Content
The `frontend/vercel.json` should contain:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 4: Redeploy
After updating settings:
1. Go to Deployments tab
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger redeployment

### Alternative: If Still Not Working
If the above doesn't work, try adding this to `vite.config.js`:
```js
export default defineConfig({
  base: '/',
  // ... rest of config
})
```

Then rebuild and redeploy.
