# Portfolio de Edição de Vídeos

Um template de site de portfólio moderno, responsivo e minimalista, projetado para editores de vídeo, motion designers e criadores de conteúdo. O principal diferencial deste projeto é a facilidade de atualização: todo o conteúdo do site é gerenciado através de um único arquivo de configuração (`config.json`), sem a necessidade de tocar em código HTML ou JavaScript.

**[➡️ Clique aqui para ver o site ao vivo](https://www.google.com/search?q=https://SEU-USUARIO.github.io/SEU-REPOSITORIO/)**
*(Lembre-se de substituir com o link do seu site publicado\!)*

-----

*(Dica: Tire uma captura de tela do seu site finalizado, adicione o arquivo de imagem ao seu repositório do GitHub e substitua o texto acima pelo link da imagem.)*

## ✨ Funcionalidades

  * 🎨 **Design Moderno e Responsivo**: Visual atraente que se adapta perfeitamente a desktops, tablets e celulares.
  * 🚀 **Rápido e Otimizado**: Construído com tecnologias web essenciais (HTML, CSS, JS), garantindo um carregamento rápido.
  * 🔧 **Gerenciamento Centralizado**: Todas as informações (dados pessoais, vídeos, contatos) são controladas a partir de um único arquivo `config.json`.
  * 🎬 **Exibição Dinâmica de Vídeos**: Adicione, edite ou remova vídeos do seu portfólio apenas editando a lista de configuração.
  * 📞 **Seção de Contatos Dinâmica**: Ative ou desative métodos de contato (Email, WhatsApp, LinkedIn, etc.) de forma simples e intuitiva.
  * 🌐 **Pronto para Deploy**: O projeto está configurado para ser publicado gratuitamente com o GitHub Pages.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

## ⚙️ Como Configurar e Personalizar

> **A Regra de Ouro:** Toda a personalização do site é feita em um único arquivo: `config.json`. Abra este arquivo para começar.

### 1\. Informações Pessoais e Links Sociais

No topo do `config.json`, você encontrará o bloco `personalInfo`.

```json
"personalInfo": {
  "name": "Seu Nome Completo",
  "subtitle": "Editor de Vídeos | Motion Designer | Storyteller Visual",
  "socialLinks": [
    {
      "icon": "fab fa-instagram",
      "url": "https://instagram.com/seu-usuario"
    },
    {
      "icon": "fab fa-linkedin",
      "url": "https://linkedin.com/in/seu-usuario"
    }
  ]
}
```

  * **Para alterar seu nome e subtítulo:** Simplesmente edite o texto dentro das aspas `""`.
  * **Para alterar os links sociais:** Edite a `url`.
  * **Para adicionar um novo link social:** Copie um bloco `{...}`, cole-o no final da lista `socialLinks` (lembre-se da vírgula) e altere o `icon` e a `url`. Você pode encontrar os nomes dos ícones no site do [Font Awesome](https://fontawesome.com/icons).

### 2\. Gerenciando os Vídeos

Encontre a lista `"videos": [ ... ]` no arquivo de configuração.

```json
"videos": [
  {
    "id": "dQw4w9WgXcQ",
    "title": "Comercial Cinematográfico de Carro",
    "description": "Edição, color grading e sound design para um comercial..."
  }
]
```

  * **Para Adicionar um Vídeo:**

    1.  Copie um bloco de vídeo existente (de `{` a `}`).
    2.  Cole o bloco no final da lista, garantindo que haja uma vírgula `,` após o bloco anterior.
    3.  Altere os valores de `id` (o código do vídeo no YouTube), `title` e `description` do novo bloco.

  * **Para Editar um Vídeo:**

      * Encontre o vídeo que deseja alterar e simplesmente edite o texto de seu `title` ou `description`.

  * **Para Remover (Desativar) um Vídeo:**

      * Encontre o bloco do vídeo e apague-o completamente (de `{` a `}`). Cuidado para remover também a vírgula do item anterior, caso o item apagado não seja o último da lista.

### 3\. Gerenciando os Contatos

Encontre a lista `"contacts": [ ... ]` no arquivo de configuração.

```json
"contacts": [
  {
    "type": "email",
    "value": "seu-email@provedor.com",
    "display": "seu-email@provedor.com"
  },
  {
    "type": "whatsapp",
    "value": "+5511999999999",
    "display": "(11) 99999-9999"
  }
]
```

  * **Para Adicionar um Contato:**

      * Siga os mesmos passos para adicionar um vídeo: copie um bloco, cole no final da lista, adicione a vírgula e edite as informações.
      * `"type"`: Define o ícone. Opções disponíveis: `email`, `whatsapp`, `linkedin`, `github`, `instagram`.
      * `"value"`: O dado real (seu e-mail, seu número com código do país, o link completo).
      * `"display"`: O texto que aparecerá no botão.

  * **Para Remover (Desativar) um Contato:**

      * Simplesmente apague o bloco correspondente da lista. O site não irá mais exibir essa opção de contato.

### ⚠️ Pontos de Atenção (Evitando Erros)

> **Atenção à Vírgula:** Em uma lista, todos os itens (blocos `{...}`) devem ter uma vírgula após eles, **exceto o último**. Um erro de vírgula é a causa mais comum de quebra do site.

> **Cuidado com as Aspas:** Todo texto (chaves e valores) deve estar entre aspas duplas `""`.

Se o site ficar em branco após uma alteração, provavelmente há um erro de sintaxe no `config.json`. Você pode usar um [Validador de JSON online](https://jsonlint.com/) para encontrar o erro facilmente.

## 🚀 Publicação (Deploy)

Este projeto está pronto para ser publicado gratuitamente com o **GitHub Pages**.

1.  Envie todos os arquivos do projeto (`index.html`, `style.css`, `monitor.js`, `config.json`) para um novo repositório no seu GitHub.
2.  No seu repositório, vá em **Settings \> Pages**.
3.  Na seção "Build and deployment", em "Source", selecione **"Deploy from a branch"**.
4.  Selecione a branch `main` (ou `master`) e a pasta `/ (root)`. Clique em **"Save"**.
5.  Aguarde alguns minutos e seu site estará no ar\!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

-----

## 👨‍💻 Autor

Feito por **[Matheus Araújo](https://github.com/matheusaraujoc)**