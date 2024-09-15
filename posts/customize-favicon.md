---
title: 'Customize the Favicon'
date: '2023-09-17'
categories: ['Tutorial']
tags: ['customization', 'favicon']
---

The favicon is the small icon displayed in the browser's address bar and tabs. This guide will show you how to customize the favicon for your Chirpy site.

## Steps to Change the Favicon

1. **Prepare Your Favicon**
   Create your favicon image. It's recommended to have multiple sizes for different devices. You can use tools like [Favicon Generator](https://realfavicongenerator.net/) to create a full set of favicons.

2. **Replace Existing Favicon Files**
   Navigate to `assets/img/favicons/` in your Chirpy project directory. Replace the existing files with your new favicon files.

3. **Update `safari-pinned-tab.svg`**
   If you're using a custom SVG for the Safari pinned tab, replace the existing file with your new SVG.

4. **Modify `_includes/favicons.html`**
   If your new favicons have different filenames or you've added new sizes, update this file accordingly.

   ```html
   <link rel="apple-touch-icon" sizes="180x180" href="{{ '/assets/img/favicons/apple-touch-icon.png' | relative_url }}">
   <link rel="icon" type="image/png" sizes="32x32" href="{{ '/assets/img/favicons/favicon-32x32.png' | relative_url }}">
   <link rel="icon" type="image/png" sizes="16x16" href="{{ '/assets/img/favicons/favicon-16x16.png' | relative_url }}">
   <link rel="manifest" href="{{ '/assets/img/favicons/site.webmanifest' | relative_url }}">
   <link rel="shortcut icon" href="{{ '/assets/img/favicons/favicon.ico' | relative_url }}">