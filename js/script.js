$(document).ready(function()

{
	//coding for delete an element from the list

 $("ul").on("click","span",function(event){$(this).parent().fadeOut(500,function(){
$(this).remove();})
event.stopPropagation();});


 	//coding for line through

 $("ul").on("click","li",function()
{$(this).toggleClass("important");});



$("input[type='text']").keypress(function(event){

if (event.which === 13 )
{

var text = $(this).val();

$("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + text + "</li>");

$(this).val(" ");

}

})


$(".fa-plus").click(function()

{
	$("input[type='text']").toggle(500);



}

	)


});