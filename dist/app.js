/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}

	const days = document.getElementById('days');
	const hours = document.getElementById('hours');
	const minutes = document.getElementById('minutes');
	const seconds = document.getElementById('seconds');
	const countdown = document.getElementById('countdown');
	const year = document.getElementById('year');
	const loading = document.getElementById('loading');

	const currentYear = new Date().getFullYear();

	const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

	year.innerText = currentYear + 1;

	function updateCountdown() {
		const currentTime = new Date();

		const diff = newYearTime - currentTime;

		const d = Math.floor(diff / 1000 / 60 / 60 / 24);
		const h = Math.floor(diff / 1000 / 60 / 60) % 24;
		const m = Math.floor(diff / 1000 / 60) % 60;
		const s = Math.floor(diff / 1000) % 60;

		days.innerHTML = d;
		hours.innerHTML = h < 10 ? '0' + h : h;
		minutes.innerHTML = m < 10 ? '0' + m : m;
		seconds.innerHTML = s < 10 ? '0' + s : s;
	}

	function createSnowflake() {
		const snowFlake = document.createElement('i');

		snowFlake.classList.add('fas');
		snowFlake.classList.add('fa-snowflake');
		snowFlake.style.left = Math.random() * window.innerWidth + 'px';
		snowFlake.style.opacity = Math.random();
		snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
		snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

		document.body.appendChild(snowFlake);

		setTimeout(() => {
			snowFlake.remove();
		}, 5000);
	}

	setInterval(createSnowflake, 1000);

	setTimeout(() => {
		loading.remove();
		countdown.style.display = 'flex';
	}, 1000);

	setInterval(createSnowflake, 1000);
	setInterval(updateCountdown, 1000);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsZ0JBQWdCOztBQUU1RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4uanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG5cdFx0Y29uc3QgcHJlbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkJyk7XG5cblx0XHRwcmVsb2FkLmNsYXNzTGlzdC5hZGQoJ3ByZWxvYWQtZmluaXNoZWQnKTtcblx0fSk7XG5cblx0Y29uc3QgYnRuU2Nyb2xsVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2Nyb2xsVG9Ub3AnKTtcblxuXHRpZiAoYnRuU2Nyb2xsVG9Ub3ApIHtcblx0XHRidG5TY3JvbGxUb1RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgZGF5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzJyk7XG5cdGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJzJyk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpO1xuXHRjb25zdCBzZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZHMnKTtcblx0Y29uc3QgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZG93bicpO1xuXHRjb25zdCB5ZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXInKTtcblx0Y29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nJyk7XG5cblx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cblx0Y29uc3QgbmV3WWVhclRpbWUgPSBuZXcgRGF0ZShgSmFudWFyeSAwMSAke2N1cnJlbnRZZWFyICsgMX0gMDA6MDA6MDBgKTtcblxuXHR5ZWFyLmlubmVyVGV4dCA9IGN1cnJlbnRZZWFyICsgMTtcblxuXHRmdW5jdGlvbiB1cGRhdGVDb3VudGRvd24oKSB7XG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Y29uc3QgZGlmZiA9IG5ld1llYXJUaW1lIC0gY3VycmVudFRpbWU7XG5cblx0XHRjb25zdCBkID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCk7XG5cdFx0Y29uc3QgaCA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDAgLyA2MCAvIDYwKSAlIDI0O1xuXHRcdGNvbnN0IG0gPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjApICUgNjA7XG5cdFx0Y29uc3QgcyA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApICUgNjA7XG5cblx0XHRkYXlzLmlubmVySFRNTCA9IGQ7XG5cdFx0aG91cnMuaW5uZXJIVE1MID0gaCA8IDEwID8gJzAnICsgaCA6IGg7XG5cdFx0bWludXRlcy5pbm5lckhUTUwgPSBtIDwgMTAgPyAnMCcgKyBtIDogbTtcblx0XHRzZWNvbmRzLmlubmVySFRNTCA9IHMgPCAxMCA/ICcwJyArIHMgOiBzO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlU25vd2ZsYWtlKCkge1xuXHRcdGNvbnN0IHNub3dGbGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuXHRcdHNub3dGbGFrZS5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcblx0XHRzbm93Rmxha2UuY2xhc3NMaXN0LmFkZCgnZmEtc25vd2ZsYWtlJyk7XG5cdFx0c25vd0ZsYWtlLnN0eWxlLmxlZnQgPSBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGggKyAncHgnO1xuXHRcdHNub3dGbGFrZS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5yYW5kb20oKTtcblx0XHRzbm93Rmxha2Uuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBNYXRoLnJhbmRvbSgpICogMyArIDIgKyAncyc7XG5cdFx0c25vd0ZsYWtlLnN0eWxlLmZvbnRTaXplID0gTWF0aC5yYW5kb20oKSAqIDEwICsgMTAgKyAncHgnO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzbm93Rmxha2UpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzbm93Rmxha2UucmVtb3ZlKCk7XG5cdFx0fSwgNTAwMCk7XG5cdH1cblxuXHRzZXRJbnRlcnZhbChjcmVhdGVTbm93Zmxha2UsIDEwMDApO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxvYWRpbmcucmVtb3ZlKCk7XG5cdFx0Y291bnRkb3duLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdH0sIDEwMDApO1xuXG5cdHNldEludGVydmFsKGNyZWF0ZVNub3dmbGFrZSwgMTAwMCk7XG5cdHNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgMTAwMCk7XG59KTtcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyMWhhVzR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0UlFVRkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN3MFEwRkJORU1zWjBKQlFXZENPenRCUVVVMVJEczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RFFVRkRJaXdpWm1sc1pTSTZJamc1TldFM1l6STBOMkpsT0dabFpEUmlPVEEzTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRndpTGk5emNtTXZhbk12YldGcGJpNXFjMXdpS1R0Y2JpSXNJbVJ2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMFJQVFVOdmJuUmxiblJNYjJGa1pXUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHNiMkZrSnl3Z0tHVXBJRDArSUh0Y2JseDBYSFJqYjI1emRDQndjbVZzYjJGa0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxuQnlaV3h2WVdRbktUdGNibHh1WEhSY2RIQnlaV3h2WVdRdVkyeGhjM05NYVhOMExtRmtaQ2duY0hKbGJHOWhaQzFtYVc1cGMyaGxaQ2NwTzF4dVhIUjlLVHRjYmx4dVhIUmpiMjV6ZENCaWRHNVRZM0p2Ykd4VWIxUnZjQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RpZEc1VFkzSnZiR3hVYjFSdmNDY3BPMXh1WEc1Y2RHbG1JQ2hpZEc1VFkzSnZiR3hVYjFSdmNDa2dlMXh1WEhSY2RHSjBibE5qY205c2JGUnZWRzl3TG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjYmx4MFhIUmNkSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aDdYRzVjZEZ4MFhIUmNkSFJ2Y0RvZ01DeGNibHgwWEhSY2RGeDBiR1ZtZERvZ01DeGNibHgwWEhSY2RGeDBZbVZvWVhacGIzSTZJQ2R6Ylc5dmRHZ25MRnh1WEhSY2RGeDBmU2s3WEc1Y2RGeDBmU2s3WEc1Y2RIMWNibHh1WEhSamIyNXpkQ0JrWVhseklEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUmhlWE1uS1R0Y2JseDBZMjl1YzNRZ2FHOTFjbk1nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYUc5MWNuTW5LVHRjYmx4MFkyOXVjM1FnYldsdWRYUmxjeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R0YVc1MWRHVnpKeWs3WEc1Y2RHTnZibk4wSUhObFkyOXVaSE1nUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYzJWamIyNWtjeWNwTzF4dVhIUmpiMjV6ZENCamIzVnVkR1J2ZDI0Z1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblkyOTFiblJrYjNkdUp5azdYRzVjZEdOdmJuTjBJSGxsWVhJZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmVXVmhjaWNwTzF4dVhIUmpiMjV6ZENCc2IyRmthVzVuSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJ4dllXUnBibWNuS1R0Y2JseHVYSFJqYjI1emRDQmpkWEp5Wlc1MFdXVmhjaUE5SUc1bGR5QkVZWFJsS0NrdVoyVjBSblZzYkZsbFlYSW9LVHRjYmx4dVhIUmpiMjV6ZENCdVpYZFpaV0Z5VkdsdFpTQTlJRzVsZHlCRVlYUmxLR0JLWVc1MVlYSjVJREF4SUNSN1kzVnljbVZ1ZEZsbFlYSWdLeUF4ZlNBd01Eb3dNRG93TUdBcE8xeHVYRzVjZEhsbFlYSXVhVzV1WlhKVVpYaDBJRDBnWTNWeWNtVnVkRmxsWVhJZ0t5QXhPMXh1WEc1Y2RHWjFibU4wYVc5dUlIVndaR0YwWlVOdmRXNTBaRzkzYmlncElIdGNibHgwWEhSamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlHNWxkeUJFWVhSbEtDazdYRzVjYmx4MFhIUmpiMjV6ZENCa2FXWm1JRDBnYm1WM1dXVmhjbFJwYldVZ0xTQmpkWEp5Wlc1MFZHbHRaVHRjYmx4dVhIUmNkR052Ym5OMElHUWdQU0JOWVhSb0xtWnNiMjl5S0dScFptWWdMeUF4TURBd0lDOGdOakFnTHlBMk1DQXZJREkwS1R0Y2JseDBYSFJqYjI1emRDQm9JRDBnVFdGMGFDNW1iRzl2Y2loa2FXWm1JQzhnTVRBd01DQXZJRFl3SUM4Z05qQXBJQ1VnTWpRN1hHNWNkRngwWTI5dWMzUWdiU0E5SUUxaGRHZ3VabXh2YjNJb1pHbG1aaUF2SURFd01EQWdMeUEyTUNrZ0pTQTJNRHRjYmx4MFhIUmpiMjV6ZENCeklEMGdUV0YwYUM1bWJHOXZjaWhrYVdabUlDOGdNVEF3TUNrZ0pTQTJNRHRjYmx4dVhIUmNkR1JoZVhNdWFXNXVaWEpJVkUxTUlEMGdaRHRjYmx4MFhIUm9iM1Z5Y3k1cGJtNWxja2hVVFV3Z1BTQm9JRHdnTVRBZ1B5QW5NQ2NnS3lCb0lEb2dhRHRjYmx4MFhIUnRhVzUxZEdWekxtbHVibVZ5U0ZSTlRDQTlJRzBnUENBeE1DQS9JQ2N3SnlBcklHMGdPaUJ0TzF4dVhIUmNkSE5sWTI5dVpITXVhVzV1WlhKSVZFMU1JRDBnY3lBOElERXdJRDhnSnpBbklDc2djeUE2SUhNN1hHNWNkSDFjYmx4dVhIUm1kVzVqZEdsdmJpQmpjbVZoZEdWVGJtOTNabXhoYTJVb0tTQjdYRzVjZEZ4MFkyOXVjM1FnYzI1dmQwWnNZV3RsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duYVNjcE8xeHVYRzVjZEZ4MGMyNXZkMFpzWVd0bExtTnNZWE56VEdsemRDNWhaR1FvSjJaaGN5Y3BPMXh1WEhSY2RITnViM2RHYkdGclpTNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbVlTMXpibTkzWm14aGEyVW5LVHRjYmx4MFhIUnpibTkzUm14aGEyVXVjM1I1YkdVdWJHVm1kQ0E5SUUxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUIzYVc1a2IzY3VhVzV1WlhKWGFXUjBhQ0FySUNkd2VDYzdYRzVjZEZ4MGMyNXZkMFpzWVd0bExuTjBlV3hsTG05d1lXTnBkSGtnUFNCTllYUm9MbkpoYm1SdmJTZ3BPMXh1WEhSY2RITnViM2RHYkdGclpTNXpkSGxzWlM1aGJtbHRZWFJwYjI1RWRYSmhkR2x2YmlBOUlFMWhkR2d1Y21GdVpHOXRLQ2tnS2lBeklDc2dNaUFySUNkekp6dGNibHgwWEhSemJtOTNSbXhoYTJVdWMzUjViR1V1Wm05dWRGTnBlbVVnUFNCTllYUm9MbkpoYm1SdmJTZ3BJQ29nTVRBZ0t5QXhNQ0FySUNkd2VDYzdYRzVjYmx4MFhIUmtiMk4xYldWdWRDNWliMlI1TG1Gd2NHVnVaRU5vYVd4a0tITnViM2RHYkdGclpTazdYRzVjYmx4MFhIUnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNibHgwWEhSY2RITnViM2RHYkdGclpTNXlaVzF2ZG1Vb0tUdGNibHgwWEhSOUxDQTFNREF3S1R0Y2JseDBmVnh1WEc1Y2RITmxkRWx1ZEdWeWRtRnNLR055WldGMFpWTnViM2RtYkdGclpTd2dNVEF3TUNrN1hHNWNibHgwYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc1Y2RGeDBiRzloWkdsdVp5NXlaVzF2ZG1Vb0tUdGNibHgwWEhSamIzVnVkR1J2ZDI0dWMzUjViR1V1WkdsemNHeGhlU0E5SUNkbWJHVjRKenRjYmx4MGZTd2dNVEF3TUNrN1hHNWNibHgwYzJWMFNXNTBaWEoyWVd3b1kzSmxZWFJsVTI1dmQyWnNZV3RsTENBeE1EQXdLVHRjYmx4MGMyVjBTVzUwWlhKMllXd29kWEJrWVhSbFEyOTFiblJrYjNkdUxDQXhNREF3S1R0Y2JuMHBPMXh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSJ9
