class TokenHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="flex flex-col items-center">
        <img src="assets/headway.png" alt="Make Waves" />
        <h4 class="h4 h4-400 text-type-black-secondary">Shipwright Tokens - Web Components / Tailwind CSS </h4>
        </div
        `;
  }
}

window.customElements.define("token-header", TokenHeader);
