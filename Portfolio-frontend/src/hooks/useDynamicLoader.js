let isLoaded = false;
let isLoading = false;

export function useDynamicLoader() {
  const loadAssets = () => {
    return new Promise((resolve, reject) => {
      if (isLoaded) return resolve();
      if (isLoading) return resolve();   // prevent race conditions
      isLoading = true;

      // Load CSS once
      if (!document.getElementById("dynamic-loader-css")) {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "/dynamic-loader/dynamic-loader.css";
        css.id = "dynamic-loader-css";
        document.head.appendChild(css);
      }

      // Load JS once
      if (!document.getElementById("dynamic-loader-js")) {
        const script = document.createElement("script");
        script.src = "/dynamic-loader/dynamic-loader.js";
        script.id = "dynamic-loader-js";
        script.onload = () => {
          isLoaded = true;
          isLoading = false;
          resolve();
        };
        script.onerror = (err) => {
          isLoading = false;
          reject(err);
        };
        document.body.appendChild(script);
      } else {
        isLoaded = true;
        isLoading = false;
        resolve();
      }
    });
  };

  const startLoader = async (config = {}) => {
    await loadAssets();
    window.dynamic_loader_start?.(config);
  };

  const stopLoader = async () => {
    await loadAssets();
    window.dynamic_loader_end?.();
  };

  return { startLoader, stopLoader };
}
