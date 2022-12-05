class TypoComp extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <div class="flex flex-col items-center w-full">
        <h1 class="h1 h1-400">H1 400</h1>
        <h1 class="h1 h1-700">H1 700</h1>
        <h2 class="h2 h2-400">H2 400</h2>
        <h2 class="h2 h2-700">H2 700</h2>
        <h3 class="h3 h3-400">H3 400</h3>
        <h3 class="h3 h3-700">H3 700</h3>
        <h4 class="h4 h4-400">H4 400</h4>
        <h4 class="h4 h4-700">H4 700</h4>
        <h5 class="h5 h5-400">H5 400</h4>
        <h5 class="h5 h5-700">H5 700</h5>
        <h6 class="h6 h6-400">H6 400</h6>
        <h6 class="h6 h6-700">H6 700</h6>
        <p class="400">400</p>
        <p class="500">500</p>
        <p class="600">600</p>
        <p class="700">700</p>
        </div>
        `;
  }
}

window.customElements.define("typo-comp", TypoComp);
