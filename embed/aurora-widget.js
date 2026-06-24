/* ============================================================
   AURORA WIDGET — botón flotante + popup para incrustar la demo
   en CUALQUIER web existente, SIN tocar su diseño.
   Uso (una línea en la web del cliente, antes de </body>):
     <script src="https://lualeji7509-del.github.io/clinica-aurora-demo/embed/aurora-widget.js"
             data-demo="https://lualeji7509-del.github.io/clinica-aurora-demo/"
             data-label="Tour con voz"></script>
   - data-demo  : URL de la demo de ESE cliente (cambiar por la suya).
   - data-label : texto del botón (opcional).
   ============================================================ */
(function () {
  var cur = document.currentScript || (function () {
    var s = document.getElementsByTagName('script'); return s[s.length - 1];
  })();
  var DEMO  = (cur && cur.getAttribute('data-demo'))  || 'https://lualeji7509-del.github.io/clinica-aurora-demo/';
  var LABEL = (cur && cur.getAttribute('data-label')) || 'Tour con voz';

  var css = '' +
  '#auFab{position:fixed;right:18px;bottom:18px;z-index:2147483000;display:flex;align-items:center;gap:9px;' +
    'background:linear-gradient(135deg,#C9A24B,#e0bd6e);color:#0E3A3A;border:none;border-radius:999px;' +
    'padding:13px 20px;font:800 15px/1 Inter,-apple-system,Segoe UI,sans-serif;cursor:pointer;' +
    'box-shadow:0 12px 34px rgba(201,162,75,.55);animation:auBob 2.6s ease-in-out infinite}' +
  '#auFab:hover{filter:brightness(1.05)}' +
  '#auFab .pl{font-size:13px}' +
  '@keyframes auBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
  '#auFab .pulse{position:absolute;inset:0;border-radius:999px;box-shadow:0 0 0 0 rgba(201,162,75,.55);animation:auPulse 2.2s infinite}' +
  '@keyframes auPulse{0%{box-shadow:0 0 0 0 rgba(201,162,75,.5)}70%{box-shadow:0 0 0 16px rgba(201,162,75,0)}100%{box-shadow:0 0 0 0 rgba(201,162,75,0)}}' +
  '#auOv{position:fixed;inset:0;z-index:2147483001;background:rgba(6,20,15,.8);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);display:none;align-items:center;justify-content:center;padding:16px}' +
  '#auOv.on{display:flex;animation:auFade .25s ease}' +
  '@keyframes auFade{from{opacity:0}to{opacity:1}}' +
  '#auBox{position:relative;width:min(94vw,440px);height:min(92vh,900px);border-radius:26px;overflow:hidden;box-shadow:0 30px 90px rgba(0,0,0,.6);background:#06140f}' +
  '#auBox iframe{width:100%;height:100%;border:0;display:block}' +
  '#auX{position:absolute;top:12px;right:12px;z-index:3;width:40px;height:40px;border-radius:50%;border:none;' +
    'background:rgba(0,0,0,.5);color:#fff;font-size:20px;line-height:40px;cursor:pointer;padding:0}' +
  '#auX:hover{background:rgba(0,0,0,.7)}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var fab = document.createElement('button');
  fab.id = 'auFab';
  fab.innerHTML = '<span class="pulse"></span><span class="pl">▶</span><span>' + LABEL + '</span>';

  var ov = document.createElement('div');
  ov.id = 'auOv';
  ov.innerHTML = '<div id="auBox"><button id="auX" aria-label="Cerrar">&#10005;</button>' +
                 '<iframe id="auIfr" allow="autoplay; fullscreen" title="Demo interactiva"></iframe></div>';

  function open() {
    var ifr = ov.querySelector('#auIfr');
    if (!ifr.getAttribute('src')) ifr.setAttribute('src', DEMO);
    ov.classList.add('on');
    document.documentElement.style.overflow = 'hidden';
  }
  function close() {
    ov.classList.remove('on');
    document.documentElement.style.overflow = '';
    ov.querySelector('#auIfr').setAttribute('src', ''); // detiene la voz al cerrar
  }

  function mount() {
    document.body.appendChild(fab);
    document.body.appendChild(ov);
    fab.addEventListener('click', open);
    ov.querySelector('#auX').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
