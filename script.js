/**
 * ============================================================================
 * MUHAMMED JAZIL.K — MERN STACK DEVELOPER PORTFOLIO
 * Vanilla JavaScript: Interactive Animations, Dynamic Typing, Form Validation
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dynamic Year in Footer
  initCurrentYear();

  // 2. Initialize Hero Role Typing Animation
  initTypeWriter();

  // 3. Initialize Navbar Scroll Effects & Mobile Auto-close
  initNavbarBehavior();

  // 4. Initialize Contact Form Validation & Submission Feedback
  initContactForm();

  // 5. Initialize Back to Top Button
  initBackToTop();

  // 6. Initialize Clipboard Email Copy Feature
  initEmailClipboard();
});

/* --------------------------------------------------------------------------
   1. DYNAMIC FOOTER COPYRIGHT YEAR
   -------------------------------------------------------------------------- */
function initCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   2. HERO ROLE TYPING ANIMATION
   -------------------------------------------------------------------------- */
function initTypeWriter() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'MERN Stack Developer',
    'React.js Developer',
    'Full Stack Web Developer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const holdDelay = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Word completed
    if (!isDeleting && charIndex === currentRole.length) {
      delay = holdDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. NAVBAR SCROLL EFFECT & MOBILE MENU AUTO-CLOSE
   -------------------------------------------------------------------------- */
function initNavbarBehavior() {
  const navbar = document.getElementById('mainNavbar');
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add shadow and blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('navbar-scrolled');
    } else {
      navbar?.classList.remove('navbar-scrolled');
    }
  });

  // Auto close mobile burger menu on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. CONTACT FORM VALIDATION & CLIENT-SIDE FEEDBACK
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const alertBox = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !alertBox) return;

  // Validation Helper Functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const validateField = (input, condition) => {
    if (condition) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      return true;
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      return false;
    }
  };

  // Real-time input listeners
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');

  nameInput?.addEventListener('input', () => {
    validateField(nameInput, nameInput.value.trim().length >= 2);
  });

  emailInput?.addEventListener('input', () => {
    validateField(emailInput, isValidEmail(emailInput.value.trim()));
  });

  subjectInput?.addEventListener('input', () => {
    validateField(subjectInput, subjectInput.value.trim().length >= 3);
  });

  messageInput?.addEventListener('input', () => {
    validateField(messageInput, messageInput.value.trim().length >= 10);
  });

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
    const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value.trim()));
    const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3);
    const isMsgValid = validateField(messageInput, messageInput.value.trim().length >= 10);

    if (isNameValid && isEmailValid && isSubjectValid && isMsgValid) {
      // Simulate sending animation
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...`;

      setTimeout(() => {
        // Success state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        // Render detailed feedback alert
        alertBox.className = 'alert alert-success border-0 shadow-sm d-block';
        alertBox.innerHTML = `
          <div class="d-flex align-items-start gap-2">
            <i class="fa-solid fa-circle-check fs-5 text-success mt-1"></i>
            <div>
              <strong class="d-block mb-1">Message Validated Successfully!</strong>
              <span>Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>! Your form passed all client-side checks.</span>
              <div class="mt-2 pt-2 border-top border-success-subtle small text-dark">
                <i class="fa-solid fa-circle-info me-1"></i> 
                <strong>Developer Note:</strong> This is currently a frontend demo. The message is not delivered to an inbox until you integrate a backend API endpoint, Formspree, or EmailJS service.
              </div>
            </div>
          </div>
        `;

        // Trigger toast
        showToast('Message validated! Check the notification banner for details.');

        // Reset form inputs & validation classes
        form.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
          input.classList.remove('is-valid');
          input.classList.remove('is-invalid');
        });
      }, 700);

    } else {
      alertBox.className = 'alert alert-danger border-0 shadow-sm d-block';
      alertBox.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation me-2"></i>
        Please fill out all required fields with valid details before sending.
      `;
    }
  });
}

/* --------------------------------------------------------------------------
   5. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   6. CLIPBOARD EMAIL COPY FEATURE
   -------------------------------------------------------------------------- */
function initEmailClipboard() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailDisplay = document.getElementById('contactEmailDisplay');

  if (!copyBtn || !emailDisplay) return;

  copyBtn.addEventListener('click', () => {
    const email = emailDisplay.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied "${email}" to clipboard!`);
    }).catch(() => {
      showToast('Could not copy email automatically.');
    });
  });
}

/* --------------------------------------------------------------------------
   UTILITY HELPERS
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toastEl = document.getElementById('actionToast');
  const toastMsgEl = document.getElementById('toastMessage');

  if (toastEl && toastMsgEl && window.bootstrap) {
    toastMsgEl.innerHTML = `<i class="fa-solid fa-circle-check text-cyan me-2"></i> ${message}`;
    const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
  }
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
