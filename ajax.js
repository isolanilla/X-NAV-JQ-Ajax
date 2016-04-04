$(document).ready(function() {
    $.ajax({
	type: "GET",
	url: "texto.txt",
	cache: false
    }).done(function( text ) {
	$("#second").html(text);
    });
    $("#second").click(function(){
   $.ajax({
       type: "GET",
       url: "text2.txt",
       cache: false
   }).done(function( text ) {
       $("#third").html(text);
   });
   });

});
