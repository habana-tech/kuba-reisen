/*!
 * Kuba-reisen v0.0.1
 * Kuba-reisen website.
 * (c) 2019 HabanaTech
 * MIT License
 * https://github.com/habana-tech/kuba-reisen.git
 */

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
(function() {
	/* In animations (to close icon) */

	var beginAC = 80,
		endAC = 320,
		beginB = 80,
		endB = 320;

	function inAC(s) {
		s.draw('80% - 240', '80%', 0.3, {
			delay: 0.1,
			callback: function() {
				inAC2(s)
			}
		});
	}

	function inAC2(s) {
		s.draw('100% - 545', '100% - 305', 0.6, {
			easing: ease.ease('elastic-out', 1, 0.3)
		});
	}

	function inB(s) {
		s.draw(beginB - 60, endB + 60, 0.1, {
			callback: function() {
				inB2(s)
			}
		});
	}

	function inB2(s) {
		s.draw(beginB + 120, endB - 120, 0.3, {
			easing: ease.ease('bounce-out', 1, 0.3)
		});
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
		s.draw('90% - 240', '90%', 0.1, {
			easing: ease.ease('elastic-in', 1, 0.3),
			callback: function() {
				outAC2(s)
			}
		});
	}

	function outAC2(s) {
		s.draw('20% - 240', '20%', 0.3, {
			callback: function() {
				outAC3(s)
			}
		});
	}

	function outAC3(s) {
		s.draw(beginAC, endAC, 0.7, {
			easing: ease.ease('elastic-out', 1, 0.3)
		});
	}

	function outB(s) {
		s.draw(beginB, endB, 0.7, {
			delay: 0.1,
			easing: ease.ease('elastic-out', 2, 0.4)
		});
	}


	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}

	/* Awesome burger scaled */

	var pathA = document.getElementById('burger_pathA'),
		pathB = document.getElementById('burger_pathB'),
		pathC = document.getElementById('burger_pathC'),
		segmentA = new Segment(pathA, beginAC, endAC),
		segmentB = new Segment(pathB, beginB, endB),
		segmentC = new Segment(pathC, beginAC, endAC),
		wrapper = document.getElementById('menu-icon-wrapper'),
		trigger = document.getElementById('menu-icon-trigger'),
		toCloseIcon = true,
		dummy = document.getElementById('navigation_menu');

	wrapper.style.visibility = 'visible';

	trigger.onclick = function() {
		addScale(wrapper);
		if (toCloseIcon) {
			inAC(segmentA);
			inB(segmentB);
			inAC(segmentC);

			/*****Active menu container **/
			dummy.className = 'navigation_menu navigation_menu--active swing-in-right-bck';
		} else {
			outAC(segmentA);
			outB(segmentB);
			outAC(segmentC);

			dummy.className = 'navigation_menu swing-in-right-bck-reverse';
		}
		toCloseIcon = !toCloseIcon;
	};

})();
