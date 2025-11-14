# CSS Organization Guide

## Overview
The navbar, hamburger menu, and footer CSS have been fully organized and cleaned up in `style.css`. They are now in logical sections with clear comments for easy copying to other pages.

## Structure in style.css

### 1. **NAVBAR & NAVIGATION** (Lines 12-181)
Contains all navbar styling including:
- `.navpanel` - Main navigation container (overlay on hero image)
- `.nav-container` - Container for logo and links
- `.logo` and `#ollo` - Logo styling
- `.navbar` - Desktop navigation links
- `.hamburger` - Mobile hamburger button (hidden on desktop)
- `.mobile-menu` - Mobile menu overlay

### 2. **FOOTER** (Lines 182-260)
Contains all footer styling including:
- `footer` - Main footer container (full width)
- `.footer-container` - Flex container for footer items
- `.footer-item` - Individual footer items
- `.footer-title` and `.footer-text` - Text styling
- `.socials` - Social icons
- `.copyright` - Copyright text

### 3. **RESPONSIVE MEDIA QUERY** (Lines 263-330)
Mobile breakpoint at `max-width: 768px`
Includes:
- Navbar hidden, hamburger shown
- Footer items stack vertically
- Hero image height reduced to 50vh
- Section1 positioning adjusted
- Button sizing for mobile

## How to Use for New Pages

### Option 1: Copy from Template File
1. Open `NAVBAR_FOOTER_CSS_TEMPLATE.css` in the project root
2. Copy all the CSS
3. Paste into your new page's style.css

### Option 2: Copy from Main style.css
1. In `style.css`, find the section headers:
   - `/* ===== NAVBAR & NAVIGATION (Desktop & Mobile) ===== */`
   - `/* ===== FOOTER (Desktop & Mobile) ===== */`
   - `/* ===== RESPONSIVE - Mobile (max-width: 768px) ===== */`
2. Copy from the start of "NAVBAR & NAVIGATION" through the end of the "RESPONSIVE" media query
3. Paste into your new page's style.css

## Key Features

### Desktop (768px and up)
- ✓ Navbar visible with all links spaced out
- ✓ Hamburger hidden
- ✓ Footer items displayed side-by-side
- ✓ Hero image full height (100vh)

### Mobile (below 768px)
- ✓ Navbar hidden
- ✓ Hamburger visible (fixed top-right)
- ✓ Mobile menu slides in from top with blur backdrop
- ✓ Footer items stack vertically
- ✓ Hero image reduced to 50vh
- ✓ All text and buttons scaled appropriately

## File Locations
- **Main CSS**: `c:\Users\USER\AU-BSF-website\style.css` (Lines 12-330)
- **Template CSS**: `c:\Users\USER\AU-BSF-website\NAVBAR_FOOTER_CSS_TEMPLATE.css`
- **JavaScript**: `app.js` (handles hamburger toggle and menu closing)

## Quick Copy-Paste Sections

### For Navbar Only
Copy from line 12 to line 180 in style.css

### For Footer Only
Copy from line 182 to line 260 in style.css

### For Mobile Responsive
Copy from line 263 to line 330 in style.css

## No More Repetition!
Now you have a reusable template that's clean, organized, and ready to paste into any new page without having to recreate or debug the navbar and footer for each page.
