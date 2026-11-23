/**
 * PRAJWAL & PRAJNA - TRADITIONAL SOUTH INDIAN WEDDING INVITATION
 * Interactive Logic: Opening Animation, Background Music, Real Countdown (IST),
 * Real Photo Lightbox, Google Calendar Integration, WhatsApp Share, Canvas Jasmine Petals
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================
  // 1. CONFIGURATION & CONSTANTS
  // ========================================================
  const WEDDING_DATA = {
    groom: 'Prajwal',
    bride: 'Prajna',
    venueName: 'Udupi Grameena Sabhabhavana',
    venueAddress: 'Moodubelle Road, Kuntalanagara',
    googleMapsUrl: 'https://share.google/lgsBTNFpqHIBjumBe',
    // 26 November 2026, 9:31 AM IST (UTC+05:30)
    // 9:31 AM IST = 04:01 AM UTC on 2026-11-26
    weddingTimestampIST: new Date('2026-11-26T09:31:00+05:30').getTime()
  };

  const GALLERY_PHOTOS = [
    {
      src: 'couple-traditional.jpg',
      title: 'Traditional Splendor',
      caption: 'Prajwal and Prajna in traditional South Indian wedding attire'
    },
    {
      src: 'couple-nature.jpg',
      title: 'A Journey of Two Hearts',
      caption: 'Hand in hand amidst nature’s serene embrace'
    },
    {
      src: 'groom-prajwal.jpg',
      title: 'The Groom',
      caption: 'Prajwal'
    },
    {
      src: 'bride-prajna.jpg',
      title: 'The Bride',
      caption: 'Prajna'
    }
  ];

  // ========================================================
  // 2. SECTION A: OPENING INVITATION CARD INTERACTION
  // ========================================================
  const openingScreen = document.getElementById('openingScreen');
  const openInvitationBtn = document.getElementById('openInvitationBtn');

  if (openInvitationBtn) {
    openInvitationBtn.addEventListener('click', () => {
      // Unroll / slide opening screen
      openingScreen.classList.add('unrolled');

      // Smooth scroll to the Hero section
      setTimeout(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  }

  // ========================================================
  // 3. SECTION E: LIVE WEDDING COUNTDOWN TIMER (IST ACCURATE)
  // ========================================================
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');
  const countdownGrid = document.getElementById('countdownGrid');
  const celebrationNotice = document.getElementById('celebrationNotice');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_DATA.weddingTimestampIST - now;

    if (distance <= 0) {
      // Muhurtham has passed
      if (countdownGrid) countdownGrid.style.display = 'none';
      if (celebrationNotice) celebrationNotice.classList.remove('hidden');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (countDays) countDays.textContent = String(days).padStart(2, '0');
    if (countHours) countHours.textContent = String(hours).padStart(2, '0');
    if (countMinutes) countMinutes.textContent = String(minutes).padStart(2, '0');
    if (countSeconds) countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ========================================================
  // 4. SECTION D: REAL COUPLE PHOTO GALLERY & LIGHTBOX
  // ========================================================
  const galleryCards = document.querySelectorAll('.gallery-item-card');
  const galleryModal = document.getElementById('galleryModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentPhotoIndex = 0;

  function openLightbox(index) {
    currentPhotoIndex = index;
    const photo = GALLERY_PHOTOS[currentPhotoIndex];
    if (!photo) return;

    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.title;
    lightboxCaption.innerHTML = `<strong>${photo.title}</strong><br><span style="font-size:0.9rem; opacity:0.85;">${photo.caption}</span>`;
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % GALLERY_PHOTOS.length;
    openLightbox(currentPhotoIndex);
  }

  function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    openLightbox(currentPhotoIndex);
  }

  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const index = parseInt(card.getAttribute('data-index') || '0', 10);
      openLightbox(index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft') showPrevPhoto();
  });

  // Mobile Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  galleryModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  galleryModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNextPhoto();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrevPhoto();
    }
  }

  // ========================================================
  // 5. SECTION H: ADD TO GOOGLE CALENDAR
  // ========================================================
  const addToCalendarBtn = document.getElementById('addToCalendarBtn');

  if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', () => {
      // 26 November 2026, 9:31 AM IST
      // IST is UTC+5:30. 09:31 IST = 04:01 UTC
      // Event start in UTC ISO: 20261126T040100Z
      // As requested: "Do not invent an event end time. Allow the guest to adjust duration in Google Calendar if needed."
      // By supplying dates=START/START, Google Calendar sets the start time and lets guest select/adjust duration.
      const startTimeUTC = '20261126T040100Z';
      const eventTitle = encodeURIComponent('Wedding of Prajwal & Prajna');
      const eventDetails = encodeURIComponent(
        'With the blessings of our elders and families, you are cordially invited to the wedding of Prajwal and Prajna.\n\n' +
        'Muhurtham: 9:31 AM IST\n' +
        'Venue: Udupi Grameena Sabhabhavana, Moodubelle Road, Kuntalanagara\n\n' +
        'Google Maps Destination:\nhttps://share.google/lgsBTNFpqHIBjumBe'
      );
      const eventLocation = encodeURIComponent('Udupi Grameena Sabhabhavana, Moodubelle Road, Kuntalanagara');

      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startTimeUTC}/${startTimeUTC}&details=${eventDetails}&location=${eventLocation}&ctz=Asia/Kolkata`;

      window.open(calendarUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ========================================================
  // 6. SECTION I: WHATSAPP SHARING (DYNAMIC URL)
  // ========================================================
  const shareWhatsAppBtn = document.getElementById('shareWhatsAppBtn');

  if (shareWhatsAppBtn) {
    shareWhatsAppBtn.addEventListener('click', () => {
      const currentUrl = window.location.href;

      const whatsappMessage =
        `You're cordially invited to the wedding of Prajwal & Prajna!

Date: 26 November 2026
Muhurtham: 9:31 AM
Venue: Udupi Grameena Sabhabhavana, Moodubelle Road, Kuntalanagara.

We would be delighted to have your presence and blessings.

Wedding Invitation: ${currentUrl}`;

      const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappShareUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ========================================================
  // 7. SECTION G: VENUE & COPY ADDRESS TO CLIPBOARD
  // ========================================================
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(text) {
    if (!toastMessage) return;
    toastMessage.textContent = text;
    toastMessage.classList.add('show');
    setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 3000);
  }

  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const address = copyAddressBtn.getAttribute('data-address') || 'Udupi Grameena Sabhabhavana, Moodubelle Road, Kuntalanagara';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(() => {
          showToast('✓ Venue address copied to clipboard');
          if (copyBtnText) copyBtnText.textContent = 'Copied!';
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = 'Copy Address';
          }, 2500);
        }).catch(() => fallbackCopy(address));
      } else {
        fallbackCopy(address);
      }
    });
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('✓ Venue address copied to clipboard');
    } catch (err) {
      showToast('Address: ' + text);
    }
    document.body.removeChild(textArea);
  }

  // ========================================================
  // 8. BACK TO TOP BUTTON
  // ========================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================================================
  // 9. FALLING JASMINE PETALS CANVAS ANIMATION
  // ========================================================
  const canvas = document.getElementById('petalsCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const PETAL_COUNT = window.innerWidth < 768 ? 20 : 38;
    const petals = [];

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 6 + Math.random() * 8, // radius
        d: 0.5 + Math.random() * 1.5, // density / fall speed
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        tilt: Math.random() * 10,
        tiltAngle: 0,
        tiltAngleInc: 0.02 + Math.random() * 0.03,
        // Color variation: tender white jasmine with golden touch
        isGolden: Math.random() < 0.15
      });
    }

    let animationFrameId;

    function drawPetals() {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        // Jasmine petal shape: delicate curved teardrop
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.bezierCurveTo(p.r * 0.8, -p.r * 0.5, p.r * 0.8, p.r * 0.5, 0, p.r);
        ctx.bezierCurveTo(-p.r * 0.8, p.r * 0.5, -p.r * 0.8, -p.r * 0.5, 0, -p.r);
        ctx.closePath();

        if (p.isGolden) {
          ctx.fillStyle = 'rgba(255, 235, 153, 0.75)';
          ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          ctx.shadowBlur = 4;
        } else {
          // Tender Ivory Jasmine Petal
          ctx.fillStyle = 'rgba(255, 255, 250, 0.85)';
          ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
          ctx.shadowBlur = 3;
        }

        ctx.fill();
        ctx.restore();

        // Update physics
        p.angle += p.angularSpeed;
        p.tiltAngle += p.tiltAngleInc;
        p.y += p.d;
        p.x += Math.sin(p.tiltAngle) * 0.8;

        // Wrap around smoothly
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
      });

      animationFrameId = requestAnimationFrame(drawPetals);
    }

    // Pause animation when tab is inactive to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(drawPetals);
      }
    });

    // Check prefers-reduced-motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animationFrameId = requestAnimationFrame(drawPetals);
    }
  }
});
