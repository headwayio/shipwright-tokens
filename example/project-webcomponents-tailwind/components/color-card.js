const template = document.createElement("template");
template.innerHTML = `
<style>@import "assets/output.css";</style>
<div class="flex flex-col items-center m-2">
    <p></p>
        <span></span>
</div>
`;

class ColorCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("title");
    this.shadowRoot
      .querySelector("span")
      .setAttribute("class", `w-32 h-32 ${this.getAttribute("color")}`);
  }
}

window.customElements.define("color-card", ColorCard);
