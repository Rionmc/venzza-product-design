/* Venzza prototype controls.
   Added to every screen of the exported prototype (not part of the design).
   Start here · where you are · previous/next in this section · show clickable areas · restart · hide. */
(function () {
  var MAP = window.__VZ_MAP || { screens: {}, start: 'PN-Flow.dc.html' };
  var file = decodeURIComponent((location.pathname.split('/').pop() || '').split('?')[0]) || 'index.html';
  var me = MAP.screens[file] || null;
  var store = {
    get: function (k) { try { return localStorage.getItem('vzpb-' + k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem('vzpb-' + k, v); } catch (e) {} }
  };

  var ICON = {
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
    prev: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
    links: '<path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4Z"/>',
    restart: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    hide: '<path d="M18 6 6 18M6 6l12 12"/>',
    show: '<path d="M4 6h16M4 12h16M4 18h10"/>'
  };
  function svg(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + '</svg>'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var CSS = [
    ':host{all:initial}',
    '*{box-sizing:border-box}',
    '.bar,.tab,.toast{font:500 13px/1.3 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#F5F6F7}',
    '.bar{position:fixed;left:16px;bottom:16px;display:flex;align-items:center;gap:4px;padding:5px;border-radius:12px;background:rgba(24,26,29,.94);border:1px solid #33373C;box-shadow:0 12px 32px rgba(0,0,0,.45);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:calc(100vw - 32px)}',
    'button,a.btn{all:unset;box-sizing:border-box;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 10px;border-radius:8px;cursor:pointer;color:#E3E5E8;white-space:nowrap}',
    'button:hover,a.btn:hover{background:#2A2D31;color:#fff}',
    'button:focus-visible,a.btn:focus-visible{outline:2px solid #C8FF2C;outline-offset:1px}',
    'button[disabled]{opacity:.35;cursor:default;background:none}',
    'button.ic{width:32px;padding:0;justify-content:center}',
    'button[aria-pressed="true"]{background:#2A3A52;color:#BFE0FF}',
    'svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}',
    '.sep{width:1px;height:20px;background:#33373C;margin:0 4px;flex:none}',
    '.where{display:flex;flex-direction:column;min-width:0;max-width:340px;padding:0 6px}',
    '.where small{font-size:11px;color:#9AA0A6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.where b{font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.tab{position:fixed;left:16px;bottom:16px}',
    '.tab button{height:32px;padding:0 12px;border-radius:999px;background:rgba(24,26,29,.94);border:1px solid #33373C;box-shadow:0 8px 24px rgba(0,0,0,.4)}',
    '.toast{position:fixed;left:16px;bottom:72px;padding:10px 14px;border-radius:10px;background:#F5F6F7;color:#131517;box-shadow:0 8px 24px rgba(0,0,0,.35);opacity:0;transform:translateY(6px);transition:opacity .2s,transform .2s;pointer-events:none}',
    '.toast.on{opacity:1;transform:none}',
    '@media (max-width:900px){.lbl{display:none}.where{max-width:180px}}'
  ].join('');

  var LINKS_CSS = 'a[href],button:not([disabled]),[role="button"],[role="tab"],[role="menuitem"],input:not([type="hidden"]),select,textarea,summary{outline:2px solid rgba(64,156,255,.95)!important;outline-offset:2px!important;box-shadow:0 0 0 6px rgba(64,156,255,.18)!important}';

  function build() {
    var host = document.createElement('div');
    host.id = 'vz-proto-controls';
    host.setAttribute('data-vz-proto', '');
    document.body.appendChild(host);
    var root = host.attachShadow({ mode: 'open' });
    var hidden = store.get('hidden') === '1';
    var links = store.get('links') === '1';
    var linkStyle = null;

    function setLinks(on) {
      links = on; store.set('links', on ? '1' : '0');
      if (on && !linkStyle) { linkStyle = document.createElement('style'); linkStyle.textContent = LINKS_CSS; document.head.appendChild(linkStyle); }
      if (!on && linkStyle) { linkStyle.remove(); linkStyle = null; }
    }

    function render() {
      var s = me || { t: document.title || file, s: 'Not on the prototype map' };
      var prev = me && me.prev, next = me && me.next;
      root.innerHTML = '<style>' + CSS + '</style>' + (hidden
        ? '<div class="tab"><button type="button" data-a="show" aria-label="Show prototype controls">' + svg('show') + 'Prototype</button></div>'
        : '<nav class="bar" aria-label="Prototype controls">'
          + '<a class="btn" href="' + esc(MAP.start) + '" title="Back to the prototype map">' + svg('map') + '<span class="lbl">Start here</span></a>'
          + '<span class="sep"></span>'
          + '<button type="button" class="ic" data-a="prev" aria-label="Previous screen in this section"' + (prev ? ' title="' + esc(MAP.screens[prev].t) + '"' : ' disabled') + '>' + svg('prev') + '</button>'
          + '<div class="where"><small>' + esc(s.s) + '</small><b title="' + esc(s.t) + '">' + esc(s.t) + '</b></div>'
          + '<button type="button" class="ic" data-a="next" aria-label="Next screen in this section"' + (next ? ' title="' + esc(MAP.screens[next].t) + '"' : ' disabled') + '>' + svg('next') + '</button>'
          + '<span class="sep"></span>'
          + '<button type="button" data-a="links" aria-pressed="' + links + '" title="Outline everything you can click">' + svg('links') + '<span class="lbl">Show clickable</span></button>'
          + '<button type="button" data-a="restart" title="Reset this screen to its starting state">' + svg('restart') + '<span class="lbl">Restart</span></button>'
          + '<button type="button" class="ic" data-a="hide" aria-label="Hide prototype controls" title="Hide controls">' + svg('hide') + '</button>'
          + '</nav>')
        + '<div class="toast" role="status" aria-live="polite"></div>';
    }

    var toastT;
    function toast(msg) {
      var t = root.querySelector('.toast'); if (!t) return;
      t.textContent = msg; t.classList.add('on');
      clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2600);
    }

    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-a]'); if (!b || b.disabled) return;
      var a = b.getAttribute('data-a');
      if (a === 'prev' && me && me.prev) location.href = me.prev;
      if (a === 'next' && me && me.next) location.href = me.next;
      if (a === 'links') { setLinks(!links); render(); }
      if (a === 'hide') { hidden = true; store.set('hidden', '1'); render(); }
      if (a === 'show') { hidden = false; store.set('hidden', '0'); render(); }
      if (a === 'restart') {
        try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf('vzpb-') !== 0) localStorage.removeItem(k); }); } catch (err) {}
        try { sessionStorage.clear(); } catch (err) {}
        location.replace(location.pathname);
      }
    });

    // Links to screens that aren't part of this export stay on the page and explain why.
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.closest('[data-vz-proto]')) return;
      var h = (a.getAttribute('href') || '').replace(/^\.?\//, '').split('#')[0].split('?')[0];
      if (!/\.dc\.html$/.test(h)) return;
      if (!MAP.screens[h] && MAP.all.indexOf(h) === -1) { e.preventDefault(); e.stopPropagation(); toast('That screen isn’t part of this prototype.'); }
    }, true);

    setLinks(links);
    render();
  }

  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
