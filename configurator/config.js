let copy = $("#copy-embed");

$("#copy-embed").click(function(){
	copy.html("Copied!");
	setTimeout(function() {
	  copy.html("&lt;&gt; Copy Embed");
	}, 1000);	
});

