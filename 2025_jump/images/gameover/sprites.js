
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
		"frame": {"x":647, "y":425, "w":148, "h":199},
		"spriteSourceSize": {"x":48,"y":24,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"2L.png": {
		"frame": {"x":940, "y":557, "w":129, "h":195},
		"spriteSourceSize": {"x":50,"y":26,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"3L.png": {
		"frame": {"x":915, "y":349, "w":129, "h":207},
		"spriteSourceSize": {"x":50,"y":14,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"4L.png": {
		"frame": {"x":795, "y":625, "w":144, "h":204},
		"spriteSourceSize": {"x":50,"y":17,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"5L.png": {
		"frame": {"x":647, "y":625, "w":147, "h":195},
		"spriteSourceSize": {"x":47,"y":26,"w":244,"h":244},
		"sourceSize": {"w":244,"h":244}
	},
	"Popup_bg.png": {
		"frame": {"x":0, "y":0, "w":646, "h":906},
		"spriteSourceSize": {"x":0,"y":0,"w":646,"h":906},
		"sourceSize": {"w":646,"h":906}
	},
	"bg_list_gra.png": {
		"frame": {"x":0, "y":1226, "w":159, "h":21},
		"spriteSourceSize": {"x":0,"y":0,"w":159,"h":21},
		"sourceSize": {"w":159,"h":21}
	},
	"bg_myrecord.png": {
		"frame": {"x":0, "y":1007, "w":563, "h":86},
		"spriteSourceSize": {"x":0,"y":0,"w":563,"h":86},
		"sourceSize": {"w":563,"h":86}
	},
	"bg_slot.png": {
		"frame": {"x":796, "y":557, "w":67, "h":67},
		"spriteSourceSize": {"x":0,"y":0,"w":67,"h":67},
		"sourceSize": {"w":67,"h":67}
	},
	"bg_slot_line.png": {
		"frame": {"x":0, "y":1099, "w":441, "h":2},
		"spriteSourceSize": {"x":0,"y":0,"w":441,"h":2},
		"sourceSize": {"w":441,"h":2}
	},
	"bg_txt_record.png": {
		"frame": {"x":0, "y":1182, "w":185, "h":43},
		"spriteSourceSize": {"x":0,"y":0,"w":185,"h":43},
		"sourceSize": {"w":185,"h":43}
	},
	"btn_post.png": {
		"frame": {"x":0, "y":1102, "w":293, "h":79},
		"spriteSourceSize": {"x":0,"y":0,"w":293,"h":79},
		"sourceSize": {"w":293,"h":79}
	},
	"btn_restart.png": {
		"frame": {"x":602, "y":907, "w":273, "h":79},
		"spriteSourceSize": {"x":0,"y":0,"w":273,"h":79},
		"sourceSize": {"w":273,"h":79}
	},
	"btn_tap_off.png": {
		"frame": {"x":647, "y":349, "w":267, "h":75},
		"spriteSourceSize": {"x":0,"y":0,"w":267,"h":75},
		"sourceSize": {"w":267,"h":75}
	},
	"btn_tap_on.png": {
		"frame": {"x":294, "y":1102, "w":267, "h":75},
		"spriteSourceSize": {"x":0,"y":0,"w":267,"h":75},
		"sourceSize": {"w":267,"h":75}
	},
	"img_1medal.png": {
		"frame": {"x":229, "y":1182, "w":41, "h":57},
		"spriteSourceSize": {"x":0,"y":0,"w":41,"h":57},
		"sourceSize": {"w":41,"h":57}
	},
	"img_2medal.png": {
		"frame": {"x":271, "y":1182, "w":41, "h":51},
		"spriteSourceSize": {"x":0,"y":3,"w":41,"h":57},
		"sourceSize": {"w":41,"h":57}
	},
	"img_3medal.png": {
		"frame": {"x":313, "y":1178, "w":40, "h":51},
		"spriteSourceSize": {"x":0,"y":3,"w":41,"h":57},
		"sourceSize": {"w":41,"h":57}
	},
	"img_top_star_01.png": {
		"frame": {"x":186, "y":1182, "w":42, "h":43},
		"spriteSourceSize": {"x":2,"y":5,"w":49,"h":54},
		"sourceSize": {"w":49,"h":54}
	},
	"img_top_star_02.png": {
		"frame": {"x":354, "y":1178, "w":26, "h":27},
		"spriteSourceSize": {"x":0,"y":0,"w":26,"h":27},
		"sourceSize": {"w":26,"h":27}
	},
	"img_top_star_03.png": {
		"frame": {"x":160, "y":1226, "w":10, "h":10},
		"spriteSourceSize": {"x":0,"y":0,"w":10,"h":10},
		"sourceSize": {"w":10,"h":10}
	},
	"img_top_stars.png": {
		"frame": {"x":564, "y":1007, "w":516, "h":171},
		"spriteSourceSize": {"x":0,"y":5,"w":516,"h":176},
		"sourceSize": {"w":516,"h":176}
	},
	"img_top_trophy.png": {
		"frame": {"x":647, "y":0, "w":605, "h":348},
		"spriteSourceSize": {"x":0,"y":5,"w":605,"h":353},
		"sourceSize": {"w":605,"h":353}
	},
	"list_line.png": {
		"frame": {"x":0, "y":1094, "w":458, "h":4},
		"spriteSourceSize": {"x":0,"y":0,"w":458,"h":4},
		"sourceSize": {"w":458,"h":4}
	},
	"slot_point.png": {
		"frame": {"x":0, "y":907, "w":601, "h":99},
		"spriteSourceSize": {"x":0,"y":0,"w":601,"h":99},
		"sourceSize": {"w":601,"h":99}
	}

},
"meta": {
	"image": "sprites.png",
	"size": {"w": 1253, "h": 1248},
	"scale": "1"
}
}