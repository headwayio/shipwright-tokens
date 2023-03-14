export default {
  title: "Tokens/Colors",
};

export const Palette = () => `
<div class="flex flex-col items-center w-3/4 pb-3 mb-5 border-b-2">
<h4 class="mb-3 h4 h4-700 text-type-black-secondary">Colors</h4>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Primary</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-primary-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-primary-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-primary-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Secondary</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-secondary-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-secondary-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-secondary-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Grey</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-grey-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-grey-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-grey-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Warning</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-warning-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-warning-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-warning-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Info</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-info-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-info-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-info-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Success</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-success-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-success-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-success-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Error</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Main:</p>
      <div class="w-32 h-32 bg-error-main"></div>
    </div>
    <div>
      <p>Dark:</p>
      <div class="w-32 h-32 bg-error-dark"></div>
    </div>
    <div>
      <p>Light:</p>
      <div class="w-32 h-32 bg-error-light"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Button</h5>
  <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
    <div>
      <p>Active:</p>
      <div class="w-32 h-32 bg-button-active"></div>
    </div>
    <div>
      <p>Hover:</p>
      <div class="w-32 h-32 bg-button-hover"></div>
    </div>
    <div>
      <p>Selected:</p>
      <div class="w-32 h-32 bg-button-selected"></div>
    </div>
    <div>
      <p>Deactivated:</p>
      <div class="w-32 h-32 bg-button-deactivated"></div>
    </div>
    <div>
      <p>Deactivated Background:</p>
      <div class="w-32 h-32 bg-button-deactivatedBackground"></div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Type</h5>
  <div class="flex flex-col flex-wrap items-center justify-center pb-3 mt-1 space-x-2">
    <h6 class="h6 h6-400">Black</h6>
    <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
      <div>
        <p>Primary:</p>
        <div class="w-32 h-32 bg-type-black-primary"></div>
      </div>
      <div>
        <p>Secondary:</p>
        <div class="w-32 h-32 bg-type-black-secondary"></div>
      </div>
      <div>
        <p>Tertiary:</p>
        <div class="w-32 h-32 bg-type-black-tertairy"></div>
      </div>
      <div>
        <p>Deactivated:</p>
        <div class="w-32 h-32 bg-type-black-deactivated"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col flex-wrap items-center justify-center pb-3 space-x-2">
    <h6 class="h6 h6-400">White</h6>
    <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
      <div>
        <p>Primary:</p>
        <div class="w-32 h-32 bg-type-white-primary"></div>
      </div>
      <div>
        <p>Secondary:</p>
        <div class="w-32 h-32 bg-type-white-secondary"></div>
      </div>
      <div>
        <p>Tertiary:</p>
        <div class="w-32 h-32 bg-type-white-tertiary"></div>
      </div>
      <div>
        <p>Deactivated:</p>
        <div class="w-32 h-32 bg-type-white-deactivated"></div>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col items-center mb-3">
  <h5 class="h5 h5-400">Background</h5>
  <div class="flex flex-col flex-wrap items-center justify-center pb-3 mt-1 space-x-2">
    <h6 class="h6 h6-400">Black</h6>
    <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
      <div>
        <p>Base:</p>
        <div class="w-32 h-32 bg-background-black-base"></div>
      </div>
      <div>
        <p>Primary:</p>
        <div class="w-32 h-32 bg-background-black-primary"></div>
      </div>
      <div>
        <p>Secondary:</p>
        <div class="w-32 h-32 bg-background-black-secondary"></div>
      </div>
      <div>
        <p>Line:</p>
        <div class="w-32 h-32 bg-background-black-line"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col flex-wrap items-center justify-center pb-3 space-x-2">
    <h6 class="h6 h6-400">White</h6>
    <div class="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
      <div>
        <p>Base:</p>
        <div class="w-32 h-32 bg-background-white-base"></div>
      </div>
      <div>
        <p>Primary:</p>
        <div class="w-32 h-32 bg-background-white-primary"></div>
      </div>
      <div>
        <p>Secondary:</p>
        <div class="w-32 h-32 bg-background-white-secondary"></div>
      </div>
      <div>
        <p>Line:</p>
        <div class="w-32 h-32 bg-background-white-line"></div>
      </div>
    </div>
  </div>
</div>
</div>
`;
