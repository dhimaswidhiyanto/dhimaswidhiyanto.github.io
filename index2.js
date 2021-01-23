const countDownDate = new Date('Feb 27, 2021 00:00:00').getTime();

console.log(countDownDate);

const countDown = setInterval(() => {
	const now = new Date().getTime();

	const distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.querySelector('.days').textContent = days;
	document.querySelector('.hours').textContent = hours;
	document.querySelector('.minutes').textContent = minutes;
	document.querySelector('.seconds').textContent = seconds;
}, 1000);
