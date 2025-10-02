// =======================================================
//  ARQUIVO DO "MOTOR" DO SITE
//  NÃO É NECESSÁRIO EDITAR AQUI
//  Toda a configuração é feita no arquivo `config.json`
// =======================================================

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Busca os dados do arquivo de configuração
        const response = await fetch('config.json');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o arquivo de configuração: ${response.statusText}`);
        }
        const config = await response.json();

        // 2. Chama as funções para construir cada parte do site
        renderPersonalInfo(config.personalInfo);
        renderVideos(config.videos);
        renderContacts(config.contacts);

    } catch (error) {
        console.error("Não foi possível inicializar o site:", error);
        document.body.innerHTML = `<p style="color:white; text-align:center; padding-top: 50px;">Erro ao carregar as configurações do site. Verifique o console para mais detalhes.</p>`;
    }
});

function renderPersonalInfo(info) {
    document.querySelector('.hero-title').textContent = info.name;
    document.querySelector('.hero-subtitle').textContent = info.subtitle;

    const socialLinksContainer = document.querySelector('.social-links');
    socialLinksContainer.innerHTML = ''; // Limpa os links existentes
    info.socialLinks.forEach(link => {
        socialLinksContainer.innerHTML += `<a href="${link.url}" target="_blank" title="${link.icon}"><i class="${link.icon}"></i></a>`;
    });
}

function renderVideos(videos) {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';
    videos.forEach(video => {
        videoGrid.innerHTML += `
            <div class="video-card">
                <div class="video-embed-container">
                    <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            </div>
        `;
    });
}

function renderContacts(contacts) {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        let iconClass = '';
        let href = contact.value;

        switch (contact.type) {
            case 'email':
                iconClass = 'fas fa-envelope';
                href = `mailto:${contact.value}`;
                break;
            case 'whatsapp':
                iconClass = 'fab fa-whatsapp';
                href = `https://wa.me/${contact.value.replace(/\D/g, '')}`; // Garante que só números sejam usados no link
                break;
            case 'linkedin':
                iconClass = 'fab fa-linkedin';
                break;
            case 'github':
                iconClass = 'fab fa-github';
                break;
            case 'instagram':
                iconClass = 'fab fa-instagram';
                break;
            default:
                iconClass = 'fas fa-link';
        }

        contactList.innerHTML += `
            <a href="${href}" target="_blank" class="contact-item">
                <i class="${iconClass}"></i>
                <span>${contact.display}</span>
            </a>
        `;
    });
}