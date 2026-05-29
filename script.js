const projects = [
    {
        title: "Responsive Interface Architecture",
        desc: "A framework compilation mapping semantic sections with modern flexbox structures and smooth system scroll hooks.",
        tech: ["HTML5", "Tailwind CSS", "JavaScript"],
        icon: "fa-laptop-code"
    },
    {
        title: "Relational Database Subsystem",
        desc: "Structured data storage layout designed with complex schema queries to handle transactional tracking requests.",
        tech: ["SQL Integration", "Schema Design"],
        icon: "fa-database"
    },
    {
        title: "Interface Prototyping Module",
        desc: "Comprehensive blueprint charting functional user behaviors, components, and layout hierarchies.",
        tech: ["Figma Layouts", "UI Components"],
        icon: "fa-cubes"
    }
];

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(proj => {
    const techBadges = proj.tech.map(t => 
        `<span class="bg-slate-900 text-sky-400 text-xs px-3 py-1 rounded-md font-semibold border border-slate-800">${t}</span>`
    ).join('');

    projectsGrid.innerHTML += `
        <div class="bg-cardBg rounded-2xl border border-slate-800/80 overflow-hidden hover:border-slate-700 hover:-translate-y-1 transition duration-300 flex flex-col justify-between group">
            <div class="p-6 space-y-4">
                <div class="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-accentNeon text-xl group-hover:scale-110 transition duration-300">
                    <i class="fa-solid ${proj.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-accentNeon transition">${proj.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">${proj.desc}</p>
            </div>
            <div class="p-6 pt-0 flex flex-wrap gap-2">${techBadges}</div>
        </div>
    `;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
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
            alert(`SUCCESS: ${data.message}`);
            contactForm.reset(); 
        } else {
            alert(`SERVER CORRUPTION REJECT: ${data.message}`);
        }
    } catch (error) {
        console.error("Transmission Exception Fail Link:", error);
        alert("Network Error: Could not connect to the backend server framework.");
    }
});

document.getElementById('current-year').innerText = new Date().getFullYear();