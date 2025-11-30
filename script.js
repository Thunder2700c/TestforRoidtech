const featuredVideos = [
  { title: "🔥 Enable Depth Effect Clock on Samsung Lock Screen | FREE", embedId: "-co1VuiDGCE", desc: "iOS-style Depth Effect clock on any Galaxy." },
  { title: "Samsung S23/23FE/S23 Ultra November Update Review", embedId: "JRAHwreGlA0", desc: "Battery, heat & camera changes." },
  { title: "Samsung Official AppLock App is Here 🔒", embedId: "F01QJDYIN-c", desc: "Official AppLock finally released!" }
];

function renderVideos() {
  document.getElementById('video-container').innerHTML = featuredVideos.map(v => `
    <div class="video-item glass-effect anim-card">
      <div class="video-embed"><iframe 
        src="https://www.youtube.com/embed/${v.embedId}?rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>
      <div class="video-info">
          <h4>${v.title}</h4>
          <p>${v.desc}</p>
      </div>
    </div>
  `).join('');
}
renderVideos();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero text
gsap.from(".hero-heading span", { y: 120, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
gsap.from(".anim-el", { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: "power2.out" });

// Cards
document.querySelectorAll('.anim-card, .section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
  });
});

// 3D Phone – Epic scroll magic
gsap.to("#s23fe-model", {
  yPercent: -200,
  xPercent: 100,
  rotationY: 720,
  rotationX: 120,
  scale: 0.4,
  opacity: 0,
  ease: "none",
  scrollTrigger: { trigger: "#hero", start: "top top", end: "+=180%", scrub: 1.2 }
});

// Gentle idle float
gsap.to("#s23fe-model", {
  y: "+=20", rotationY: "+=15", rotationX: "-=10",
  duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut"
});
