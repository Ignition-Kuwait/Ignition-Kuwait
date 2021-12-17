customElements.define('blog-post',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('blog-post');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
)