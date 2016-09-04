var feedbackopen = document.querySelector(".js-btn-form");
var feedbackclose = document.querySelector(".form-feedback-close");
var feedbackquery = document.querySelector(".js-modal-feedback");

feedbackclose.addEventListener("click", function (event) {
  event.preventDefault();
	feedbackquery.classList.remove("form-feedback-shake");
});

feedbackopen.addEventListener("click", function (event) {
	event.preventDefault();
	feedbackquery.classList.add("form-feedback-shake");
});
