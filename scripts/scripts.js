// JavaScript код для отображения соответствующего раздела при нажатии на кнопку
document.getElementById("about-btn").addEventListener("click", function() {
	showSection("about");
});

document.getElementById("portfolio-btn").addEventListener("click", function() {
	showSection("portfolio");
});

document.getElementById("contact-btn").addEventListener("click", function() {
	showSection("contact");
});

// Функция для отображения раздела и скрытия остальных
function showSection(sectionId) {
	// Скрыть все разделы
	var sections = document.querySelectorAll("section");
	sections.forEach(function(section) {
		section.style.display = "none";
	});

	// Отобразить выбранный раздел
	document.getElementById(sectionId).style.display = "block";
}

document.getElementById("mainButton").addEventListener("touchstart", function(event) {
	event.preventDefault(); // Предотвращаем стандартное действие, чтобы избежать дополнительных событий
	var popup = document.getElementById("popup");
	if (popup.style.display === "none") {
		popup.style.display = "block";
	} else {
		popup.style.display = "none";
	}
});
