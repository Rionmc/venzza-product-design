/* Venzza living prototype.
   Loaded ONLY by the Proto-*.dc.html boards (Prototype flows page). Screens check `window.VzProto`;
   on every other board it is undefined and they keep their sample data.
   - Memory: what a first-time user creates is kept in this browser (localStorage), shared by all prototype boards.
   - Routing: links inside a prototype board are rewritten on click so the user stays inside the prototype. */
(function () {
  var KEY = 'vz-proto-v1';
  function blank() { return { v: 1, projects: [], campaigns: [], cur: {}, intent: null }; }
  function load() {
    try { var d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d && d.v === 1) return d; } catch (e) {}
    return blank();
  }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function find(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function put(kind, obj) {
    var d = load(), list = d[kind], cur = find(list, obj.id);
    obj.updated = Date.now();
    if (cur) Object.assign(cur, obj); else list.push(Object.assign({ created: Date.now() }, obj));
    d.cur[kind === 'projects' ? 'project' : 'campaign'] = obj.id;
    d.cur.editing = obj._editing ? { kind: kind, id: obj.id } : d.cur.editing;
    save(d); return find(load()[kind], obj.id);
  }
  function current(kind) {
    var d = load(), list = d[kind], id = d.cur[kind === 'projects' ? 'project' : 'campaign'];
    return find(list, id) || list[list.length - 1] || null;
  }

  var P = {
    on: true,
    data: load,
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} },
    newId: function (p) { return p + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36); },
    hasAny: function () { var d = load(); return d.projects.length + d.campaigns.length > 0; },
    project: function () { return current('projects'); },
    campaign: function () { return current('campaigns'); },
    putProject: function (o) { return put('projects', o); },
    putCampaign: function (o) { return put('campaigns', o); },
    remove: function (kind, id) { var d = load(); d[kind] = d[kind].filter(function (x) { return x.id !== id; }); save(d); },
    setCurrent: function (kind, id) { var d = load(); d.cur[kind] = id; save(d); },
    intent: function (v) { var d = load(); d.intent = v; save(d); },
    takeIntent: function () { var d = load(), v = d.intent; if (v) { d.intent = null; save(d); } return v; },
    ago: function (t) {
      var s = Math.max(0, (Date.now() - (t || 0)) / 1000);
      if (s < 60) return 'Just now'; if (s < 3600) return Math.floor(s / 60) + 'm ago';
      if (s < 86400) return Math.floor(s / 3600) + 'h ago'; return Math.floor(s / 86400) + 'd ago';
    },
    grad: function (id) {
      var G = ['linear-gradient(135deg,#0f4c81,#2a9d8f)', 'linear-gradient(135deg,#6a2c70,#c0455e)', 'linear-gradient(135deg,#3a1c71,#4a3f8c)', 'linear-gradient(135deg,#1e6b5c,#3a1c71)', 'linear-gradient(135deg,#b4705a,#7a4a3a)'];
      var h = 0; for (var i = 0; i < (id || '').length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0; return G[h % G.length];
    },
    fmtDates: function (a, b) {
      function f(iso) { if (!iso) return ''; var p = iso.split('-').map(Number); if (!p[1]) return iso; return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][p[1] - 1] + ' ' + p[2] + (p[0] ? ', ' + p[0] : ''); }
      return a ? f(a) + (b ? ' – ' + f(b) : '') : '';
    }
  };

  // ---- routing: keep every click inside the prototype ----
  var HOME = /^(HomeReturning|HomeFirstRun|Main-xcm4|Main-xcm4-5buw|ProjectOnboarding-Home|HomeDraftSaved|Home-DraftSaved\w*|Proto-Home|Proto-Welcome)\.dc\.html$/;
  function route(a) {
    var href = a.getAttribute('href') || '';
    if (!/\.dc\.html(\?|#|$)/.test(href)) return null;
    var name = href.replace(/[?#].*$/, '');
    var holder = a.closest && a.closest('[data-proto-id]');
    if (holder && holder.getAttribute('data-proto-id')) P.setCurrent(holder.getAttribute('data-proto-kind') === 'campaign' ? 'campaign' : 'project', holder.getAttribute('data-proto-id'));
    if (a.hasAttribute('data-proto-reset')) { P.reset(); return 'Proto-Welcome.dc.html'; }
    if (a.classList && a.classList.contains('ob-discard')) {
      var e = load().cur.editing; if (e) P.remove(e.kind, e.id);
    }
    if (HOME.test(name)) return P.hasAny() ? 'Proto-Home.dc.html' : 'Proto-Welcome.dc.html';
    if (/^ProjectsList/.test(name)) return 'Proto-Projects.dc.html';
    if (name === 'ProjectForm.dc.html') { P.intent({ start: 'project' }); return 'Proto-NewProject.dc.html'; }
    if (/^ProjectForm/.test(name)) return 'Proto-Project.dc.html';
    if (/^ProjectOnboarding/.test(name)) {
      P.intent(/^ProjectOnboarding(-Intro)?\.dc\.html$/.test(name) ? { start: 'project' } : { resume: 'project' });
      return 'Proto-NewProject.dc.html';
    }
    if (/^Onboarding/.test(name)) {
      P.intent(/^Onboarding(-Intro|-BasicsEmpty)?\.dc\.html$/.test(name) ? { start: 'campaign' } : { resume: 'campaign' });
      return 'Proto-NewCampaign.dc.html';
    }
    if (/^ProjectDetail/.test(name)) {
      var m = { 'ProjectDetail-DraftPackage.dc.html': 'pkg-new', 'ProjectDetail-DraftChecklist.dc.html': 'checklist', 'ProjectDetail-WorkingPreview.dc.html': 'preview', 'ProjectDetail-Sponsor.dc.html': 'preview' }[name];
      if (m) P.intent({ project: m });
      return 'Proto-Project.dc.html';
    }
    if (/^CampaignsList/.test(name)) return 'Proto-Campaigns.dc.html';
    if (/^Campaign/.test(name)) {
      var inNav = a.closest && a.closest('.vzhdr');
      return inNav ? 'Proto-Campaigns.dc.html' : 'Proto-Campaign.dc.html';
    }
    if (/^Marketplace/.test(name)) return 'Proto-Marketplace.dc.html';
    return null;
  }
  window.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var to = route(a);
    if (to) a.setAttribute('href', to);
  }, true);

  window.VzProto = P;
})();
