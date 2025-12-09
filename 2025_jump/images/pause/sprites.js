
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
	"bg_popup.png": {
		"frame": {"x":0, "y":0, "w":454, "h":605},
		"spriteSourceSize": {"x":0,"y":0,"w":454,"h":605},
		"sourceSize": {"w":454,"h":605}
	},
	"btn_2.png": {
		"frame": {"x":0, "y":606, "w":309, "h":91},
		"spriteSourceSize": {"x":0,"y":0,"w":309,"h":91},
		"sourceSize": {"w":309,"h":91}
	},
	"btn_toggle.png": {
		"frame": {"x":310, "y":606, "w":289, "h":61},
		"spriteSourceSize": {"x":0,"y":0,"w":289,"h":61},
		"sourceSize": {"w":289,"h":61}
	},
	"btn_toggle_bgm_OFF.png": {
		"frame": {"x":455, "y":407, "w":75, "h":74},
		"spriteSourceSize": {"x":0,"y":0,"w":75,"h":74},
		"sourceSize": {"w":75,"h":74}
	},
	"btn_toggle_bgm_ON.png": {
		"frame": {"x":455, "y":482, "w":75, "h":74},
		"spriteSourceSize": {"x":0,"y":0,"w":75,"h":74},
		"sourceSize": {"w":75,"h":74}
	},
	"btn_toggle_sound_OFF.png": {
		"frame": {"x":531, "y":332, "w":75, "h":74},
		"spriteSourceSize": {"x":0,"y":0,"w":75,"h":74},
		"sourceSize": {"w":75,"h":74}
	},
	"btn_toggle_sound_ON.png": {
		"frame": {"x":455, "y":332, "w":75, "h":74},
		"spriteSourceSize": {"x":0,"y":0,"w":75,"h":74},
		"sourceSize": {"w":75,"h":74}
	},
	"dim.png": {
		"frame": {"x":455, "y":228, "w":103, "h":103},
		"spriteSourceSize": {"x":0,"y":0,"w":103,"h":103},
		"sourceSize": {"w":103,"h":103}
	},
	"obj_title.png": {
		"frame": {"x":455, "y":102, "w":118, "h":125},
		"spriteSourceSize": {"x":0,"y":0,"w":118,"h":125},
		"sourceSize": {"w":118,"h":125}
	},
	"title.png": {
		"frame": {"x":455, "y":0, "w":276, "h":101},
		"spriteSourceSize": {"x":0,"y":0,"w":276,"h":101},
		"sourceSize": {"w":276,"h":101}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 732, "h": 698},
	"scale": "1"
}
}