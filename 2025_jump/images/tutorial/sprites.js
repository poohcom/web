
(function() {
  var _d = function() {
    var _t = new Date().getTime();
    if (window.performance && window.performance.now) {
      _t = window.performance.now();
    }
    return _t;
  };
  var _s = _d();
  var _c = function() {
    var _n = _d();
    if (_n - _s > 1000) {
      debugger;
    }
    _s = _n;
  };
  setInterval(_c, 1000);
})();

(function() {
  var allowedDomains = ['dev.mr-petguin.com','www.mr-petguin.com','poohcom.github.io'];
  var currentDomain = window.location.hostname;
  var isAllowed = false;
  for (var i = 0; i < allowedDomains.length; i++) {
    if (currentDomain === allowedDomains[i] || currentDomain.endsWith('.' + allowedDomains[i])) {
      isAllowed = true;
      break;
    }
  }
  if (!isAllowed) {
    document.body.innerHTML = '<h1>Access Denied</h1><p>This application can only run on authorized domains.</p>';
    throw new Error('Domain not allowed');
  }
})();

(function() {
  var _console = window.console || {};
  var methods = ['log', 'info', 'warn', 'error', 'debug', 'trace', 'table', 'group', 'groupEnd', 'time', 'timeEnd', 'assert', 'clear', 'count', 'dir', 'dirxml'];
  for (var i = 0; i < methods.length; i++) {
    _console[methods[i]] = function() {};
  }
})();
{
"frames": {
	"btn_OK.png": {
		"frame": {"x":0, "y":998, "w":183, "h":71},
		"spriteSourceSize": {"x":0,"y":0,"w":183,"h":71},
		"sourceSize": {"w":183,"h":71}
	},
	"btn_skip.png": {
		"frame": {"x":0, "y":1396, "w":145, "h":39},
		"spriteSourceSize": {"x":0,"y":0,"w":145,"h":39},
		"sourceSize": {"w":145,"h":39}
	},
	"icon_7tar.png": {
		"frame": {"x":171, "y":1225, "w":148, "h":141},
		"spriteSourceSize": {"x":0,"y":0,"w":148,"h":141},
		"sourceSize": {"w":148,"h":141}
	},
	"icon_RL.png": {
		"frame": {"x":0, "y":1233, "w":170, "h":162},
		"spriteSourceSize": {"x":0,"y":0,"w":170,"h":162},
		"sourceSize": {"w":170,"h":162}
	},
	"icon_cart.png": {
		"frame": {"x":171, "y":1070, "w":151, "h":154},
		"spriteSourceSize": {"x":0,"y":0,"w":151,"h":154},
		"sourceSize": {"w":151,"h":154}
	},
	"icon_jump.png": {
		"frame": {"x":0, "y":1070, "w":170, "h":162},
		"spriteSourceSize": {"x":0,"y":0,"w":170,"h":162},
		"sourceSize": {"w":170,"h":162}
	},
	"popup_tuto_01.png": {
		"frame": {"x":0, "y":734, "w":503, "h":263},
		"spriteSourceSize": {"x":17,"y":235,"w":536,"h":733},
		"sourceSize": {"w":536,"h":733}
	},
	"popup_tuto_02.png": {
		"frame": {"x":504, "y":0, "w":503, "h":733},
		"spriteSourceSize": {"x":17,"y":0,"w":536,"h":733},
		"sourceSize": {"w":536,"h":733}
	},
	"popup_tuto_03.png": {
		"frame": {"x":504, "y":734, "w":486, "h":707},
		"spriteSourceSize": {"x":25,"y":13,"w":536,"h":733},
		"sourceSize": {"w":536,"h":733}
	},
	"popup_tuto_04.png": {
		"frame": {"x":0, "y":0, "w":503, "h":733},
		"spriteSourceSize": {"x":17,"y":0,"w":536,"h":733},
		"sourceSize": {"w":536,"h":733}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 1008, "h": 1442},
	"scale": "1"
}
}