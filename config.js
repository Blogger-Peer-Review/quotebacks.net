let copy = $("#copy-embed");

$("#copy-embed").click(function(){
	copy.html("Copied!");
	
	var el = document.createElement('textarea');
	var codetext = document.getElementById("embed-code").textContent;
	el.textContent = codetext;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);

	setTimeout(function() {
	  copy.html("&lt;&gt; Copy Embed");
	}, 1000);	
});


const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};


tippy('#bookmarklet-container', {
  content: 'Drag me into your bookmarks bar, then click while selecting text on any page.',
});

tippy('#knowledgeGraph', {
  content: 'Coming soon',
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
	$(".display-panel").css("background-color", "#ffffff");
	$(".codeblock").css({"background-color": "#f2f2f2", "border": "1px solid #C2DFE3", "color":"gray"});
})
