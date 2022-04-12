function switchView(viewName) {
  $(".viewsElement").addClass("hidden");

  $(`#${viewName}`).removeClass('hidden');
}
