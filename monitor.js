// =======================================================
//  MOTOR DO SITE - Versão com Status Ativado/Desativado
// =======================================================

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('config.json');
        if (!response.ok) throw new Error(`Erro ao carregar config: ${response.statusText}`);
        const config = await response.json();

        // Renderiza as seções DO SITE, verificando o status de cada uma
        renderHero(config.hero);
        renderPersonalInfo(config.personalInfo);

        if (config.services.status === "ativado") {
            renderServices(config.services);
        } else {
            document.getElementById('services').style.display = 'none';
        }

        if (config.videos.status === "ativado") {
            renderVideos(config.videos);
        } else {
            document.getElementById('portfolio').style.display = 'none';
        }

        if (config.testimonials.status === "ativado") {
            renderTestimonials(config.testimonials);
        } else {
            document.getElementById('testimonials').style.display = 'none';
        }

        renderContacts(config.contacts);
        setupFloatButton(config.contacts);

        AOS.init({ duration: 800, once: true });

    } catch (error) {
        console.error("Não foi possível inicializar o site:", error);
    }
});

function renderHero(hero) {
    document.getElementById('hero-video').src = hero.backgroundVideo;
    document.querySelector('.hero-headline').textContent = hero.headline;
    document.querySelector('.hero-subheadline').textContent = hero.subheadline;
}

function renderPersonalInfo(info) {
    document.querySelector('.footer-name').textContent = info.name;
    const socialContainer = document.querySelector('.social-links-footer');
    socialContainer.innerHTML = '';

    info.socialLinks.filter(link => link.status === "ativado").forEach(link => {
        const socialName = link.icon.split('fa-')[1];
        const accessibleLabel = socialName.charAt(0).toUpperCase() + socialName.slice(1);
        socialContainer.innerHTML += `<a href="${link.url}" target="_blank" aria-label="Visite nosso perfil no ${accessibleLabel}"><i class="${link.icon}"></i></a>`;
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function renderServices(servicesConfig) {
    document.querySelector('#services .section-title').textContent = servicesConfig.title;
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = '';

    servicesConfig.items.filter(item => item.status === "ativado").forEach((service, index) => {
        servicesGrid.innerHTML += `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="icon"><i class="${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>`;
    });
}

function renderVideos(videosConfig) {
    document.querySelector('#portfolio .section-title').textContent = videosConfig.title;
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';

    videosConfig.items.filter(item => item.status === "ativado").forEach((video, index) => {
        videoGrid.innerHTML += `
            <div class="video-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="video-embed-container">
                    <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            </div>`;
    });
}

function renderTestimonials(testimonialsConfig) {
    document.querySelector('#testimonials .section-title').textContent = testimonialsConfig.title;
    const testimonialsGrid = document.getElementById('testimonials-grid');
    testimonialsGrid.innerHTML = '';

    testimonialsConfig.items.filter(item => item.status === "ativado").forEach((testimonial, index) => {
        testimonialsGrid.innerHTML += `
            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <p class="quote">“${testimonial.quote}”</p>
                <div class="author-info">
                    <p class="author">${testimonial.author}</p>
                    <p class="company">${testimonial.company}</p>
                </div>
            </div>`;
    });
}

function renderContacts(contacts) {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    contacts.filter(item => item.status === "ativado").forEach(contact => {
        let href = contact.type === 'email' ? `mailto:${contact.value}` : `https://wa.me/${contact.value.replace(/\D/g, '')}`;
        contactList.innerHTML += `<a href="${href}" target="_blank" class="contact-item">${contact.display}</a>`;
    });
}

function setupFloatButton(contacts) {
    const whatsappContact = contacts.find(c => c.type === 'whatsapp' && c.status === "ativado");
    const floatButton = document.getElementById('whatsapp-float-button');
    if (whatsappContact && floatButton) {
        floatButton.href = `https://wa.me/${whatsappContact.value.replace(/\D/g, '')}`;
        floatButton.style.display = 'flex';
    } else if (floatButton) {
        floatButton.style.display = 'none';
    }
}