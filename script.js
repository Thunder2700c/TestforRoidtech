// --- 1. DATA ARRAY: Video 1 is FIXED. Fill in the others. ---

const featuredVideos = [
    {
        // THIS VIDEO IS NOW CORRECT AND WILL LOAD:
        title: "🔥 Enable Depth Effect Clock on Samsung Lock Screen | FREEE",
        embedId: "-co1VuiDGCE", // <- THIS IS THE CORRECT, WORKING ID
        description: "A quick guide on how to get the awesome iOS-style Depth Effect clock on your Samsung Galaxy phone (Source: RoidTech)."
    },
    {
        // YOU MUST REPLACE THIS PLACEHOLDER ID:
        title: "Samsung S23/23fe S23 Ultra November Update Review",
        embedId: "JRAHwreGlA0", 
        description: "A side-by-side look at the new animation speed and call screen interface in the latest beta."
    },
    {
        // YOU MUST REPLACE THIS PLACEHOLDER ID:
        title: "Samsung Official AppLock App is Here (One UI 8.5 Feature)",
        embedId: "YOUR_THIRD_VIDEO_ID", 
        description: "Finally, a native app lock. How to enable it and its impact on performance."
    },
];


// --- 2. DYNAMIC CONTENT INJECTION (DO NOT CHANGE) ---

function renderVideos() {
    const container = document.getElementById('video-container');
    container.innerHTML = featuredVideos.map(video => `
        <div class="video-item glass-effect anim-card">
            <div class="video-embed">
                <iframe 
                    // This now uses the correct IDs:
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

renderVideos(); 
// [GSAP ANIMATIONS BELOW THIS LINE REMAIN UNCHANGED]
