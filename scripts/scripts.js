
//Функции кнопок меню
document.getElementById("about-btn").addEventListener("click", function() {
	document.getElementById("about_me_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("portfolio-btn").addEventListener("click", function() {
	document.getElementById("portfolio_section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contact-btn").addEventListener("click", function() {
	document.getElementById("contact_section").scrollIntoView({ behavior: 'smooth' });
});

//Функция кнопки прокрутки вверх
function scroll_up() {
	const scroll_up_btn_left = document.getElementById("scroll_up_btn");
	if (document.documentElement.scrollTop > 0) {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	} else {
		scroll_up_btn.scrollIntoView({ behavior: 'smooth' });
	}
}

// Функция для отображения и скрытия кнопки в зависимости от положения прокрутки
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	const scroll_up_btn = document.getElementById("scroll_up_btn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scroll_up_btn.style.display = "block";
	} else {
		scroll_up_btn.style.display = "none";
	}
}

//Фунцкия выезжающего названия текста
const inf_container = document.getElementById('inf_container');
function slideInFromRight(element) {
	let start = performance.now();
	function animate(time) {
		let timeFraction = (time - start) / 400; // Продолжительность анимации в секундах
		if (timeFraction > 1) timeFraction = 1;
		let progress = timeFraction;
		element.style.transform = `translateX(${(1 - progress) * 100}%)`;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}
slideInFromRight(inf_container);

//Фунцкия выезжающего аватара
const avatar = document.getElementById('avatar');
function slideInFromLeft(element) {
	let start = performance.now();
	function animate(time) {
		let timeFraction = (time - start) / 400; // Продолжительность анимации в секундах
		if (timeFraction > 1) timeFraction = 1;
		let progress = timeFraction;
		element.style.transform = `translateX(${(-1 + progress) * 100}%)`;
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	}
	requestAnimationFrame(animate);
}
slideInFromLeft(avatar);
