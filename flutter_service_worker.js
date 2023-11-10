'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6639f7d4a66bf3e7094ae20f9cf3b45a",
"assets/AssetManifest.json": "c7afb28d1e3d0d5d19fb25bd9b485e2f",
"assets/assets/car.png": "5fc047114005297ef90b6c7fbf8b7bc6",
"assets/assets/country/Australia.png": "019111a93e122260bf9fcddc3aee39b8",
"assets/assets/country/Canada.png": "6288313818898f31afb64691d39f8a16",
"assets/assets/country/Germany.png": "8f239dbab7c479e495cf1500dbeb8891",
"assets/assets/country/Switzerland.png": "6afc50102cf4ea6b6307fc2cc31f59c3",
"assets/assets/country/usa.png": "765fba7c2b8e5049d8429e5bd2eb9184",
"assets/assets/customer_support_logo.png": "9c817c94cd27d027368e17d12ccff739",
"assets/assets/download_logo.png": "e0c7072156fce80d3cff60035a537892",
"assets/assets/faqs_logo.png": "42dc1f7bb065ffe2a516fed2d3d901b9",
"assets/assets/folder.png": "ead0fdbd70e4dcd7775de84cf12c2f28",
"assets/assets/fonts/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"assets/assets/fonts/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/health_and_wellness.png": "7972def2971f10f33f9cce75de878538",
"assets/assets/icons/add-square.svg": "3ca368540d130c3c807013281d82a285",
"assets/assets/icons/Admin_Kit.svg": "b454cd3f9db4e5aa74b601eba29c63d2",
"assets/assets/icons/Admin_Kit_Text.svg": "4536dca87a4294b8db9661212724cdd6",
"assets/assets/icons/archive-2.svg": "bcac69e6304142809c5f6a382a31cd82",
"assets/assets/icons/arrow-down-2.svg": "7f74e39e4d3d0f36b81dfb66b341103b",
"assets/assets/icons/arrow-left.svg": "15cde702903952f1b4ded7ada8023c40",
"assets/assets/icons/arrow-right-2.svg": "e89449247c4aa98318b71b3ae394032b",
"assets/assets/icons/arrow-right-3.svg": "f689ba3a1c09ddf7a514a8b50e3f27c1",
"assets/assets/icons/Auth_BG.svg": "1de034439f41adb0b0bec3c105837e8a",
"assets/assets/icons/box-1.svg": "d22b7147dedb2beeb1b054f407eba3ae",
"assets/assets/icons/calendar-2.svg": "a4911892644a08f75a9113391844d9a9",
"assets/assets/icons/camera.svg": "d4f524ee0b11a17dad1faa8a53531439",
"assets/assets/icons/category.svg": "f62d3eb5ff6cdc3731e25c00b6477436",
"assets/assets/icons/chart-pie.svg": "4aa0478dca9f5275fa0d852baef4d9dc",
"assets/assets/icons/checkbox-circle.svg": "c9e57dc01a6fedc64718d5c42650c8ef",
"assets/assets/icons/close-square.svg": "9a79e8ce8aa50dfbfa7ef3790f2b07d6",
"assets/assets/icons/cloudcomputing.svg": "c3719a84fb38d0312e7540fa8ed958ec",
"assets/assets/icons/customer_support.png": "32da33ecc44fe2de2e00c29c08b78e03",
"assets/assets/icons/deals.png": "9474f2bb88722caa12b881cd249f1c27",
"assets/assets/icons/facebook.svg": "35b49d77b2359b18e4284ad132dda413",
"assets/assets/icons/grid-2.svg": "2cf19a1e1dedcbc070aa5813efa5b955",
"assets/assets/icons/home-2.svg": "9be3c87cf1daa465befda6239a59c915",
"assets/assets/icons/maintenance.svg": "c1128a717dc4dfce45fb76a2d6f9fc55",
"assets/assets/icons/map.svg": "e7bdf89d64cc9c21594149f955810db4",
"assets/assets/icons/notification-1.svg": "def464219fe311fc457af1169862b194",
"assets/assets/icons/pin.svg": "6ca7416f556c9174dab111cec6821a15",
"assets/assets/icons/receipt-2-1.svg": "90bbb90f89b1bd81dc84bf2ebdc49bf9",
"assets/assets/icons/search-normal-1.svg": "8f39818d05e1775ba1040de0d079152d",
"assets/assets/icons/setting-2.svg": "f5eb6aef16fea6a48b49fce98c62dd50",
"assets/assets/icons/settings.png": "a514a588ddf1efc77765d5b48b3e9606",
"assets/assets/icons/settings.svg": "b5f6d7040f031c49b9a7356d74f85f7a",
"assets/assets/icons/shop.svg": "ed8cc22c0da82997c0d88e20795736b8",
"assets/assets/icons/sms.svg": "32c7859a8575a4528022e75f3441148f",
"assets/assets/icons/transactions.svg": "69f976670cc3b3fe50355059f35f1f43",
"assets/assets/icons/trash.svg": "0b5e1165ca5b2acd0d945601cf717402",
"assets/assets/icons/twitter.svg": "1d1bf5b7f02c61afe47a503bbf858e0e",
"assets/assets/icons/verify.svg": "f6657b7e307f0cc07a743169eddf9872",
"assets/assets/icons/yexah.jpg": "aab873c231ede07e1e88097621c4de79",
"assets/assets/icons/yexah_logo.jpg": "8d65409cac88be33fddf05f8d3b271bd",
"assets/assets/images/a2zlogo.png": "e5b22c62999750d92fe7d72e59eeecb0",
"assets/assets/images/addition_icon.png": "b9b06f4b41d244f91cab95dfc4d5efc9",
"assets/assets/images/app.png": "941ffb2f3fad44788db23bf44d5957a7",
"assets/assets/images/arm_chair.jpeg": "e25a536b41630921785dea57333e045b",
"assets/assets/images/arrow-down-2.svg": "7f74e39e4d3d0f36b81dfb66b341103b",
"assets/assets/images/art_design.png": "c96f06e13f63c0f72eeedbf5c07021ef",
"assets/assets/images/Auth-BG.png": "6a6a2df7a7c62e7e79376ae8906be29e",
"assets/assets/images/automotives.png": "f20bce2d0d28bfce08603caec3bd6a6c",
"assets/assets/images/bagcat.webp": "b430274b24c11c17dee42faf5f4dfaf3",
"assets/assets/images/books.png": "e4f39ebca2fcce459ed9d284443b6c1c",
"assets/assets/images/c1.jpeg": "7dd3776097da93ad0ac0cff1db45e907",
"assets/assets/images/c2.jpeg": "a088c40cde7d3374290e88f42e80421e",
"assets/assets/images/c3.jpeg": "6d4414dbffdeac0c40836915890f87a6",
"assets/assets/images/cancellation_policy.png": "7f4b72c2078cc49e5a2d758ab0de4fe3",
"assets/assets/images/cap.png": "d7df33e64d4789e205ea6aa096417a91",
"assets/assets/images/car.png": "5fc047114005297ef90b6c7fbf8b7bc6",
"assets/assets/images/customer_support_logo.png": "9c817c94cd27d027368e17d12ccff739",
"assets/assets/images/delivery_policy.png": "9f1cfd99c9d7a0be634c51b910125480",
"assets/assets/images/download_logo.png": "e0c7072156fce80d3cff60035a537892",
"assets/assets/images/electronic.png": "03ac7b94e15f18a4e8d3d224e37e6a0f",
"assets/assets/images/entertainment.png": "7b98eaff533b27b8efac4f06805a5714",
"assets/assets/images/error-404.svg": "af59b51e4422dbf2ab61c43d336b4218",
"assets/assets/images/error-500.svg": "9e45ec6665fe6bd586e2ac021bd42303",
"assets/assets/images/eyeswear.webp": "2978c4aad33b7eacb20bba73009c8a56",
"assets/assets/images/fancy_bag.jpeg": "cf0e2d9e755a063b559980b292b50e92",
"assets/assets/images/faqs_logo.png": "42dc1f7bb065ffe2a516fed2d3d901b9",
"assets/assets/images/filter.png": "3e41adabfd181693fee7fa60cf32296f",
"assets/assets/images/flipflop.webp": "21471877b08ccb848b1e66c811f616de",
"assets/assets/images/folder.png": "ead0fdbd70e4dcd7775de84cf12c2f28",
"assets/assets/images/g1.jpeg": "0724c973e2914be68400ac16f8ab3e11",
"assets/assets/images/g2.jpeg": "69c9e5e3e30777a99a8922d1f2e58445",
"assets/assets/images/g3.jpeg": "9e3e366edc4f87cf0917f5589f7704c4",
"assets/assets/images/g4.jpeg": "ff404ecf4f25967ecdb9e0dda72c66b4",
"assets/assets/images/g5.jpeg": "3bc5992c20d233979181e5b9242eeea0",
"assets/assets/images/g6.jpeg": "83783c7258083843dadef0145132090e",
"assets/assets/images/g7.jpeg": "b3fd442d834248825472b1708795de35",
"assets/assets/images/g8.jpeg": "077d44dde4a892a68b5b4f79541e3fbe",
"assets/assets/images/g9.jpeg": "ea6028c68d05c8fcd9d709771764f196",
"assets/assets/images/gadgets.png": "01d50c81457e90a0eca8d1953750d990",
"assets/assets/images/grocery.png": "d33b53da952597889569fb343607991f",
"assets/assets/images/health_and_wellness.png": "7972def2971f10f33f9cce75de878538",
"assets/assets/images/image1.png": "50b34ac51c530c81d3b94a86b927c6d9",
"assets/assets/images/increase.png": "46c286f05f2437a739ba8721f06512fd",
"assets/assets/images/increase_logo.png": "46c286f05f2437a739ba8721f06512fd",
"assets/assets/images/info.png": "88172f6750888d0ee7574e8cb7aa7c4a",
"assets/assets/images/instagram.png": "6d9870c6c49c48401897a3caf6c8daa3",
"assets/assets/images/jewellery.png": "1d9d21c9d69e24d607dad96523ec0977",
"assets/assets/images/kitchen.png": "9c2e2c82d30de2bf0f2ddadcab20a8c1",
"assets/assets/images/License%2520free.txt": "639e0e714107d1c6ee13fa45daba9966",
"assets/assets/images/License%2520premium.txt": "41f391998fddb187fabdfc94326e4b6c",
"assets/assets/images/likendin.png": "23ff3f39a71e91aa3c49c57813fb6e1b",
"assets/assets/images/logfile%2520for%2520multirisen%2520hotel%2520api.doc": "20b67c8d9dfe9b4f75a75deb28bab30f",
"assets/assets/images/login-bg.jpg": "64bd8e3cbc7693040d3b055a008e8b0d",
"assets/assets/images/logo-dark-lg-old.png": "5d39d74988339152cc4a10d29340a942",
"assets/assets/images/logo-dark-lg.png": "207993461b9cedfb95da84796cc170bd",
"assets/assets/images/logo-light-lg-old.png": "37bc14787d2256795be892ad6f27d54c",
"assets/assets/images/logo-light-lg.png": "5561d4d2204f58590be9ea97a585c5d7",
"assets/assets/images/logo-light.png": "47437d73bac05d0fb68b2e16b48967fb",
"assets/assets/images/logo-sm-old.png": "2b3e3211dd01969477110dfbbd611046",
"assets/assets/images/logo-sm.png": "847043d6590c171daab8e1d881668485",
"assets/assets/images/maintenance.png": "4708bf7b9c7eae5075593eee0100193a",
"assets/assets/images/makeup.png": "3f828aaa5d07842a302c8b9bb29fc69d",
"assets/assets/images/makeupcat.webp": "0520ee26496f3a2837423541bbe34e6f",
"assets/assets/images/medical-history.png": "5ad68580348b917bba66eb56f1db577e",
"assets/assets/images/men.png": "3b69951d65c061fd25cd97e78b103326",
"assets/assets/images/music.png": "bf689a21f42ab5f53ea4d9472537fa05",
"assets/assets/images/my_account_logo.png": "40b077ed9b22bec46940cb9a1b328695",
"assets/assets/images/my_account_logo_new.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/images/notification.png": "5abf2f9b3db1579cf448807574acc58d",
"assets/assets/images/photography.png": "0ce6767230b0ad3596ecb0c664f76976",
"assets/assets/images/Picture1.png": "21910aee4e69dcb316b06c3d91296e38",
"assets/assets/images/Picture2.png": "c16c14a93e73153d3b71d5255fa67cc5",
"assets/assets/images/play.png": "e481cce2de3cecf9161636e7b2fe89e8",
"assets/assets/images/play_game.jpeg": "b964656be9d9df9f3d9a925bdb645dae",
"assets/assets/images/privacy_policy.png": "a1da1cf9b20e7e62c0182898dcd68ba1",
"assets/assets/images/profile.jpeg": "1bfa2288a849de76482192038cc98c18",
"assets/assets/images/provider_logo.png": "445b894e4d02fb7a2134ff6dc172a21e",
"assets/assets/images/responsive.png": "87679df844e2c2ae9d2355f9235c3032",
"assets/assets/images/samsung_tv.jpeg": "c219e6ae82c40f905e3ec8245b01911b",
"assets/assets/images/settings.png": "a514a588ddf1efc77765d5b48b3e9606",
"assets/assets/images/shoes.png": "50d852dba6f12a47dc7cee9747882a9f",
"assets/assets/images/sports.png": "f492f9b36ec85d7125ae424396d7ddd0",
"assets/assets/images/terms.png": "7d472c989a4ff36a87a942b4822f5f6e",
"assets/assets/images/ticket.jpg": "9513619029a98af6805e627b8d18c420",
"assets/assets/images/twitter.png": "aa23534c6ccddac18a74a6bd3197024b",
"assets/assets/images/white_goods_retail.png": "df3b01cc55e57d80ad910579534e70e4",
"assets/assets/images/women.png": "508b55de67c801d2c697f68106a87484",
"assets/assets/images/xls.png": "c5f13531c005ac078cfde4a7971dc938",
"assets/assets/images/yexah_fire_logo.png": "f51ec6b3d9851309fb43cd0f5561f7f7",
"assets/assets/images/yexah_fire_percent_logo.png": "41a8d7e6aded1be032b06a561369b989",
"assets/assets/images/yexah_graph.png": "db0e6b2a4517480a4053a73ee6c1298a",
"assets/assets/images/yexah_logo.png": "b02c1b4c777d0be5b163269198dcff56",
"assets/assets/images/yexah_logo_home.png": "b02c1b4c777d0be5b163269198dcff56",
"assets/assets/language/en.json": "3120b1942777684b383ab3a0d2b33e84",
"assets/assets/language/hi.json": "4d81044fa503c441db625b2311724868",
"assets/assets/my_account_logo.png": "40b077ed9b22bec46940cb9a1b328695",
"assets/assets/my_account_logo_new.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/pdf/(July%252019%25202023)%2520-%2520Yexah%2520-%2520Privacy%2520Policy%2520-%2520Vertices%2520Drafts%2520003%2520(Clean).pdf": "db0490428f3ec9fcd475ebd94e333d10",
"assets/assets/pdf/(July%252021%25202023)%2520Yexah%2520-%2520Website%2520Terms%2520%2520Conditions%2520-%2520Vertices%2520Draft_003%2520(Clean).pdf": "ea39276679e8124c229d74f0b0bfccf3",
"assets/assets/pdf/apikit.pdf": "e3f5759a80d9a328b86f87999ad62320",
"assets/assets/pdf/key_fact_sheet.pdf": "a3dcaf9125257104cd7d73a792e2e08d",
"assets/assets/pdf/operating_model.pdf": "5f2707c5731c2b0eef7fc74ad56f540a",
"assets/assets/pdf/sample_customer_copy.pdf": "d704291915c1e8c87774157433734ddb",
"assets/assets/profile.jpeg": "1bfa2288a849de76482192038cc98c18",
"assets/assets/responsive.png": "87679df844e2c2ae9d2355f9235c3032",
"assets/assets/rocket.gif": "6cac02da641301ffa494cf6e266ae557",
"assets/assets/yexah_fire_logo.png": "f51ec6b3d9851309fb43cd0f5561f7f7",
"assets/assets/yexah_fire_percent_logo.png": "41a8d7e6aded1be032b06a561369b989",
"assets/assets/yexah_graph.png": "db0e6b2a4517480a4053a73ee6c1298a",
"assets/assets/yexah_logo.png": "b02c1b4c777d0be5b163269198dcff56",
"assets/FontManifest.json": "81799912d5f8551d9951c3dec0a8c49f",
"assets/fonts/MaterialIcons-Regular.otf": "1c0f90ff658ee1158e1687818f901222",
"assets/NOTICES": "a1358c9ba689ddcc52c31fa51938a7d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"index.html": "dd4851e6a8d1f26e285ee8530a4f6c7f",
"/": "dd4851e6a8d1f26e285ee8530a4f6c7f",
"logo.png": "4fcf71b2d35ac3758479f10a824a085e",
"main.dart.js": "22ab025664a360f45d85664f71e1dbbd",
"manifest.json": "3634428cf5c6bfa533d372bf64dec68c",
"version.json": "4a88246d9aad34320cf4d8de7c06fa00"};
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
