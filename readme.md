# Portfólio de Edição de Vídeos

Um template de site moderno, responsivo e dinâmico, projetado para editores de vídeo, motion designers e criadores de conteúdo. O principal diferencial deste projeto é a facilidade de atualização: todo o conteúdo, desde textos e vídeos até a ativação de seções inteiras, é gerenciado através de um único arquivo de configuração (`config.json`), sem a necessidade de tocar em código HTML, CSS ou JavaScript.

**[➡️ Ver Demo ao Vivo](https://www.google.com/search?q=https://SEU-USUARIO-GITHUB.github.io/SEU-REPOSITORIO/)**
*(Lembre-se de substituir pelo link do seu site publicado\!)*

*(Dica: Tire uma captura de tela do seu site, adicione ao repositório e substitua o link acima para exibir uma prévia aqui.)*

## ✨ Funcionalidades

  * 🎨 **Design Moderno e Imersivo**: Visual atraente que se adapta perfeitamente a desktops, tablets e celulares.
  * 🎬 **Animação de Scroll Interativa**: Uma sequência de imagens que cria um efeito de vídeo conforme o usuário rola a página, com fallback para conexões lentas.
  * 🔧 **Gerenciamento 100% Centralizado**: Todas as informações (textos, vídeos, serviços, contatos, links sociais) são controladas a partir de um único arquivo `config.json`.
  * 🚀 **Otimizado para Performance**: Construído com tecnologias web essenciais e bibliotecas leves, garantindo um carregamento rápido e uma experiência fluida.
  * modular **Conteúdo Modular**: Ative ou desative seções inteiras do site (Serviços, Depoimentos, etc.) com uma única chave no arquivo de configuração.
  * 🌐 **Pronto para Deploy**: O projeto está configurado para ser publicado gratuitamente com o GitHub Pages em poucos minutos.

## 📁 Estrutura do Projeto

```
/
├── 📂 assets/
│   └── 📂 scroll-sequence/
│       ├── frame (1).jpg
│       ├── frame (2).jpg
│       └── ... (suas imagens da animação)
├── 📄 config.json         <-- ✨ VOCÊ EDITA APENAS AQUI
├── 📄 index.html          <-- Estrutura principal
├── 📄 monitor.js          <-- Lógica que lê o config.json
└── 📄 style.css           <-- Estilos visuais
```

## 🛠️ Tecnologias Utilizadas

  * **HTML5** e **CSS3** para estrutura e estilo.
  * **JavaScript (Vanilla)** para a lógica dinâmica e interatividade.
  * **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)**: Para as animações de surgimento dos elementos.
  * **[Swiper.js](https://swiperjs.com/)**: Para o carrossel de vídeos em destaque.
  * **[Font Awesome](https://fontawesome.com/)**: Para os ícones.

## ⚙️ Como Configurar e Personalizar

> **A Regra de Ouro:** Toda a personalização do conteúdo do site é feita em um único arquivo: `config.json`. Abra este arquivo para começar.

### 1\. Animação de Scroll (Background)

Esta é a primeira seção do `config.json`. Ela controla a animação de imagens que acontece no início do site.

```json
"scrollAnimation": {
    "status": "ativado",
    "frameCount": 120,
    "folder": "assets/scroll-sequence/"
}
```

  * `"status"`: Mude para `"desativado"` se quiser remover a animação e ter um fundo simples.
  * `"frameCount"`: O **número total de imagens** que sua animação possui.
  * `"folder"`: A pasta onde as imagens estão. Para substituir a animação, coloque suas imagens nesta pasta, mantendo o padrão de nome: `frame (1).jpg`, `frame (2).jpg`, `frame (3).jpg`, e assim por diante.

### 2\. Textos Principais (Hero Section)

```json
"hero": {
    "headline": "Transformando Ideias em Vídeos Memoráveis",
    "subheadline": "Edição de vídeo que captura a atenção, conta uma história e gera resultados."
}
```

  * Basta editar os textos entre aspas para alterar os títulos principais do site.

### 3\. Informações Pessoais e Links Sociais (Rodapé)

```json
"personalInfo": {
    "name": "Matheus Araújo",
    "socialLinks": [
        { "icon": "fab fa-instagram", "url": "...", "status": "ativado" },
        { "icon": "fab fa-linkedin", "url": "...", "status": "ativado" }
    ]
}
```

  * `"name"`: Seu nome, que aparecerá no rodapé.
  * `"socialLinks"`: A lista de suas redes sociais. Para desativar uma, mude seu `"status"` para `"desativado"`. Para adicionar uma nova, copie um bloco `{...}`, cole no final da lista (não esqueça a vírgula) e altere o `icon` (veja nomes no [Font Awesome](https://fontawesome.com/icons)) e a `url`.

### 4\. Gerenciando Seções e Conteúdos

#### Serviços ("O Que Eu Faço")

```json
"services": {
    "status": "ativado",
    "title": "O Que Eu Faço",
    "items": [
        { "icon": "fas fa-film", "title": "Edição", "description": "...", "status": "ativado" }
    ]
}
```

  * Para esconder a seção inteira, mude o `"status"` principal para `"desativado"`.
  * Para esconder um item específico da lista, mude o `"status"` daquele item para `"desativado"`.

#### Vídeos (Portfólio)

```json
"videos": {
    "status": "ativado",
    "title": "Projetos Recentes",
    "items": [
        {
            "id": "dQw4w9WgXcQ",
            "title": "Comercial Cinematográfico",
            "description": "Projeto para a marca X.",
            "status": "ativado",
            "featured": true
        }
    ]
}
```

  * `"status"`: Use `"desativado"` para esconder a seção de portfólio inteira.
  * `"id"`: O código do vídeo do YouTube. Ex: na URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, o ID é `dQw4w9WgXcQ`.
  * `"featured"`: Mude para `true` se quiser que o vídeo apareça no carrossel principal da página. `false` fará com que ele apareça apenas na galeria "Ver Todos os Projetos".

#### Depoimentos e Contatos

O funcionamento é o mesmo das outras seções, usando `"status": "ativado"` ou `"desativado"` para controlar a visibilidade da seção inteira ou de itens individuais.

### ⚠️ Pontos de Atenção (Evitando Erros)

> **Atenção à Vírgula:** Dentro de uma lista `[ ... ]`, todos os blocos `{...}` devem ter uma vírgula no final, **exceto o último**. Um erro de vírgula é a causa mais comum de quebra do site.
>
> **Cuidado com as Aspas:** Todo texto, tanto as chaves (`"title"`) quanto os valores (`"Meu Título"`), deve estar entre aspas duplas `""`.

Se o site ficar em branco após uma alteração, o `config.json` provavelmente ficou com a sintaxe inválida. Copie e cole todo o conteúdo dele em um **[Validador de JSON online](https://jsonlint.com/)** para encontrar o erro facilmente.

## 💻 Desenvolvimento Local

Para visualizar suas alterações em tempo real enquanto edita os arquivos, recomendamos usar a extensão **Live Server** no **Visual Studio Code**.

1.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.
2.  Abra a pasta do projeto no VS Code.
3.  Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
4.  Seu navegador abrirá o site, e ele será recarregado automaticamente toda vez que você salvar um arquivo.

## 🚀 Publicação (Deploy)

Este projeto está pronto para ser publicado gratuitamente com o **GitHub Pages**.

1.  Envie todos os arquivos do projeto para um novo repositório no seu GitHub.
2.  No seu repositório, vá em **Settings \> Pages**.
3.  Na seção "Build and deployment", em "Source", selecione **"Deploy from a branch"**.
4.  Selecione a branch `main` (ou `master`) e a pasta `/ (root)`. Clique em **"Save"**.
5.  Aguarde alguns minutos. O link do seu site ao vivo aparecerá nessa mesma página.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

-----

## 👨‍💻 Autor

Feito por **[Matheus Araújo](https://github.com/matheusaraujoc)**