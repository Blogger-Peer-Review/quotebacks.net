let copy = $("#copy-embed");

$("#copy-embed").click(function(){
	copy.html("Copied!");
	setTimeout(function() {
	  copy.html("&lt;&gt; Copy Embed");
	}, 1000);	
});



let light = $("#theme-light");
let dark = $("#theme-dark");

dark.click(function(event){
	event.preventDefault();
	$(".display-panel").css("background-color", "#1F1F20");
	$(".codeblock").css({"background-color": "#606367", "border": "1px solid #606367", "color":"lightgray"});
})
light.click(function(event){
	event.preventDefault();
	$(".display-panel").css("background-color", "#fafafa");
	$(".codeblock").css({"background-color": "#f2f2f2", "border": "1px solid #C2DFE3", "color":"gray"});
})
