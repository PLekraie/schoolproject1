function temp(param) {
  console.log("hello" + param);
}

function switchView(viewName) {
  $(".viewsElement").addClass("hidden");

  $(`#${viewName}`).removeClass('hidden');
}
