customElements.define('blog-card',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('blog-card');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
)