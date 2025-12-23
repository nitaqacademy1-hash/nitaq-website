# Mobile View & Navigation Fixes

## ✅ Changes Implemented

### 1. **Mobile Navigation Menu**
- ✅ **Fixed "Call Us" Button**: Added a "Call Us" button directly inside the mobile menu (hamburger menu).
- ✅ **Responsive Visibility**: 
  - Mobile Menu: Shows "Call Us" button.
  - Desktop Header: Shows "Call Us" (or "Get Started") button.
  - Mobile Header: Hides the external button to avoid clutter.

### 2. **Dropdown Functionality**
- ✅ **Click-to-Toggle**: Implemented JavaScript to toggle dropdowns on click for mobile devices (since hover doesn't work well on touch).
- ✅ **Active State**: Added CSS for `.dropdown.active` to show content.

### 3. **Pages Updated**
- `index.html`
- `about.html`
- `test-preparations.html`
- `professional-certifications.html`
- `language-trainings.html`

### 4. **Files Modified**
- `src/style.css`: Added utility classes (`.mobile-only-btn`, `.desktop-only-btn`) and dropdown active styles.
- HTML files: Updated navigation structure and added inline JS for mobile toggle.

## 📱 How to Test
1. Open the website on a mobile device (or resize browser to < 968px).
2. Click the hamburger menu (3 lines).
3. You will see the "Call Us" button at the bottom of the menu.
4. Click "Courses ▾" to see the dropdown menu open.
