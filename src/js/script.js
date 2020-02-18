window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
	menuItem = document.querySelectorAll('.header__menu_item'),
	burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
			burger.classList.toggle('burger_active');
			menu.classList.toggle('header__menu_active');
	});

	menuItem.forEach(item => {
			item.addEventListener('click', () => {
					burger.classList.toggle('burger_active');
					menu.classList.toggle('header__menu_active');
			});
	});
	
});

function switchPromoContainerText(button) {
	let parent = button.parentNode
	while (!parent.classList.contains('promo__card')) {parent = parent.parentNode}
	let promoCardChilds = parent.childNodes
	let textBlocks = [];
	for (let i = 0; i < promoCardChilds.length; i++) {
		if (promoCardChilds[i].classList != undefined && promoCardChilds[i].classList.contains('promo__text')) {
			promoCardChilds[i].classList.toggle('hidden')
		}
	}
	return button
}

$(document).ready(function(){
	$('.promo__card_readmore').click(function(e){
		switchPromoContainerText(this);
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dotData: true
	});

	$('ul.project__tabs').on('click', 'li:not(.project__tab_active)', function() {
		$(this)
		.addClass('project__tab_active').siblings().removeClass('project__tab_active')
		.closest('div.container').find('div.project__imgs').removeClass('project__imgs_active').eq($(this).index()).addClass('project__imgs_active');
	});

	$('#menu').on("click","a", function (event) {
		event.preventDefault();
		const id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");


			$('form').trigger('reset');
		});
		return false;
	});
});