# Muhammed Jazil.K — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website built for **MUHAMMED JAZIL.K**, a **MERN Stack Full Stack Developer**.

Built using **HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript**, this portfolio is crafted with a high-tech dark theme, glowing electric purple and cyan accents, interactive typing animations, modular project showcases with modal previews, and complete client-side form validation.

---

## 🌟 Live Preview & Features

- **High-Tech Dark Theme**: Deep space dark aesthetics with neon purple (`#8b5cf6`) and electric cyan (`#06b6d4`) accents, glowing cards, and subtle animated background ambient orbs.
- **Dynamic Typing Animation**: Cycles through developer roles in the hero section (*MERN Stack Developer*, *React.js Developer*, *Full Stack Web Developer*).
- **Responsive Navigation**: Fixed glassmorphic navbar with smooth scroll spy, active section highlighting, and mobile collapse.
- **Interactive Profile Showcase**: Tech avatar framed with an orbital glowing aura and floating MERN tech stack pills (*React, Node.js, MongoDB, Express.js*).
- **Comprehensive Skills Grid**: Grouped into Frontend, Backend, Database, and Developer Utilities with icon badges and hover motion.
- **Featured Project Gallery**:
  - **Fragranzia — Perfume E-commerce Website** (React.js, Node.js, Express.js, MongoDB, CSS)
  - **CRUD Management System** (React.js, Node.js, Express.js, MongoDB)
  - **Authentication System** (React.js, Node.js, Express.js, MongoDB, JWT)
  - *Each project features preview modals, tech stack badges, and GitHub / demo links.*
- **Education & Credentials Timeline**: Academic timeline with glowing nodes alongside bootcamp and certificate cards.
- **Validated Contact Form**: Real-time client-side validation for name, email regex, subject, and message length with clear feedback modals and a 1-click email copy button.
- **Accessibility & SEO Optimized**: Semantic HTML5 tags, accessible form labels, descriptive ARIA attributes, and Open Graph metadata.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility, and SEO meta tags |
| **CSS3 (Vanilla)** | Glassmorphism, CSS variables, glowing animations, responsive design |
| **Bootstrap 5.3 (CDN)** | Responsive 12-column grid system, navbar, and interactive modals |
| **Vanilla JavaScript (ES6+)** | Typewriter effect, scroll tracking, form validation, and toast notifications |
| **Font Awesome 6 (CDN)** | Modern icons for social links, tech badges, and UI elements |
| **Google Fonts** | `Outfit` (Modern Display) & `Fira Code` (Technical typography) |

---

## 📁 Project Folder Structure

```text
portfolio/
├── index.html                 # Main single-page application structure
├── style.css                  # Custom styling, dark mode theme & animations
├── script.js                  # Vanilla JS logic (typing, scroll, validation, toast)
├── README.md                  # Comprehensive setup & customization documentation
└── assets/
    └── images/
        ├── avatar.jpg         # Developer profile avatar illustration
        ├── fragranzia.jpg     # Perfume e-commerce project mockup
        ├── crud-system.jpg    # Full stack CRUD dashboard mockup
        └── auth-system.jpg    # JWT authentication project mockup
```

---

## 🚀 How to Open and Run the Website

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer, or right-click `index.html` and select **Open with > Chrome / Edge / Firefox**.

### Option 2: Live Server in VS Code (Recommended)
1. Open this `portfolio` folder in **VS Code** (`File > Open Folder...`).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **Open with Live Server** (or click "Go Live" in the bottom status bar).
4. The site will automatically launch at `http://127.0.0.1:5500`.

### Option 3: Built-in Python Server (Terminal)
Open a terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in any web browser.

---

## ✏️ Customization Guide

### 1. Replacing Your Profile Image
1. Place your new photo in `assets/images/` (e.g., `assets/images/my-photo.jpg`).
2. Open `index.html`, locate line ~110:
   ```html
   <img src="assets/images/avatar.jpg" alt="Muhammed Jazil.K" class="img-fluid rounded-4 profile-img" id="profileImage" />
   ```
3. Update the `src` attribute to point to your new file:
   ```html
   <img src="assets/images/my-photo.jpg" alt="Muhammed Jazil.K" class="img-fluid rounded-4 profile-img" id="profileImage" />
   ```

---

### 2. Updating Social Media Links
In `index.html`, replace the placeholder URLs with your actual profiles:
- **GitHub**: Search for `https://github.com/your-username` and replace with your profile URL.
- **LinkedIn**: Search for `https://linkedin.com/in/your-username` and replace with your LinkedIn URL.
- **Instagram**: Search for `https://instagram.com/your-username` and replace with your Instagram URL.
- **Email**: Update `muhammedjazil87@gmail.com` in both the `mailto:` links and the contact information card.

---

### 3. Adding or Updating Projects
Every project is structured as a card in the `#projects` section and paired with an optional modal popup at the bottom of `index.html`.

To update a project:
1. Replace the image in `assets/images/` and update `<img src="assets/images/your-project.jpg" ...>`.
2. Edit the title (`<h4 class="project-title">`), description, and tech tags (`<span class="badge-tag">...</span>`).
3. Update the GitHub button `href`:
   ```html
   <a href="https://github.com/your-username/your-repo-name" target="_blank" ...>
   ```
4. Update the corresponding modal at the bottom of `index.html` to reflect full architectural details.

---

### 4. Updating Education & Certifications
In `index.html`, locate the `#education` section:
1. Under **Formal Education**, update your degree name, institution, graduation year, and GPA/honors.
2. Under **Courses & Certifications**, edit course titles, issuing bootcamps/platforms, and completion dates.

---

### 5. Connecting a Real Backend or Form Service to the Contact Form

Currently, the contact form performs complete **client-side validation** in `script.js` and informs the user with an alert that client checks passed.

To deliver real messages directly to your email inbox, choose any of these simple integrations:

#### Option A: Using Formspree (Free & No Backend Required)
1. Sign up for a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xyzab123`).
3. In `index.html`, add the `action` and `method` attributes to `<form id="portfolioContactForm">`:
   ```html
   <form id="portfolioContactForm" action="https://formspree.io/f/your_form_id" method="POST">
   ```
4. In `script.js`, change `e.preventDefault()` inside the submit handler to allow the native post, or submit via `fetch()`:
   ```javascript
   fetch("https://formspree.io/f/your_form_id", {
     method: "POST",
     body: new FormData(form),
     headers: { 'Accept': 'application/json' }
   }).then(response => {
     if (response.ok) {
       showToast("Message sent to Jazil's inbox!");
     }
   });
   ```

#### Option B: Using EmailJS (Send via Gmail / Outlook Client-Side)
1. Register at [EmailJS.com](https://www.emailjs.com).
2. Add the EmailJS script tag to `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
3. Initialize EmailJS in `script.js` and call `emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)` after validation passes.

#### Option C: Connecting to your own Node.js / Express.js Backend
If you deploy your own Express server with `nodemailer`:
```javascript
fetch("https://api.yourdomain.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value
  })
})
.then(res => res.json())
.then(data => showToast("Message received by backend!"));
```

---

## 📄 License
This project is open source and available for personal or educational portfolio development.
Designed & Developed for **MUHAMMED JAZIL.K**.
