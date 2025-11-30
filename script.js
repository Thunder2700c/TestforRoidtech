// --- 1. DATA ARRAY (Update the titles and placeholder IDs) ---

const featuredVideos = [
    {
        // Video based on user's theme request
        title: "How to Get iOS 26 Style Transparent Dock on Android | Samsung",
        embedId: "YOUTUBE_EMBED_ID_1", // <<< INSERT ACTUAL YOUTUBE ID HERE
        description: "Replicating the new iOS look on One UI—transparent dock, widgets, and more."
    },
    {
        // Video based on RoidTech's channel content
        title: "One UI 8.5 vs One UI 8.0: Call Screen & Animations Comparison",
        embedId: "YOUTUBE_EMBED_ID_2", // <<< INSERT ACTUAL YOUTUBE ID HERE
        description: "A side-by-side look at the new animation speed and call screen interface in the latest beta."
    },
    {
        // Video based on RoidTech's channel content
        title: "Samsung Official AppLock App is Here (One UI 8.5 Feature)",
        embedId: "YOUTUBE_EMBED_ID_3", // <<< INSERT ACTUAL YOUTUBE ID HERE
        description: "Finally, a native app lock. How to enable it and its impact on performance."
    },
];


// --- 2. DYNAMIC CONTENT INJECTION (Zero maintenance for your friend) ---

function renderVideos() {
    const container = document.getElementById('video-container');
    container.innerHTML = featuredVideos.map(video => `
        <div class="video-item glass-effect anim-card">
            <div class="video-embed">
                <iframe 
                    src="https://www.youtube.com/watch?v=jgfeD1Qquyc4${video.embedId}?rel=0" 
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
const heroTL = gsap.timeline();

// Staggered text reveal for the main heading (Fast and dramatic)
heroTL.from(".hero-heading span", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.15
})
// Fade in the subtitle and CTA button
.from(".anim-el", {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: "power2.out"
}, "-=0.3"); // Overlap the animations for a fluid start


// --- B. SCROLL-BASED CARD ANIMATION (Featured Guides & Videos) ---
document.querySelectorAll('.anim-card, .anim-el:not(.cta-button)').forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 30, // Subtle vertical movement
        scale: 0.98, // Slight scale for a modern pop
        duration: 0.8,
        ease: "power3.out", // Smoother easing
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
});
