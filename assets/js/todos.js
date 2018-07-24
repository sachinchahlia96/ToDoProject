//check off specific tools by clicking

$("ul").on("click", "li", function(){
	// $(this).css("color", "gray")
	// $(this).css("text-decoration", "line-through");

	//if li is gray
	// if ($(this).css("color") === "rgb(128, 128, 128)")//gray
	// {
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else{
	// 	//turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }

	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){ //here this is referring to span tag
		$(this).remove(); // here this doesn't refers to span. It is referring to parent enclosing span i.e li tag.
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which == 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText + "</li>")
	}
});

$(".fa-plus-square").click(function(){
	$("input[type = 'text']").fadeToggle();
});