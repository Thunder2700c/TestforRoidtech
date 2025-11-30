// --- 1. DATA ARRAY: UPDATED WITH YOUR VIDEO IDs ---

const featuredVideos = [
    {
        // Corresponds to the ID '30'
        title: "How to Get iOS 26 Style Transparent Dock on Android | Samsung",
        embedId: "30", 
        description: "Replicating the new iOS look on One UI—transparent dock, widgets, and more."
    },
    {
        // Corresponds to the ID '29'
        title: "One UI 8.5 vs One UI 8.0: Call Screen & Animations Comparison",
        embedId: "29", 
        description: "A side-by-side look at the new animation speed and call screen interface in the latest beta."
    },
    {
        // Corresponds to the ID '40'
        title: "Samsung Official AppLock App is Here (One UI 8.5 Feature)",
        embedId: "40", 
        description: "Finally, a native app lock. How to enable it and its impact on performance."
    },
];


// --- 2. DYNAMIC CONTENT INJECTION (Uses the standard embed URL to fix the refusal error) ---

function renderVideos() {
    const container = document.getElementById('video-container');
    container.innerHTML = featuredVideos.map(video => `
        <div class="video-item glass-effect anim-card">
            <div class="video-embed">
                <iframe 
                    // This is the correct, standard YouTube embed URL format.
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


// --- 3. GSAP ANIMATIONS (No changes needed, the logic is sound) ---

gsap.registerPlugin(ScrollTrigger);

const heroTL = gsap.timeline();

heroTL.from(".hero-heading span", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.15
})
.from(".anim-el", {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: "power2.out"
}, "-=0.3"); 

document.querySelectorAll('.anim-card, .anim-el:not(.cta-button)').forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
});
