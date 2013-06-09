/********************************
Copyright (c) 2011~2012 Min Zhang
http://code.google.com/p/wei-bo-kong/
License: LGPL v2.1
********************************/
$("#option").click( function(){
	chrome.tabs.create({url:chrome.extension.getURL("options.html")});
});

$("#enable").click( function(){
	var settings = new Store("settings", {});
	settings.set("enable_all", true );
	refresh();
});

$("#disable").click( function(){
	var settings = new Store("settings", {});
	settings.set("enable_all", false );
	refresh();
});

function refresh() {
	chrome.extension.sendRequest( {action: 'refresh'}, function(){} );
}