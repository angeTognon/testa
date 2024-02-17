window.addEventListener('load', function () {
    var loading = document.getElementById('loader-wrapper');
  
    _flutter.loader.loadEntrypoint({
      serviceWorker: {
        serviceWorkerVersion: serviceWorkerVersion,
      },
      onEntrypointLoaded: async function (engineInitializer) {
        let appRunner = await engineInitializer.initializeEngine();
  
        loading.remove();
  
        await appRunner.runApp();
      }
    });
  });