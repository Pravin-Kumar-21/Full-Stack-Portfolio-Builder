let isLoaded = false;

export function useDynamicLoader() {
  const loadAssets = () => {
    return new Promise((resolve, reject) => {
      if (isLoaded) return resolve();

      // Load CSS
      if (!document.getElementById("dynamic-loader-css")) {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "/dynamic-loader/dynamic-loader.css"; 
        css.id = "dynamic-loader-css";
        document.head.appendChild(css);
      }

      // Load JS
      if (!window.dynamic_loader_start) {
        const script = document.createElement("script");
        script.src = "/dynamic-loader/dynamic-loader.js"; 
        script.onload = () => {
          isLoaded = true;
          resolve();
        };
        script.onerror = reject;
        document.body.appendChild(script);
      } else {
        isLoaded = true;
        resolve();
      }
    });
  };

  const startLoader = async (config = {}) => {
    await loadAssets();
    window.dynamic_loader_start(config);
  };

  const stopLoader = async () => {
    await loadAssets();
    window.dynamic_loader_end();
  };

  return { startLoader, stopLoader };
}
