const experiences = [
    {
        title: "E-Commerce Platform",
        desc: "Modern shopping experience with responsive design",
        tech: ["React", "Tailwind CSS", "Node.js"],
        icon: "fa-shopping-bag"
    },
    {
        title: "Mobile App Design",
        desc: "User-focused mobile application interface",
        tech: ["Figma", "UI/UX", "Prototyping"],
        icon: "fa-mobile"
    },
    {
        title: "Brand Identity",
        desc: "Complete branding system and guidelines",
        tech: ["Branding", "Typography", "Color Theory"],
        icon: "fa-palette"
    }
];

const experienceGrid = document.getElementById('experience-grid');
experiences.forEach(proj => {
    const techBadges = proj.tech.map(t => 
        `<span class="bg-gray-800 text-red-400 text-xs px-3 py-1 rounded font-semibold">${t}</span>`
    ).join('');

    experienceGrid.innerHTML += `
        <div class="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition duration-300 group">
            <div class="h-48 bg-gray-800 flex items-center justify-center text-red-500 text-4xl group-hover:bg-red-500/10 transition">
                <i class="fa-solid ${proj.icon}"></i>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition">${proj.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-4">${proj.desc}</p>
                <div class="flex flex-wrap gap-2">${techBadges}</div>
            </div>
        </div>
    `;
});

const menuBtn = document.getElementById('menu-btn');
document.addEventListener('click', (e) => {
    if (e.target.closest('#menu-btn')) {
    }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (data.success) {
            alert(`✅ Success! ${data.message}`);
            contactForm.reset();
        } else {
            alert(`⚠️ Error: ${data.message}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("❌ Network Error: Could not connect to server");
    }
});

document.getElementById('current-year').innerText = new Date().getFullYear();
