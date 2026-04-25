(function(){
if(!document.head) document.documentElement.appendChild(document.createElement("head"));
(function(parent){
const el_0 = document.createElement("base");
el_0.setAttribute("href", `https://cdn.jsdelivr.net/gh/genizy/google-class@main/bart-blast/`);
parent.appendChild(el_0);
const el_1 = document.createElement("meta");
el_1.setAttribute("charset", `utf-8`);
parent.appendChild(el_1);
const el_2 = document.createElement("meta");
el_2.setAttribute("name", `viewport`);
el_2.setAttribute("content", `width=device-width, user-scalable=no, initial-scale=1.0`);
parent.appendChild(el_2);
const el_3 = document.createElement("title");
(function(parent){
parent.appendChild(document.createTextNode(`BART BLAST (INDEV VERSION)`));
})(el_3);
parent.appendChild(el_3);
const el_4 = document.createElement("style");
el_4.textContent = `
html, body, #canvas {
	margin: 0;
	padding: 0;
	border: 0;
}

body {
	color: white;
	background-color: black;
	overflow: hidden;
	touch-action: none;
}

#canvas {
	display: block;
}

#canvas:focus {
	outline: none;
}

#status, #status-splash, #status-progress {
	position: absolute;
	left: 0;
	right: 0;
}

#status, #status-splash {
	top: 0;
	bottom: 0;
}

#status {
	background-color: #242424;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	visibility: hidden;
}

#status-splash {
	max-height: 100%;
	max-width: 100%;
	margin: auto;
}

#status-splash.show-image--false {
	display: none;
}

#status-splash.fullsize--true {
	height: 100%;
	width: 100%;
	object-fit: contain;
}

#status-splash.use-filter--false {
	image-rendering: pixelated;
}

#status-progress, #status-notice {
	display: none;
}

#status-progress {
	bottom: 10%;
	width: 50%;
	margin: 0 auto;
}

#status-notice {
	background-color: #5b3943;
	border-radius: 0.5rem;
	border: 1px solid #9b3943;
	color: #e0e0e0;
	font-family: 'Noto Sans', 'Droid Sans', Arial, sans-serif;
	line-height: 1.3;
	margin: 0 2rem;
	overflow: hidden;
	padding: 1rem;
	text-align: center;
	z-index: 1;
}

#loading-text {
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8f00ff
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s ease infinite;
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
		`;
parent.appendChild(el_4);
})(document.head);
if(!document.body) document.documentElement.appendChild(document.createElement("body"));
(function(parent){
const el_5 = document.createElement("div");
el_5.setAttribute("id", `loading-text`);
el_5.setAttribute("style", `color: white; font-family: cursive; font-size: 48px; text-align: center; margin-top: 20px;`);
(function(parent){
parent.appendChild(document.createTextNode(`LOADING...`));
})(el_5);
parent.appendChild(el_5);
const el_6 = document.createElement("link");
el_6.setAttribute("id", `-gd-engine-icon`);
el_6.setAttribute("rel", `icon`);
el_6.setAttribute("type", `image/png`);
el_6.setAttribute("href", `index.icon.png`);
parent.appendChild(el_6);
const el_7 = document.createElement("link");
el_7.setAttribute("rel", `apple-touch-icon`);
el_7.setAttribute("href", `index.apple-touch-icon.png`);
parent.appendChild(el_7);
const el_8 = document.createElement("link");
el_8.setAttribute("rel", `manifest`);
el_8.setAttribute("href", `index.manifest.json`);
parent.appendChild(el_8);
const el_9 = document.createElement("canvas");
el_9.setAttribute("id", `canvas`);
(function(parent){
parent.appendChild(document.createTextNode(`
			Your browser does not support the canvas tag.
		`));
})(el_9);
parent.appendChild(el_9);
const el_10 = document.createElement("noscript");
(function(parent){
parent.appendChild(document.createTextNode(`
			Your browser does not support JavaScript.
		`));
})(el_10);
parent.appendChild(el_10);
const el_11 = document.createElement("div");
el_11.setAttribute("id", `status`);
(function(parent){
})(el_11);
(function(parent){
const el_12 = document.createElement("img");
el_12.setAttribute("id", `status-splash`);
el_12.setAttribute("class", `show-image--true fullsize--true use-filter--true`);
el_12.setAttribute("src", `index.png`);
el_12.setAttribute("alt", ``);
parent.appendChild(el_12);
})(el_11);
(function(parent){
})(el_11);
(function(parent){
const el_13 = document.createElement("progress");
el_13.setAttribute("id", `status-progress`);
parent.appendChild(el_13);
})(el_11);
(function(parent){
})(el_11);
(function(parent){
const el_14 = document.createElement("div");
el_14.setAttribute("id", `status-notice`);
parent.appendChild(el_14);
})(el_11);
(function(parent){
})(el_11);
parent.appendChild(el_11);
})(document.body);

const externalScripts = [
  {
    "type": "external",
    "src": "index.js"
  }
];


function loadScriptsSequentially(list, done){
    if(list.length === 0){ done(); return; }

    const item = list.shift();
    const s = document.createElement("script");

    if(item.type === "external"){
        s.src = item.src;
    } else if(item.type === "blob"){
        s.src = URL.createObjectURL(new Blob([item.code], {type:"text/javascript"}));
    }

    s.onload = () => loadScriptsSequentially(list, done);
    s.onerror = () => { console.error("SCRIPT FAILED:", item); loadScriptsSequentially(list, done); };

    document.head.appendChild(s);
}

const inlineScripts = [
  "\n\t\t\twindow.loadingtexta = document.getElementById(\"loading-text\");\n\t\t",
  "\n\t\t\tconst originalFetch = window.fetch;\n\n    let totalBytes = 0;\n    let loadedBytes = 0;\n\n    async function fetchWithProgress(url) {\n      const response = await fetch(url);\n      const reader = response.body.getReader();\n      let chunks = [];\n      let received = 0;\n      while (true) {\n        const {\n          done,\n          value\n        } = await reader.read();\n        if (done) break;\n        received += value.length;\n        loadedBytes += value.length;\n        chunks.push(value);\n        let mbDone = (loadedBytes / (1024 * 1024)).toFixed(2);\n        let mbTotal = '82.18';\n        window.loadingtexta.textContent = `LOADING... ${mbDone} MB / ${mbTotal} MB`;\n      }\n      let fullBuffer = new Uint8Array(received);\n      let offset = 0;\n      for (let chunk of chunks) {\n        fullBuffer.set(chunk, offset);\n        offset += chunk.length;\n      }\n      return fullBuffer.buffer;\n    }\n\n    async function mergeFiles(fileParts, cacheKey) {\n      const buffers = await Promise.all(\n        fileParts.map(part => fetchWithProgress(part))\n      );\n      const mergedBlob = new Blob(buffers);\n      return URL.createObjectURL(mergedBlob);\n    }\n\n    function getParts(file, start, end) {\n      let parts = [];\n      for (let i = start; i <= end; i++) {\n        parts.push(file + \".part\" + i);\n      }\n      return parts;\n    }\nPromise.all([\n    mergeFiles(getParts(\"index.pck\", 1, 3)),\n    mergeFiles(getParts(\"index.wasm\", 1, 2)),\n]).then(([pckUrl, wasmUrl]) => {\n    window.fetch = async function (url, ...args) {\n        if (url.endsWith(\"index.pck\")) {\n            return originalFetch(pckUrl, ...args);\n        } else if (url.endsWith(\"index.wasm\")) {\n            return originalFetch(wasmUrl, ...args);\n        } else {\n            return originalFetch(url, ...args);\n        }\n    };\n    window.godotrunfunction();\n});\n\t\t",
  "\nconst GODOT_CONFIG = {\"args\":[],\"canvasResizePolicy\":2,\"emscriptenPoolSize\":8,\"ensureCrossOriginIsolationHeaders\":true,\"executable\":\"index\",\"experimentalVK\":false,\"fileSizes\":{\"index.pck\":50031416,\"index.wasm\":36145869},\"focusCanvas\":true,\"gdextensionLibs\":[],\"godotPoolSize\":4,\"serviceWorker\":\"index.service.worker.js\"};\nconst GODOT_THREADS_ENABLED = false;\nconst engine = new Engine(GODOT_CONFIG);\n\nwindow.godotrunfunction = function() {\n\tconst statusOverlay = document.getElementById('status');\n\tconst statusProgress = document.getElementById('status-progress');\n\tconst statusNotice = document.getElementById('status-notice');\n\n\tlet initializing = true;\n\tlet statusMode = '';\n\n\tfunction setStatusMode(mode) {\n\t\tif (statusMode === mode || !initializing) {\n\t\t\treturn;\n\t\t}\n\t\tif (mode === 'hidden') {\n\t\t\tstatusOverlay.remove();\n\t\t\tinitializing = false;\n\t\t\treturn;\n\t\t}\n\t\tstatusOverlay.style.visibility = 'visible';\n\t\tstatusProgress.style.display = mode === 'progress' ? 'block' : 'none';\n\t\tstatusNotice.style.display = mode === 'notice' ? 'block' : 'none';\n\t\tstatusMode = mode;\n\t}\n\n\tfunction setStatusNotice(text) {\n\t\twhile (statusNotice.lastChild) {\n\t\t\tstatusNotice.removeChild(statusNotice.lastChild);\n\t\t}\n\t\tconst lines = text.split('\\n');\n\t\tlines.forEach((line) => {\n\t\t\tstatusNotice.appendChild(document.createTextNode(line));\n\t\t\tstatusNotice.appendChild(document.createElement('br'));\n\t\t});\n\t}\n\n\tfunction displayFailureNotice(err) {\n\t\tconsole.error(err);\n\t\tif (err instanceof Error) {\n\t\t\tsetStatusNotice(err.message);\n\t\t} else if (typeof err === 'string') {\n\t\t\tsetStatusNotice(err);\n\t\t} else {\n\t\t\tsetStatusNotice('An unknown error occurred.');\n\t\t}\n\t\tsetStatusMode('notice');\n\t\tinitializing = false;\n\t}\n\n\tconst missing = Engine.getMissingFeatures({\n\t\tthreads: GODOT_THREADS_ENABLED,\n\t});\n\n\tif (missing.length !== 0) {\n\t\tif (GODOT_CONFIG['serviceWorker'] && GODOT_CONFIG['ensureCrossOriginIsolationHeaders'] && 'serviceWorker' in navigator) {\n\t\t\tlet serviceWorkerRegistrationPromise;\n\t\t\ttry {\n\t\t\t\tserviceWorkerRegistrationPromise = navigator.serviceWorker.getRegistration();\n\t\t\t} catch (err) {\n\t\t\t\tserviceWorkerRegistrationPromise = Promise.reject(new Error('Service worker registration failed.'));\n\t\t\t}\n\t\t\t// There's a chance that installing the service worker would fix the issue\n\t\t\tPromise.race([\n\t\t\t\tserviceWorkerRegistrationPromise.then((registration) => {\n\t\t\t\t\tif (registration != null) {\n\t\t\t\t\t\treturn Promise.reject(new Error('Service worker already exists.'));\n\t\t\t\t\t}\n\t\t\t\t\treturn registration;\n\t\t\t\t}).then(() => engine.installServiceWorker()),\n\t\t\t\t// For some reason, `getRegistration()` can stall\n\t\t\t\tnew Promise((resolve) => {\n\t\t\t\t\tsetTimeout(() => resolve(), 2000);\n\t\t\t\t}),\n\t\t\t]).then(() => {\n\t\t\t\t// Reload if there was no error.\n\t\t\t\twindow.location.reload();\n\t\t\t}).catch((err) => {\n\t\t\t\tconsole.error('Error while registering service worker:', err);\n\t\t\t});\n\t\t} else {\n\t\t\t// Display the message as usual\n\t\t\tconst missingMsg = 'Error\\nThe following features required to run Godot projects on the Web are missing:\\n';\n\t\t\tdisplayFailureNotice(missingMsg + missing.join('\\n'));\n\t\t}\n\t} else {\n\t\tsetStatusMode('progress');\n\t\tengine.startGame({\n\t\t\t'onProgress': function (current, total) {\n\t\t\t\tif (current > 0 && total > 0) {\n\t\t\t\t\tstatusProgress.value = current;\n\t\t\t\t\tstatusProgress.max = total;\n\t\t\t\t} else {\n\t\t\t\t\tstatusProgress.removeAttribute('value');\n\t\t\t\t\tstatusProgress.removeAttribute('max');\n\t\t\t\t}\n\t\t\t},\n\t\t}).then(() => {\n\t\t\tsetStatusMode('hidden');\n\t\t\twindow.loadingtexta.remove();\n\t\t}, displayFailureNotice);\n\t}\n};\n\t\t"
];

function runInlineScripts(){
    inlineScripts.forEach(code => {
        const s = document.createElement("script");
        s.textContent = code;
        document.body.appendChild(s);
    });

    if(typeof onAllScriptsLoaded === "function"){
        onAllScriptsLoaded();
    }
}

loadScriptsSequentially([...externalScripts], runInlineScripts);
})();
