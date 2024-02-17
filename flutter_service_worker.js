'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/anim.gif": "37ce7094509e2ded037e7fe2e8d4447f",
"assets/AssetManifest.bin": "7608ee27010638f604bccb4f175c2d14",
"assets/AssetManifest.json": "ea92fb88d8b2209e64db3c5fb0d9f58d",
"assets/assets/images/e1.png": "5f4717737f6aa782093a32897c45a8d6",
"assets/assets/images/e2.png": "47ab7bcb28ac84188d2a1c563e557a38",
"assets/assets/images/e3.png": "afa311f912a6a80b3e4944cd4c1f159f",
"assets/assets/images/femme.png": "243bf8eb19569e6a41a4dd681fe55227",
"assets/assets/images/group.png": "1711491bbc66babeda4bdda1c176a6ca",
"assets/assets/images/homme0.png": "02cbf6d787698b27eece86e5ea77f7bf",
"assets/assets/images/homme2.png": "e6ccd4c65b79765d346d6bb116b48bfb",
"assets/assets/images/homme3.png": "f118982d8c45d694ff6c158469781cc5",
"assets/assets/images/homme_mac.png": "90d28caa163a8bdd6379dd4642703f99",
"assets/assets/images/i1.png": "f0d48c49721770b360a02f8ca83ec156",
"assets/assets/images/i2.png": "139fe54631bcab61a7997b92eaa3f3fe",
"assets/assets/images/i3.png": "137fedd80cc2f3deec33132b67289f47",
"assets/assets/images/i4.png": "f0474f166715349924a4eb0cc96e572c",
"assets/assets/images/i5.png": "1c76d1e6859f578b4950a04179483427",
"assets/assets/images/icon_facebook.png": "f3fc1324a0e19f0d9e70660121f6b995",
"assets/assets/images/icon_instagram.png": "1e27141843dfae189aa935414909e943",
"assets/assets/images/icon_twitter.png": "8651f3eb15136f0cbbb0c34b7984ff9e",
"assets/assets/images/Image1.png": "8f36eb5fefd93fb1c06ef3d89655e17a",
"assets/assets/images/Image10.png": "5a2e21e8e0959e1e94046e41d34419cc",
"assets/assets/images/Image11.png": "6d5d45a14f24fdaf6593fb00e043561c",
"assets/assets/images/Image12.png": "baa45d127b1110567a8018577e8a652c",
"assets/assets/images/Image2.png": "52f7ebab8988552dcbcd013cfe740acb",
"assets/assets/images/Image3.png": "fa5d3de5185e390678588e26123bba47",
"assets/assets/images/Image4.png": "d45fc632d3f61c6776a128e683c5bd25",
"assets/assets/images/Image5.png": "9a53338f00ff30de3d6026fbc812f348",
"assets/assets/images/Image6.png": "6c289a1f7dd417e4d80dd306b802d9b1",
"assets/assets/images/Image7.png": "d7e87469c14e002e62aaa362c52e5d00",
"assets/assets/images/Image8.png": "fcf4e56bd7f0575a14f0ecbe2fb39f06",
"assets/assets/images/Image9.png": "8629d0ad59e1d6658f895498ae603e00",
"assets/assets/images/in.png": "ab23bf158985946ba0bdd9f12679925c",
"assets/assets/images/logo.png": "a4a53bae3c16b132b0762372f7f52618",
"assets/assets/images/p1.png": "ab9c1bd71deb010009409ee1d5f180e3",
"assets/assets/images/p2.png": "842d71d05192d60e73290eb78cf491b5",
"assets/assets/images/p3.png": "5267ccc35e35dce3da057ca6b4232ae6",
"assets/assets/images/Qr_main.png": "92a6a7a18eab69c02af99bd0a36be2f6",
"assets/assets/images/sec1.png": "335eb3e265dc778ef6f27b5aa65bd4e3",
"assets/assets/images/sec2.png": "c5575a0c6f48facfbbdfa3ce31e9c5f1",
"assets/assets/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/FontManifest.json": "a044aa342ed301c1a9a97422364e71ee",
"assets/fonts/MaterialIcons-Regular.otf": "1bbc73d66281ba3f1601bc8d075482c6",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.css": "46e4ef40dc95de0272f06497cc848517",
"index.html": "d145423d175e2c7d249b6ba86d5c680e",
"/": "d145423d175e2c7d249b6ba86d5c680e",
"loading.js": "f416447b7a5a2f03248ef1d04e399b10",
"main.dart.js": "78a4a3062df2be63d06c428bbbd9f25c",
"manifest.json": "95b1460daf8ca31b5f8241976799fd84",
"version.json": "f2367eb0c115168369c873243e00c6e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
