const container = document
  .createElement("container")
  .setAttribute("id", "color-container");
container.innerHTML = `
<style>@import "assets/output.css";</style>
<div class="flex flex-col items-center">
    <h5 class="h5 h5-400"></h5>
        <div class="flex flex-row items-center flex-wrap">
                <slot />
        </div>
</div>
`;

class ColorContainer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(container.content.cloneNode(true));
    this.shadowRoot.querySelector("h5").innerText = this.getAttribute("title");
  }
}

window.customElements.define("color-container", ColorContainer);
