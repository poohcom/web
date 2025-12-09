
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
	"bg.png": {
		"frame": {"x":0, "y":0, "w":720, "h":1280},
		"spriteSourceSize": {"x":0,"y":0,"w":720,"h":1280},
		"sourceSize": {"w":720,"h":1280}
	},
	"gauge_full.png": {
		"frame": {"x":721, "y":55, "w":428, "h":27},
		"spriteSourceSize": {"x":15,"y":15,"w":457,"h":56},
		"sourceSize": {"w":457,"h":56}
	},
	"gauge_full_bgs.png": {
		"frame": {"x":721, "y":0, "w":455, "h":54},
		"spriteSourceSize": {"x":1,"y":1,"w":457,"h":56},
		"sourceSize": {"w":457,"h":56}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 1177, "h": 1281},
	"scale": "1"
}
}