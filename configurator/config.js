let copy = $("#copy-embed");

$("#copy-embed").click(function(){
	copy.html("Copied!");
	embedCode = $('#embed-code').html();
	copyToClipboard(embedCode);
	setTimeout(function() {
	  copy.html("&lt;&gt; Copy Embed");
	}, 1000);	
});



let light = $("#theme-light");
let dark = $("#theme-dark");

dark.click(function(event){
	event.preventDefault();
	light.removeClass("theme-selected");
	dark.addClass("theme-selected");
	$(".display-panel").css("background-color", "#1F1F20");
	$(".codeblock").css({"background-color": "#606367", "border": "1px solid #606367", "color":"lightgray"});
})
light.click(function(event){
	event.preventDefault();
	dark.removeClass("theme-selected");
	light.addClass("theme-selected");
	$(".display-panel").css("background-color", "#fafafa");
	$(".codeblock").css({"background-color": "#f2f2f2", "border": "1px solid #C2DFE3", "color":"gray"});
})


const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};