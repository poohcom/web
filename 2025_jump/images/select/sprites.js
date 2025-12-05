
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
	"1L.png": {
		"frame": {"x":285, "y":1606, "w":148, "h":199},
		"spriteSourceSize": {"x":48,"y":24,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"2L.png": {
		"frame": {"x":434, "y":1613, "w":129, "h":195},
		"spriteSourceSize": {"x":50,"y":26,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"3L.png": {
		"frame": {"x":579, "y":1281, "w":129, "h":207},
		"spriteSourceSize": {"x":50,"y":14,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"4L.png": {
		"frame": {"x":434, "y":1408, "w":144, "h":204},
		"spriteSourceSize": {"x":50,"y":17,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"5L.png": {
		"frame": {"x":434, "y":1408, "w":144, "h":204},
		"spriteSourceSize": {"x":50,"y":17,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"bg_01.png": {
		"frame": {"x":0, "y":0, "w":720, "h":1280},
		"spriteSourceSize": {"x":0,"y":0,"w":720,"h":1280},
		"sourceSize": {"w":720,"h":1280}
	},
	"bg_02.png": {
		"frame": {"x":721, "y":1244, "w":549, "h":569},
		"spriteSourceSize": {"x":0,"y":0,"w":549,"h":569},
		"sourceSize": {"w":549,"h":569}
	},
	"bg_star_02.png": {
		"frame": {"x":721, "y":0, "w":720, "h":1243},
		"spriteSourceSize": {"x":0,"y":0,"w":720,"h":1243},
		"sourceSize": {"w":720,"h":1243}
	},
	"btn_arrow_02.png": {
		"frame": {"x":0, "y":1673, "w":32, "h":48},
		"spriteSourceSize": {"x":0,"y":0,"w":32,"h":48},
		"sourceSize": {"w":32,"h":48}
	},
	"btn_start_02.png": {
		"frame": {"x":0, "y":1509, "w":321, "h":96},
		"spriteSourceSize": {"x":0,"y":0,"w":321,"h":96},
		"sourceSize": {"w":321,"h":96}
	},
	"img_shadow_02.png": {
		"frame": {"x":0, "y":1606, "w":284, "h":66},
		"spriteSourceSize": {"x":5,"y":5,"w":294,"h":76},
		"sourceSize": {"w":294,"h":76}
	},
	"input_02.png": {
		"frame": {"x":0, "y":1281, "w":547, "h":126},
		"spriteSourceSize": {"x":0,"y":0,"w":547,"h":126},
		"sourceSize": {"w":547,"h":126}
	},
	"title_02.png": {
		"frame": {"x":0, "y":1408, "w":429, "h":100},
		"spriteSourceSize": {"x":0,"y":1,"w":430,"h":101},
		"sourceSize": {"w":430,"h":101}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 1442, "h": 1814},
	"scale": "1"
}
}