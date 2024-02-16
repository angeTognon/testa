'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2c80cd14ff44afdb6aa42d529faf57ee",
".git/config": "8a6806a92084126805246c0b5d0e9879",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b0576c318b5f56aba04c13662011b7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19ff1649ef509fc8bea64e8dd2dcc4b6",
".git/logs/refs/heads/main": "0308c20fd42bc6efd09636c07a1ddac5",
".git/logs/refs/remotes/origin/main": "0796d2d872a1c3a9ef34aa2292a47a55",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/0f04888ad4845b78b90f545f464d90969b6b72": "4524091ee72d88074863f761999649ad",
".git/objects/15/d29a9e1733c588f60a6647172b3d07a2bee877": "2606115de9046a446dc25e15aebda33e",
".git/objects/16/448fa7f98d978173a97127220a15a567d2edef": "b96d4761c6afee0f029c16733756eb5b",
".git/objects/1d/67e8f9419c5a800eecaf2816e5d022368c638c": "a198a4cedea5baf599c76c1ff7cd0d19",
".git/objects/1d/d026968e6f81a2d31759691cbf7f25504f3d3a": "e3bc1436dad0b8670307a2ea6c2b2b1a",
".git/objects/1e/13a43fcf6c9beb3b8404cc7299bc8a2fe4f480": "8f5e62f0f2c0da5a71e5223ebc281942",
".git/objects/1e/6e3bc034678040ba3ca5f0f762dc6def6623ca": "becec2a07f3738e9b573b97a98450415",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/24/b2eec57d33fb977799148c654817d9a4f6625a": "187030b13b236e7999c751bf79ba5268",
".git/objects/26/a3978e59ae0533c4618ed37043747ab881605d": "a62a00196ee598235783d8bd16a6a3dc",
".git/objects/2a/3d98ae4d372eeed29a68302714996a32890d2a": "0ce2273f0e4500d77753f837f72b850f",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/33/97b18ad83f35bbf532befa9e0776cb311ae9ca": "bd32e23a7d01e2a519fea2db621ea909",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/fffca1979dac4095794ca5dc58d86d0217cf0d": "06cc559c98db820db3cf408481aa22b7",
".git/objects/40/f23d32c72d7634c9cdf1ddf7dbf0f1a68c7d90": "9c401fd695d69f86194494cf1e7dfbcb",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4b/b15d86a3281b93022cc86dd71be72bec63a0dd": "105d27cca2db1951884f653128b86791",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/f9eb0b695e413e6782b1f543db2c869119e94f": "f70dd55cd350b2be0ab075ef08c867fe",
".git/objects/6f/9d7189f911f5ceb26f4799a5282dee2f2518e3": "112b89e2fff737bbcb8f759b38fc2fd0",
".git/objects/73/680ffdb3062e60950376cead3142675470751b": "c3cbdb80c34a3e76b3982b6bb28812d2",
".git/objects/82/8686ca82d3ed15a1c2d085c446f9ca84f815c6": "6a463cc9a236c95bdb58f4eae989ada1",
".git/objects/82/d894a8a761172923beefe1c0f98b021d2531fa": "ed36c3b98286913c129d0ea6b7e76030",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9e/cbf68d214f2012d93c965bb18fed300a197b12": "8c67bd2fd0c9a69f68a2bcd19fd0c10d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/af/bac96d68b0d063b0bf77d18db8a87dc74c7c5c": "526a4fb47602a0458a53f01b0fe4a370",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/53c35a2b95a9df2a15990cf45d0837fd2fa99b": "5fc770443f06af047250b4f3213c16cf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/6f1a51766c75e3d45c9cc846f8ed7b72f3b253": "e549d5e06dbd62fa826d83218a7427e3",
".git/objects/c3/233ea36b418e064c68c360c2ba636459d673b0": "9664f53a1c84c30d8f22b5c900dca27e",
".git/objects/cb/c91a08cb5c137beb1642da7e8a5be4b8689d85": "74b77e33223dc4572d02814eb0b6601c",
".git/objects/cd/62ca6dd40967b7a825bd201ed1e3408560b36b": "db1db8d4d642ed5ea466a18ae7347cbc",
".git/objects/d1/9d01ea0278c62a9037e49396f3d23cfd9a30da": "7b945cff5a003c75adc568530deac649",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/e5f60a7a5a6d0341cd0a9a423b922a1e5d1140": "99c65d7184da1027094deeff4cd5aa92",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/3e43407ed7619305f887e89a0585e84498eab6": "59bc6b83d870508b1dbf2e7a70221fe4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/666cfbf40b04bba6bfad11d5d94a00726857ef": "c63307715a18607134350d9a7956880d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/b16083384ba1c17da462145b59d6fe6aec39b5": "80cf6e6f791d79c47300612a0bee4cfd",
".git/objects/fb/05ca2fc2d77ec818d04676cb20e1813cf039ee": "56fefbf186c8cfb7981dfd9f3d5909b5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "ae647a70891178917305471c7502c123",
".git/refs/remotes/origin/main": "ae647a70891178917305471c7502c123",
"assets/AssetManifest.bin": "5743aea9063e9c3e37c65c007c23543e",
"assets/AssetManifest.json": "f3ebda12e924d33f9a0e077637e11187",
"assets/assets/images/e1.png": "5f4717737f6aa782093a32897c45a8d6",
"assets/assets/images/e2.png": "47ab7bcb28ac84188d2a1c563e557a38",
"assets/assets/images/e3.png": "afa311f912a6a80b3e4944cd4c1f159f",
"assets/assets/images/group.png": "1711491bbc66babeda4bdda1c176a6ca",
"assets/assets/images/i1.png": "f0d48c49721770b360a02f8ca83ec156",
"assets/assets/images/i2.png": "139fe54631bcab61a7997b92eaa3f3fe",
"assets/assets/images/i3.png": "137fedd80cc2f3deec33132b67289f47",
"assets/assets/images/i4.png": "f0474f166715349924a4eb0cc96e572c",
"assets/assets/images/i5.png": "1c76d1e6859f578b4950a04179483427",
"assets/assets/images/icon_facebook.png": "f3fc1324a0e19f0d9e70660121f6b995",
"assets/assets/images/icon_instagram.png": "1e27141843dfae189aa935414909e943",
"assets/assets/images/icon_twitter.png": "8651f3eb15136f0cbbb0c34b7984ff9e",
"assets/assets/images/in.png": "ab23bf158985946ba0bdd9f12679925c",
"assets/assets/images/logo.png": "a4a53bae3c16b132b0762372f7f52618",
"assets/assets/images/p1.png": "ab9c1bd71deb010009409ee1d5f180e3",
"assets/assets/images/p2.png": "842d71d05192d60e73290eb78cf491b5",
"assets/assets/images/p3.png": "5267ccc35e35dce3da057ca6b4232ae6",
"assets/assets/images/sec1.png": "335eb3e265dc778ef6f27b5aa65bd4e3",
"assets/assets/images/sec2.png": "c5575a0c6f48facfbbdfa3ce31e9c5f1",
"assets/assets/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/FontManifest.json": "a044aa342ed301c1a9a97422364e71ee",
"assets/fonts/MaterialIcons-Regular.otf": "06fe957c5bcba11c5878b7f7fb6e71a7",
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
"index.html": "36bbfdb53123cc7d0e952276a28cbf0d",
"/": "36bbfdb53123cc7d0e952276a28cbf0d",
"main.dart.js": "82878ce05ed5d08643d8122184e384f1",
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
