function init()
{
	console.log('initialized');

	var swiperContainer_1 = document.getElementById('swiper-1');
	var swiperPagination_1 = document.getElementById('swiper-1-pagination');
	var swiperParams_1 = {
		'pagination': swiperPagination_1,
		'paginationClickable': true,
		'direction': 'vertical'
	};

	var swiper1 = new Swiper(swiperContainer_1, swiperParams_1);


	// var swiperContainer_2 = document.getElementById('swiper-2');
	// var swiperPagination_2 = document.getElementById('swiper-2-pagination');
	// var swiperParams_2 = {
	// 	'pagination': swiperPagination_2,
	// 	'paginationClickable': true,
	// 	'direction': 'vertical'
	// };

	// var swiper2 = new Swiper(swiperContainer_2, swiperParams_2);


	// var swiperContainer_3 = document.getElementById('swiper-3');
	// var swiperPagination_3 = document.getElementById('swiper-3-pagination');
	// var swiperParams_3 = {
	// 	'pagination': swiperPagination_3,
	// 	'paginationClickable': true,
	// 	'direction': 'vertical'
	// };

	// var swiper3 = new Swiper(swiperContainer_3, swiperParams_3);
}

window.onload = init;