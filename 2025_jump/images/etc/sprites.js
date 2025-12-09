
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
	"obj_alien.png": {
		"frame": {"x":979, "y":626, "w":291, "h":341},
		"spriteSourceSize": {"x":0,"y":0,"w":291,"h":341},
		"sourceSize": {"w":291,"h":341}
	},
	"obj_lemon.png": {
		"frame": {"x":0, "y":710, "w":342, "h":328},
		"spriteSourceSize": {"x":0,"y":0,"w":342,"h":328},
		"sourceSize": {"w":342,"h":328}
	},
	"obj_lemon2.png": {
		"frame": {"x":343, "y":710, "w":334, "h":330},
		"spriteSourceSize": {"x":0,"y":0,"w":334,"h":330},
		"sourceSize": {"w":334,"h":330}
	},
	"obj_lime.png": {
		"frame": {"x":381, "y":355, "w":311, "h":303},
		"spriteSourceSize": {"x":0,"y":0,"w":311,"h":303},
		"sourceSize": {"w":311,"h":303}
	},
	"obj_lime2.png": {
		"frame": {"x":382, "y":0, "w":309, "h":302},
		"spriteSourceSize": {"x":0,"y":0,"w":309,"h":302},
		"sourceSize": {"w":309,"h":302}
	},
	"obj_moon.png": {
		"frame": {"x":991, "y":0, "w":259, "h":277},
		"spriteSourceSize": {"x":0,"y":0,"w":259,"h":277},
		"sourceSize": {"w":259,"h":277}
	},
	"obj_orange.png": {
		"frame": {"x":678, "y":659, "w":300, "h":358},
		"spriteSourceSize": {"x":0,"y":0,"w":300,"h":358},
		"sourceSize": {"w":300,"h":358}
	},
	"obj_orange2.png": {
		"frame": {"x":692, "y":0, "w":298, "h":346},
		"spriteSourceSize": {"x":0,"y":0,"w":298,"h":346},
		"sourceSize": {"w":298,"h":346}
	},
	"obj_spaceship01.png": {
		"frame": {"x":678, "y":1018, "w":291, "h":273},
		"spriteSourceSize": {"x":7,"y":74,"w":300,"h":400},
		"sourceSize": {"w":300,"h":400}
	},
	"obj_spaceship02.png": {
		"frame": {"x":693, "y":347, "w":291, "h":278},
		"spriteSourceSize": {"x":7,"y":74,"w":300,"h":400},
		"sourceSize": {"w":300,"h":400}
	},
	"obj_spaceship03.png": {
		"frame": {"x":985, "y":347, "w":291, "h":278},
		"spriteSourceSize": {"x":7,"y":74,"w":300,"h":400},
		"sourceSize": {"w":300,"h":400}
	},
	"obj_spaceship04.png": {
		"frame": {"x":979, "y":968, "w":291, "h":282},
		"spriteSourceSize": {"x":7,"y":74,"w":300,"h":400},
		"sourceSize": {"w":300,"h":400}
	},
	"obj_star.png": {
		"frame": {"x":0, "y":0, "w":381, "h":354},
		"spriteSourceSize": {"x":0,"y":0,"w":381,"h":354},
		"sourceSize": {"w":381,"h":354}
	},
	"obj_star2.png": {
		"frame": {"x":0, "y":355, "w":380, "h":354},
		"spriteSourceSize": {"x":0,"y":0,"w":380,"h":354},
		"sourceSize": {"w":380,"h":354}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 1277, "h": 1292},
	"scale": "1"
}
}