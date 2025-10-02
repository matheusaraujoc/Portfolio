// --- SUA LISTA DE VÍDEOS ---
// Para adicionar um novo vídeo, basta copiar o bloco entre {} e colar,
// alterando as informações.

const videos = [
    {
        id: 'dQw4w9WgXcQ', // << COLOQUE AQUI O ID DO VÍDEO DO YOUTUBE
        title: 'Exemplo de Vídeo 1: Comercial de Carro',
        description: 'Edição e color grading para um comercial de carro fictício, focado em uma estética cinematográfica e dinâmica.'
    },
    {
        id: '3g34gSmTc3A', // << COLOQUE AQUI O ID DO VÍDEO DO YOUTUBE
        title: 'Exemplo de Vídeo 2: Mini-Documentário',
        description: 'Um curta documental sobre a vida de um artesão local. A edição buscou um ritmo mais contemplativo e emocional.'
    },
    {
        id: 'jfKfPfyJRdk', // << COLOQUE AQUI O ID DO VÍDEO DO YOUTUBE
        title: 'Exemplo de Vídeo 3: Animação de Logo',
        description: 'Criação de uma animação de logo (motion graphics) para uma startup de tecnologia, utilizando After Effects.'
    },
    // --- ADICIONE SEU PRÓXIMO VÍDEO AQUI ---
    // {
    //     id: 'ID_DO_SEU_VIDEO',
    //     title: 'Título do Seu Vídeo',
    //     description: 'Descrição detalhada do trabalho que você fez neste vídeo.'
    // },
];

// --- O CÓDIGO ABAIXO GERA O SITE. NÃO PRECISA ALTERAR. ---

document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    videos.forEach(video => {
        const videoCard = `
            <div class="video-card">
                <div class="video-embed">
                    <iframe 
                        src="https://www.youtube.com/embed/${video.id}" 
                        title="${video.title}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
            </div>
        `;
        videoGrid.innerHTML += videoCard;
    });
});