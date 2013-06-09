/********************************
Copyright (c) 2011~2012 Min Zhang
http://code.google.com/p/wei-bo-kong/
License: LGPL v2.1
********************************/


/* show page action */
function showPageAction(tabId, changeInfo, tab) {
	if (tab.url.search("weibo.com") > -1 || tab.url.search("www.weibo.com") > -1) {
		chrome.pageAction.show(tabId);
	}
};
		
/* send options*/
function getOptions(callback) {
	var settings = new Store("settings", {});	
	var options = settings.toObject();
	callback(options);
};
		
/* process the requests */
function onRequest(request, sender, callback) {
	var settings = new Store("settings", {});	
	var options = settings.toObject();
	if (request.action == 'getOptions') {
		getOptions(callback);
	}
	else if (request.action == 'refresh') {
		chrome.windows.getCurrent(function(win) {
			var cwin = win.id;
			chrome.tabs.getAllInWindow(cwin, function(tabs) {
				for (var i = 0; i < tabs.length; i++) {
					var t = tabs[i].url;
					if (t.match('weibo.com') || t.match('www.weibo.com')) {
						var tab = tabs[i];
						chrome.tabs.update(tab.id, {url: tab.url, selected: tab.selected}, null);
					}
				}
			});
		});
	}
	else if (request.action == 'redirect' ) {
		chrome.tabs.create({url: request.url, selected: tab.selected}, null);
	}
	else if (request.action == 'notify' ) {
		var icon = chrome.extension.getURL("img/icon/icon_48.png");
		var title = "ÄãÓÐÐÂÏûÏ¢";
		var body = "";
		var notify_value = request.value;
		if ( notify_value > 7 ) {
			body += "ÐÂÎ¢²©\n";
			notify_value -= 8;
		}
		if ( notify_value > 3 ) {
			body += "ÐÂÆÀÂÛ";
			notify_value -= 4;
		}
		if ( notify_value > 1 ) {
			body += "ÐÂ@ÎÒ\n";
			notify_value -= 2;
		}
		if ( notify_value > 0 ) {
			body += "ÐÂË½ÐÅ\n";
			notify_value -= 1;
		}
		
		var popup = webkitNotifications.createNotification( icon, title, body );
		popup.replaceId = this.replaceId;
		var settings = new Store("settings", {});
   		var autoclose = settings.get( "notification_time" );
   		var sound = settings.get( "enable_notification_sound" );
		popup.ondisplay = function(event) {
				if ( sound == true) {
					document.getElementById("dummy").innerHTML="<embed src=\"sound.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
				}
                setTimeout(function() {  
                    event.currentTarget.cancel();  
                }, autoclose * 1000 );  
            };
		popup.show();
	}
};
chrome.extension.onRequest.addListener(onRequest);
chrome.tabs.onUpdated.addListener(showPageAction);