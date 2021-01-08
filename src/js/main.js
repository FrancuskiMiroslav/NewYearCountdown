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
