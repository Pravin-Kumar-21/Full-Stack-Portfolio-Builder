function showLoader(config) {
  resetLoaderCSS();

  const loaderTypes = {
    circle: '<div class="lds-circle"><div></div></div>',
    ring: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
    spinner: '<div class="lds-spinner">' +
      '<div></div><div></div><div></div><div></div><div></div><div></div>' +
      '<div></div><div></div><div></div><div></div><div></div><div></div>' +
      '</div>',
  };

  const defaultConfig = {
    loader: 'spinner',
    background: true,
    container_id: null
  };

  const data = { ...defaultConfig, ...config };
  const loaderHTML = loaderTypes[data.loader] || loaderTypes.spinner;
  const overlay = `<div class="loader-overlay" aria-hidden="false"></div>`;
  const wrapper = `<div class="custom-loader-container">${loaderHTML}</div>`;

  let content = wrapper;
  if (data.background) content += overlay;

  if (data.container_id && document.getElementById(data.container_id)) {
    const el = document.getElementById(data.container_id);
    el.innerHTML = '';
    el.innerHTML = content;
    document.documentElement.style.setProperty('--loader-position', 'inherit');
  } else {
    // remove previous loaders if any
    document.querySelectorAll('.loader-overlay, .custom-loader-container').forEach(el => el.remove());

    // then insert new
    document.body.insertAdjacentHTML('beforeend', content);
    document.body.classList.add('loader-open');
  }
}

function hideLoader(container_id) {
  if (container_id && document.getElementById(container_id)) {
    document.getElementById(container_id).innerHTML = '';
  } else {
    document.querySelectorAll('.loader-overlay, .custom-loader-container').forEach(el => el.remove());
    document.body.classList.remove('loader-open');
  }
}

function resetLoaderCSS() {
  document.documentElement.style.setProperty('--loader-position', 'fixed');
  document.documentElement.style.setProperty('--loader-overlay-position', 'fixed');
}

// expose for global use
window.dynamic_loader_start = showLoader;
window.dynamic_loader_end = hideLoader;
