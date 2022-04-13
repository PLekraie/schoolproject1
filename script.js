function switchView(viewName) {
	$('.viewsElement').addClass('hidden');

	$(`#${viewName}`).removeClass('hidden');

	if ($('#menu').hasClass('opened')) changeMenu();
}

function changeMenu() {
	if (!$('#menu').hasClass('opened')) {
		$('#menu').addClass('opened');
		$('#burger').empty().append('<i class="fa-solid fa-xmark"></i>');
	} else {
		$('#menu').removeClass('opened');
		$('#burger').empty().append('<i class="fa-solid fa-burger"></i>');
	}
}
