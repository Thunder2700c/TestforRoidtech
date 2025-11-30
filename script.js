// --- 1. DATA ARRAY (The only part your friend would ever need to touch) ---

const featuredVideos = [
    {
        title: "One UI 6.1 on S23 FE: Is it worth updating? (Full Review)",
        embedId: "YOUTUBE_EMBED_ID_1", // REPLACE with the actual YouTube embed ID
        description: "A comprehensive look at performance, features, and battery life after the major update."
    },
    {
        title: "10 Hidden Settings You Must Change on Your Galaxy S23 FE",
        embedId: "YOUTUBE_EMBED_ID_2", // REPLACE with the actual YouTube embed ID
        description: "Optimization secrets to boost speed and customize your phone like a pro."
    },
    {
        title: "Full Good Lock Tutorial: Master Your One UI Customization",
        embedId: "YOUTUBE_EMBED_ID_3", // REPLACE with the actual YouTube embed ID
        description: "How to download, install, and use every Good Lock module available."
    },
    // Add more videos here if needed. The grid will auto-adjust.
];


// --- 2. DYNAMIC CONTENT INJECTION (Zero maintenance for your friend) ---

function renderVideos() {
    const container = document.getElementById('video-container');
    container.innerHTML = featuredVideos.map(video => `
        <div class="video-item anim-card">
            <div class="video-embed">
                <iframe 
                    src="https://www.youtube.com/embed/${video.embedId}?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        </div>
    `).join('');
}

renderVideos(); // Run the function on page load


// --- 3. GSAP ANIMATIONS (The one-time polish) ---

gsap.registerPlugin(ScrollTrigger);

// --- A. HERO SECTION ANIMATION (Initial Load) ---
// This timeline runs once when the page loads
const heroTL = gsap.timeline();

// Staggered text reveal for the main heading
heroTL.from(".hero-heading span", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2
})
// Fade in the subtitle and CTA button
.from(".anim-el", {
    duration: 0.5,
    opacity: 0,
    y: 20,
    ease: "power2.out"
}, "-=0.4"); // Starts slightly before the previous step ends


// --- B. SCROLL-BASED CARD ANIMATION (Featured Guides & Videos) ---
// Use a generic class '.anim-card' and '.anim-el' for elements to animate on scroll

document.querySelectorAll('.anim-card, .anim-el:not(.cta-button)').forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%", // Start animation when the element is 90% down the viewport
            toggleActions: "play none none none", // Play once
        }
    });
});
