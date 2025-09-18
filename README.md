# SallQ Consultants - Professional Business Consulting Website

A fully responsive and interactive 5-page website built with HTML5, CSS3, and vanilla JavaScript. This project showcases modern web development practices with a focus on user experience, accessibility, and performance.

## 🚀 Live Demo

[View Live Website](https://tornado-techie.github.io/sallq-consultants/) 

## 📋 Project Overview

SallQ Consultants is a comprehensive business consulting website designed for a Kenyan consultancy firm specializing in digital transformation, web development, and business process optimization. The website features modern design, smooth animations, and interactive elements to engage visitors and convert them into clients.

### Key Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Components** - Hero slider, flip cards, accordion menus, filterable portfolio gallery
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Form Validation** - Real-time client-side validation with user feedback
- **Modern UI/UX** - Clean design with consistent branding and intuitive navigation
- **Performance Optimized** - Fast loading times and optimized images
- **SEO Ready** - Semantic HTML and proper meta tags

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and accessibility features
- **CSS3** - Flexbox, CSS Grid, custom properties, and animations
- **Vanilla JavaScript** - Interactive features and DOM manipulation
- **Font Awesome** - Icons and visual elements
- **Google Fonts** - Typography (Segoe UI fallback)

## 📁 Project Structure

```
SallQ consultants-website/
├── index.html              # Home page with hero slider
├── about.html               # About page with scroll animations
├── services.html            # Services page with flip cards and accordion
├── portfolio.html           # Portfolio page with filterable gallery
├── contact.html             # Contact page with form validation
├── header.html              # Shared navigation component
├── footer.html              # Shared footer component
├── css/
│   └── style.css           # Main stylesheet with responsive design
├── js/
│   └── script.js           # Interactive features and animations
├── images/                 # Image assets (create this folder)
│   ├── hero-bg.jpg
│   ├── about-team.jpg
│   ├── portfolio-1.jpg
│   └── ...
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
```css
:root {
  --primary-color: #0f766e;    /* Teal navbar */
  --accent-color: #0f766e;     /* Accent */
  --dark: #1f2937;             /* Dark background */
  --text-primary: #111827;     /* Text color */
  --light-bg: #f8fafc;         /* Light background */
  --white: #ffffff;            /* White */
}
```

### Typography
- **Primary Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Typography**: Fluid font sizes using rem units

### Layout
- **Container Max Width**: 1200px
- **Grid System**: CSS Grid and Flexbox
- **Breakpoints**: 
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px

## 🔧 Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript
- Text editor or IDE (VS Code recommended)
- Git (for version control)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/sallq-consultants-website.git
   cd sallq-consultants-website
   ```

2. **Create Image Directory**
   ```bash
   mkdir images
   ```

3. **Add Images**
   - Add your image assets to the `images/` directory
   - Update image paths in HTML files as needed
   - Recommended image sizes:
     - Hero images: 1920x1080px
     - Portfolio images: 600x400px
     - Team photos: 400x400px

4. **Local Development**
   - Open `index.html` in your browser, or
   - Use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

5. **Access the Website**
   - Open `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Access Your Live Site**
   - Your site will be available at: `https://your-username.github.io/repository-name/`

## 📱 Responsive Features

### Mobile-First Design
- Touch-friendly navigation with hamburger menu
- Optimized button sizes and spacing
- Responsive images and typography
- Swipe-friendly carousel controls

### Tablet Optimization
- Adjusted grid layouts
- Optimized image sizes
- Touch-friendly interactive elements

### Desktop Enhancements
- Hover effects and animations
- Keyboard navigation support
- Large screen layouts

## ⚡ Interactive Features

### Home Page
- **Auto-sliding Hero Banner**: 5-second intervals with manual controls
- **Smooth Scroll Navigation**: Animated page transitions
- **Parallax Effects**: Subtle motion on scroll

### About Page
- **Staggered Animations**: Cards fade in with delays
- **Scroll-triggered Effects**: Elements animate as they enter viewport
- **Interactive Team Section**: Hover effects on team member cards

### Services Page
- **3D Flip Cards**: Hover to reveal service details
- **Accordion Menu**: Expandable service descriptions
- **Ripple Effects**: Button click animations

### Portfolio Page
- **Filterable Gallery**: Category-based project filtering
- **Image Overlays**: Project details on hover
- **Smooth Transitions**: Animated filter changes

### Contact Page
- **Real-time Validation**: Immediate feedback on form inputs
- **Custom Error Messages**: User-friendly validation messages
- **Success Feedback**: Confirmation after form submission

## 🔍 SEO Optimization

- **Semantic HTML5** markup for better search engine understanding
- **Meta tags** with descriptions and keywords
- **Open Graph** tags for social media sharing
- **Structured data** for enhanced search results
- **Image alt tags** for accessibility and SEO
- **Fast loading times** with optimized assets

## ♿ Accessibility Features

- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **High contrast** color combinations
- **Focus indicators** for interactive elements
- **Semantic HTML** structure
- **Alt text** for all images

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **CSS and JS minification** (for production)
- **Responsive images** with appropriate sizing
- **Efficient animations** using CSS transforms
- **Optimized font loading**
- **Minimal HTTP requests**

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Guide

### Changing Colors
1. Update CSS custom properties in `css/style.css`:
   ```css
   :root {
     --primary-color: #your-color;
     --accent-color: #your-accent;
   }
   ```

### Adding New Pages
1. Create new HTML file following the existing structure
2. Include header and footer placeholders
3. Add navigation link in `header.html`
4. Update footer links in `footer.html`

### Modifying Content
1. Update text content directly in HTML files
2. Replace images in the `images/` directory
3. Update image paths in HTML files
4. Modify social media links in `footer.html`

### Adding New Features
1. Add HTML structure in appropriate page
2. Add CSS styles in `style.css`
3. Add JavaScript functionality in `script.js`
4. Test across different devices and browsers

## 🐛 Troubleshooting

### Common Issues

**Problem**: Images not loading
- **Solution**: Check image paths and ensure files exist in `images/` directory

**Problem**: JavaScript features not working
- **Solution**: Check browser console for errors and ensure `script.js` is loaded

**Problem**: Form not submitting
- **Solution**: Form currently shows success message only; integrate with backend for actual submission

**Problem**: Animations not smooth on mobile
- **Solution**: Test on actual devices; simulator performance may differ

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

- **Design Inspiration**: Modern business consulting websites
- **Images**: Unsplash (replace with actual images)
- **Icons**: Font Awesome
- **Fonts**: System fonts with web-safe fallbacks

## 📞 Support

For questions or support regarding this project:
- Email: salomemundia13@gmail.com
- GitHub Issues: Create an issue in this repository
- Documentation: Refer to this README and code comments

## 🔄 Version History

- **v1.0.0** - Initial release with all 5 pages and core features
- **v1.1.0** - Added form validation and improved mobile experience
- **v1.2.0** - Enhanced animations and performance optimizations

---

**Made with ❤️ in Kenya** | **SallQ Consultants © 2025**
