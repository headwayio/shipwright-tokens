const Colors = () => {
  return (
    <div className="flex flex-col items-center w-3/4 pb-3 mb-5 border-b-2">
      <p className="mb-3 h4 h4-400 text-type-black-secondary">Colors</p>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Primary</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-primary-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-primary-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-primary-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Secondary</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-secondary-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-secondary-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-secondary-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Grey</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-grey-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-grey-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-grey-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Warning</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-warning-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-warning-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-warning-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Info</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-info-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-info-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-info-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Success</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-success-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-success-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-success-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Error</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Main:</p>
            <div className={`w-32 h-32 bg-error-main`}></div>
          </div>
          <div>
            <p>Dark:</p>
            <div className={`w-32 h-32 bg-error-dark`}></div>
          </div>
          <div>
            <p>Light:</p>
            <div className={`w-32 h-32 bg-error-light`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Button</p>
        <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
          <div>
            <p>Active:</p>
            <div className={`w-32 h-32 bg-button-active`}></div>
          </div>
          <div>
            <p>Hover:</p>
            <div className={`w-32 h-32 bg-button-hover`}></div>
          </div>
          <div>
            <p>Selected:</p>
            <div className={`w-32 h-32 bg-button-selected`}></div>
          </div>
          <div>
            <p>Deactivated:</p>
            <div className={`w-32 h-32 bg-button-deactivated`}></div>
          </div>
          <div>
            <p>Deactivated Background:</p>
            <div className={`w-32 h-32 bg-button-deactivatedBackground`}></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Type</p>
        <div className="flex flex-col flex-wrap items-center justify-center pb-3 mt-1 space-x-2">
          <p className="h6">Black</p>
          <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
            <div>
              <p>Primary:</p>
              <div className={`w-32 h-32 bg-type-black-primary`}></div>
            </div>
            <div>
              <p>Secondary:</p>
              <div className={`w-32 h-32 bg-type-black-secondary`}></div>
            </div>
            <div>
              <p>Tertiary:</p>
              <div className={`w-32 h-32 bg-type-black-tertairy`}></div>
            </div>
            <div>
              <p>Deactivated:</p>
              <div className={`w-32 h-32 bg-type-black-deactivated`}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center pb-3 space-x-2">
          <p className="h6">White</p>
          <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
            <div>
              <p>Primary:</p>
              <div className={`w-32 h-32 bg-type-white-primary`}></div>
            </div>
            <div>
              <p>Secondary:</p>
              <div className={`w-32 h-32 bg-type-white-secondary`}></div>
            </div>
            <div>
              <p>Tertiary:</p>
              <div className={`w-32 h-32 bg-type-white-tertiary`}></div>
            </div>
            <div>
              <p>Deactivated:</p>
              <div className={`w-32 h-32 bg-type-white-deactivated`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-3">
        <p className="h5">Background</p>
        <div className="flex flex-col flex-wrap items-center justify-center pb-3 mt-1 space-x-2">
          <p className="h6">Black</p>
          <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
            <div>
              <p>Base:</p>
              <div className={`w-32 h-32 bg-background-black-base`}></div>
            </div>
            <div>
              <p>Primary:</p>
              <div className={`w-32 h-32 bg-background-black-primary`}></div>
            </div>
            <div>
              <p>Secondary:</p>
              <div className={`w-32 h-32 bg-background-black-secondary`}></div>
            </div>
            <div>
              <p>Line:</p>
              <div className={`w-32 h-32 bg-background-black-line`}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center pb-3 space-x-2">
          <p className="h6">White</p>
          <div className="flex flex-row flex-wrap items-center justify-center pb-3 space-x-2">
            <div>
              <p>Base:</p>
              <div className={`w-32 h-32 bg-background-white-base`}></div>
            </div>
            <div>
              <p>Primary:</p>
              <div className={`w-32 h-32 bg-background-white-primary`}></div>
            </div>
            <div>
              <p>Secondary:</p>
              <div className={`w-32 h-32 bg-background-white-secondary`}></div>
            </div>
            <div>
              <p>Line:</p>
              <div className={`w-32 h-32 bg-background-white-line`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
