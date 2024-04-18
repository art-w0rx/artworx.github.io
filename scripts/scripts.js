
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
