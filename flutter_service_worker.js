'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b521a3ea70b60e5656d8ee98d36a6151",
"index.html": "d1b93d1d28fcb3cdab25775ad60738db",
"/": "d1b93d1d28fcb3cdab25775ad60738db",
"main.dart.js": "5e63055ad99b5f497dc9f37475bbf473",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37ed397a52522510e50ad73ec96d77bf",
"assets/AssetManifest.json": "f9f60e15b6ea223134f6420d4c259b4e",
"assets/NOTICES": "b488583ee83b37eeee434f213c5e96fd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/quotes/archive.png": "fd17cbab50c99dc11cf665d953d2754a",
"assets/assets/images/quotes/introduce.png": "1d458fcf074f3eb53a7cf5ee1e6edfc8",
"assets/assets/images/quotes/ability.png": "ca32a3e15dd3e6a460e9270d51a00774",
"assets/assets/images/projects/Database/2.jpg": "bc65b5652c658fc1a04998cae812201e",
"assets/assets/images/projects/Database/1.jpg": "e44cf119adf29736316cb9138cb1ed1d",
"assets/assets/images/projects/Java/4.jpg": "eca682eec2be9c6ec44be4293ccba7f1",
"assets/assets/images/projects/Java/5.jpg": "93604293334f6b6957a75805e6ac47d2",
"assets/assets/images/projects/Java/6.jpg": "48d44b207d7ca9447995033a79d97842",
"assets/assets/images/projects/Java/2.jpg": "ac97698b2247b4d7be2eb6ddd44e25a5",
"assets/assets/images/projects/Java/3.jpg": "9e1134e483c9021a7749155c25f90ceb",
"assets/assets/images/projects/Java/1.jpg": "c846b8deffae79fe0bc7312a4658a752",
"assets/assets/images/projects/C/8.jpg": "d08aac3daa53cdabdb527993cb960eea",
"assets/assets/images/projects/C/9.jpg": "63c442e4ec6eaf85ea73037c873139f7",
"assets/assets/images/projects/C/4.jpg": "a9a9aef4b3170b1018710d33db04b245",
"assets/assets/images/projects/C/5.jpg": "9993b8f71db042f23a457fa2b7230e25",
"assets/assets/images/projects/C/7.jpg": "1813b6cc12c11a24e01a4b77d9224742",
"assets/assets/images/projects/C/6.jpg": "bc07130e2c1ba9ed19c68ba13e175c47",
"assets/assets/images/projects/C/2.jpg": "4eb6780ba996c2aac99d447b5d720e89",
"assets/assets/images/projects/C/3.jpg": "28eb13afd64c0ecd28398691ea1c8135",
"assets/assets/images/projects/C/1.jpg": "0710a90ff8b63fe4ff436b8e3ca39b7c",
"assets/assets/images/sign.png": "33a53d4ceb23340250259d4d1bcd8901",
"assets/assets/images/icons/swing.JPG": "f09ede8d4bf2d9d83ca56291175e5920",
"assets/assets/images/icons/java.JPG": "8b144c1c57f9a67cbd10357c05c20726",
"assets/assets/images/icons/sdl.JPG": "b5be463f47d56ab43235cca02cd355ad",
"assets/assets/images/icons/oop.JPG": "b1f6676b72c24ca774ce9f4b1411a2c2",
"assets/assets/images/icons/stack.JPG": "ec0b5ec2632e3a2f2df28902019d80a1",
"assets/assets/images/icons/c.JPG": "b100b78ba9aae1354d3579152d1a15ea",
"assets/assets/images/prizes/8.JPG": "4e92aa10fb6958fcfca5611e1b9594d7",
"assets/assets/images/prizes/9.JPG": "e68b8b0d7d0abca94abb022dc000a4b5",
"assets/assets/images/prizes/12.JPG": "ab12da3e84a53abb996f9d9e21ac27ff",
"assets/assets/images/prizes/11.JPG": "67482d5a4c70250c28fdca6857791a39",
"assets/assets/images/prizes/10.JPG": "11d95a5d7c2a2aad5c61f0b3b460aac2",
"assets/assets/images/prizes/4.JPG": "040c561fe55a9106e20b7a1d8c62e497",
"assets/assets/images/prizes/5.JPG": "fd40d315f57a7cf984a5d5fe479bc4c9",
"assets/assets/images/prizes/7.JPG": "cd10fdc54fc04d413c7b9ee2009ff636",
"assets/assets/images/prizes/6.JPG": "086d7d20de67ad7b45d3b0701082b331",
"assets/assets/images/prizes/2.JPG": "d57453d88c2ab77389d7ce3762c6f42c",
"assets/assets/images/prizes/3.JPG": "132b45cbd471980befb3154ecd87cb0c",
"assets/assets/images/prizes/1.JPG": "5d2f1f667fdc6e1a2eb99941aa59a8c9",
"assets/assets/images/prizes/0.JPG": "63c4d5cb9f87912969bd92bb39c24377",
"assets/assets/lotties/ui.json": "2a0472904ed7c6e07ff3e51cecc063a6",
"assets/assets/videos/hello_1.mp4": "44b400c31eeead716a506d006054bfad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
