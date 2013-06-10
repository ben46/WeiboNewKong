/********************************
Copyright (c) 2011~2012 Min Zhang
http://code.google.com/p/wei-bo-kong/
License: LGPL v2.1
********************************/
// WeiboKongNew
// version 2.1.6
// 2012-09-22
//
// ==UserScript==
// @name          WeiboKongNew
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://www.weibo.com/*
// ==/UserScript==


/*define global variables*/
var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = chrome.i18n.getMessage("appChangelog");
var DATE = chrome.i18n.getMessage("appReleaseDate");

/*popup images*/
function hoverimg()
{

	$(".photo").each( function (){
		$(this).hover(function(){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			$("#kong_hover_img").attr( "src", $(this).attr( "src" ).replace( "mw205", "mw690"  ) );
			$("#kong_hover_img").css( "top", "40px" );
			$("#kong_hover_img").css( "right", "100px" );
			$("#kong_hover_img").css( "position", "fixed" );
			$("#kong_hover_img").css( "border", "3px solid white" );
			$("#kong_hover_img").show();
		},function(){
			$("#kong_hover_img").hide();
		});
	});


	$(".bigcursor").each( function (){
		$(this).hover(function(){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			$("#kong_hover_img").attr( "src", $(this).attr( "src" ).replace( "thumbnail", "bmiddle"  ).replace( "square", "bmiddle"  ) );
			$("#kong_hover_img").css( "top", "40px" );
			$("#kong_hover_img").css( "right", "100px" );
			$("#kong_hover_img").css( "position", "fixed" );
			$("#kong_hover_img").css( "border", "3px solid white" );
			$("#kong_hover_img").show();
		},function(){
			$("#kong_hover_img").hide();
		});
	});
	t = setTimeout(function(){hoverimg();}, 2000 );
}

function hover(img,x,y) {
	var hover = document.getElementById("hover");
	hover.style.position = "fixed";
	hover.style.top = x;
	hover.style.left = y;
	hover.innerHTML = "<img src=img/" + img + ".jpg />";
	hover.style.display = "block";
}

function unhover() {
	var hover = document.getElementById("hover");
	hover.style.display = "none";
}


//Add reading indicator to reading mode
//TODO fix display bugs, not cool right now
function reading_indicator() {
	$('dl[action-type="feed_list_item"]').each( function (){
		$(this).hover(function(){
			$(this).addClass( "kong_current_item" );
		},function(){
			$(this).removeClass( "kong_current_item" );
		});
	});
	t = setTimeout(function(){reading_indicator();}, 2000 );
}

// notification: blink title
function blink_info(msg) {
	for (i=0;i<15;i++) {
		timer = setTimeout("", 1000);
		document.title = document.title == msg ? '【您有新消息】' : msg;
	}
}

// entry function
// check update -> init -> main page -> other page
function doit(options) {

	localStorage["notified"] = "0";
	if ( $(document).attr('title').match("我的首页") || $(document).attr('title').match("我的首頁") ||
		 $(document).attr('title').match("@我的微博") || $(document).attr('title').match("@我的微博") ||
		 $(document).attr('title').match("@我的评论") || $(document).attr('title').match("@我的評論") ||
		 $(document).attr('title').match("收到的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("发出的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("我的私信") || $(document).attr('title').match("我的私人訊息") ||
		 $(document).attr('title').match("我的收藏") || $(document).attr('title').match("我的收藏") ||
		 $(document).attr('title').match("新浪微博") 
	){
		$("<style type='text/css'> .kong_button_original { color:" + $('.MIB_linkbl > a').css("color") + "; } </style>").appendTo("head");
		$("<div><img id=\"kong_hover_img\" /></div>").appendTo("body");
		hoverimg();
	}


}


//get settings
chrome.extension.sendRequest({'action' : 'getOptions'}, doit);