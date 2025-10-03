document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('config.json');
        if (!response.ok) throw new Error(`Config error: ${response.statusText}`);
        const config = await response.json();

        if (config.scrollAnimation && config.scrollAnimation.status === 'ativado') {
            await initializeScrollAnimation(config.scrollAnimation);
        } else {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('scroll-animation-container').style.display = 'none';
        }

        renderContent(config);
        AOS.init({ duration: 800, once: false });

    } catch (error) {
        console.error("Could not initialize site:", error);
        document.body.innerHTML = `<p style="color:white; text-align:center; padding: 5rem 1rem;">Erro ao carregar as configurações do site. Verifique o arquivo 'config.json' e o console para mais detalhes.</p>`;
    }
});

async function initializeScrollAnimation(animationConfig) {
    const canvas = document.getElementById('hero-canvas');
    const context = canvas.getContext('2d');
    const { frameCount, folder } = animationConfig;
    const images = [];
    const imagePromises = [];

    const getImagePath = (frame) => `${folder}frame (${frame}).jpg`;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const promise = new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
        imagePromises.push(promise);
        img.src = getImagePath(i);
        images.push(img);
    }

    await Promise.all(imagePromises);

    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.style.display = 'none', 500);

    const drawImage = (frameIndex) => {
        const img = images[frameIndex];
        if (!img) return;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        updateImageOnScroll();
    };

    const updateImageOnScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        let frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        );
        if (isNaN(frameIndex)) frameIndex = 0;
        requestAnimationFrame(() => drawImage(frameIndex));
    };

    window.addEventListener('scroll', updateImageOnScroll);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function renderContent(config) {
    document.querySelector('.hero-headline').textContent = config.hero.headline;
    document.querySelector('.hero-subheadline').textContent = config.hero.subheadline;

    renderPersonalInfo(config.personalInfo);
    if (config.services.status === "ativado") renderServices(config.services); else document.getElementById('services').style.display = 'none';
    if (config.videos.status === "ativado") renderVideos(config.videos); else document.getElementById('portfolio').style.display = 'none';
    if (config.testimonials.status === "ativado") renderTestimonials(config.testimonials); else document.getElementById('testimonials').style.display = 'none';
    renderContacts(config.contacts);
    setupFloatButton(config.contacts);
}

function renderPersonalInfo(info) {
    document.querySelector('.footer-name').textContent = info.name;
    const socialContainer = document.querySelector('.social-links-footer');

    const activeLinks = info.socialLinks.filter(link => link.status === "ativado");

    const linksHTML = activeLinks.map(link => {
        const socialName = link.icon.split('fa-')[1] || 'link';
        const accessibleLabel = socialName.charAt(0).toUpperCase() + socialName.slice(1);
        return `<a href="${link.url}" target="_blank" aria-label="Visite nosso perfil no ${accessibleLabel}"><i class="${link.icon}"></i></a>`;
    }).join('');

    socialContainer.innerHTML = linksHTML;
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function renderServices(servicesConfig) {
    document.querySelector('#services .section-title').textContent = servicesConfig.title;
    const servicesGrid = document.getElementById('services-grid');

    const activeServices = servicesConfig.items.filter(item => item.status === "ativado");

    const servicesHTML = activeServices.map((service, index) => `
        <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="icon"><i class="${service.icon}"></i></div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>`
    ).join('');

    servicesGrid.innerHTML = servicesHTML;
}

function renderVideos(videosConfig) {
    document.querySelector('#portfolio .section-title').textContent = videosConfig.title;
    const carouselWrapper = document.querySelector('#video-carousel .swiper-wrapper');
    const modalGrid = document.getElementById('modal-video-grid');

    const activeVideos = videosConfig.items.filter(item => item.status === "ativado");

    // Função auxiliar para gerar o HTML do card (COM A NOVA ESTRUTURA .video-card-inner)
    function videoCardHTML(video) {
        return `
        <div class="video-card">
            <div class="video-card-inner"> 
                <div class="video-embed-container">
                    <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            </div>
        </div>`;
    }

    const allVideosHTML = activeVideos.map(video => videoCardHTML(video)).join('');

    const featuredVideosHTML = activeVideos
        .filter(video => video.featured)
        .map(video => `<div class="swiper-slide">${videoCardHTML(video)}</div>`)
        .join('');

    modalGrid.innerHTML = allVideosHTML;
    carouselWrapper.innerHTML = featuredVideosHTML;

    new Swiper('#video-carousel', {
        loop: activeVideos.filter(v => v.featured).length > 2,
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
        }
    });

    const modal = document.getElementById('gallery-modal');
    const openButton = document.getElementById('view-more-button');
    const closeButton = document.getElementById('close-modal-button');

    openButton.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
}


function renderTestimonials(testimonialsConfig) {
    document.querySelector('#testimonials .section-title').textContent = testimonialsConfig.title;
    const testimonialsGrid = document.getElementById('testimonials-grid');

    const activeTestimonials = testimonialsConfig.items.filter(item => item.status === "ativado");

    const testimonialsHTML = activeTestimonials.map((testimonial, index) => `
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <p class="quote">“${testimonial.quote}”</p>
            <div class="author-info">
                <p class="author">${testimonial.author}</p>
                <p class="company">${testimonial.company}</p>
            </div>
        </div>`
    ).join('');

    testimonialsGrid.innerHTML = testimonialsHTML;
}

function renderContacts(contacts) {
    const contactList = document.getElementById('contact-list');

    const activeContacts = contacts.filter(item => item.status === "ativado");

    const contactsHTML = activeContacts.map(contact => {
        let href = contact.type === 'email' ? `mailto:${contact.value}` : `https://wa.me/${contact.value.replace(/\D/g, '')}`;
        return `<a href="${href}" target="_blank" class="contact-item">${contact.display}</a>`;
    }).join('');

    contactList.innerHTML = contactsHTML;
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