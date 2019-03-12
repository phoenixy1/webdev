init();

function init() {
	$("#addTodo").on("click", function() {
		$("#todoInput").toggle();
	});

	$("#todoInput").keypress(function(element) {
		if (element.which == 13) {
			addTodo($("#todoInput").val());
			$("#todoInput").val("");
		}
	});
}

function addTodo(value) {
	$("#todos").append("<div class=\"todo clickable d-flex align-items-center\">" + 
		"<span class = \"trash\"><i class=\"far fa-trash-alt\"></i></span><span class=\"todoText\">"+value+"</span></div>");
	$(".todoText").last().on("click", function() {
		$(this).toggleClass("done");
	});
	$(".trash").last().on("click", function() {
		$(this).parent().fadeOut(function() {
			$(this).remove();
		});
	});
	$(".todo").last().on("mouseover", function() {
		$(this).find(".trash").show("slide", { direction: "left" }, 200);
	});
	$(".todo").last().on("mouseleave", function() {
		$(this).find(".trash").hide("slide", { direction: "left" }, 200)
	});
}