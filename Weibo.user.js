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

/*reading mode*/
function reading( options ) {
	//TODO Fix bugs
	/*if ( options["enable_reading_manual"] == true ) {
		$("body").append( "<div class=\"kong_reading_button\" ><a id=\"kong_reading_button\" href=\"\" style=\"color:white\" onClick=\"if (document.getElementById('kong_reading_button').innerHTML == '启用阅读模式'){document.getElementById('kong_mask').style.display='block'; document.getElementsByClassName('feed_lists')[0].className += ' kong_read'; document.getElementById('kong_reading_button').innerHTML = '退出阅读模式'; return false;}else{document.getElementById('kong_reading_button').innerHTML = '启用阅读模式'; document.getElementById('kong_mask').style.display='none'; document.getElementsByClassName('feed_lists')[0].className = 'feed_lists W_linka W_texta'; return false;}\">启用阅读模式</a><div>" );
		//$('ul[node-type="feedGroup"]').append("<li><a href=\"\" onClick=\"document.getElementById('kong_mask').style.display='block'; document.getElementsByClassName('feed_lists')[0].className += ' kong_read'; return false;\">启用阅读模式</a></li>");
	}*/
	if ( options["enable_reading_mode"] == true ) {
		$("body").keypress(function(event) {
			//check if the post box is focused
			if ( $("*:focus").is("textarea") || $("*:focus").is("input") ){
				return;
			}
			// key 114 = 'r'
		  	if ( event.which == 114) {
		  		var reading_mote_width = parseInt( options["reading_mode_width"] );
				if ( reading_mote_width == NaN ) reading_mote_width = 70;
				$(".kong_mask").show();
				$(".feed_lists.W_linka.W_texta").addClass( "kong_read" );
				$(".feed_lists.W_linka.W_texta").css("padding-left", ((100-reading_mote_width)/2)+"%");
				$(".feed_lists.W_linka.W_texta").css("padding-right", ((100-reading_mote_width)/2)+"%");
				$(".feed_lists.W_linka.W_texta").css("padding-top", "30px");
				$(".feed_lists.W_linka.W_texta").css("width", reading_mote_width+"%");
				$(".W_gotop").css( "z-index", "99999" );
				$(".W_gotop").css( "left", "60%" );
				if ( options["enable_reading_hidingtop"] == true ) {
					$("#pl_content_top").hide();
				}
				if ( options["enable_reading_enlarge_font"] == true ) {
					$('p[node-type="feed_list_content"]').css("font-size", "18px");
					$('p[node-type="feed_list_content"]').css("font-weight", "bolder");
					$('dt[node-type="feed_list_forwardContent"]').css("font-size", "16px");
					$('dt[node-type="feed_list_forwardContent"]').css("font-weight", "bolder");	
				}
				if ( options["enable_reading_hidingbuttons"] == true ) {
					$('.info.W_linkb.W_textb span:first-child').hide();
				}
				//TODO Fix bugs
				/*if ( options["enable_reading_manual"] == true ) $("#kong_reading_button").html( "退出阅读模式" );
				var children = $('div[node-type="feed_list"]').children();
				children[0].className += " kong_current_item";
				$('body').scrollTop( children[0].offsetTop );*/
		  	}
		  	//TODO press 'N' to scroll down (like google reader)
		  	/*
		  	if ( event.which == 110) {
		  		if ( $('.kong_current_item').length == 0 ) {
		  			var children = $('div[node-type="feed_list"]').children();
		  			children[0].className += " kong_current_item";
					$('body').scrollTop( children[0].offsetTop );
		  		}
		  		$('.kong_current_item').addClass("kong_previous_item");
		  		$('.kong_current_item').next().addClass( "kong_current_item" );
		  		$(".kong_previous_item").removeClass( "kong_current_item" );
				$('body').scrollTop( $('.kong_current_item').offset().top - 20);
		  	}
		  	*/
		});
		$("body").keydown(function(event) {
			//check if the post box is focused
			if ( $("*:focus").is("textarea") || $("*:focus").is("input") ){
				return;
			}
			// key 27 = 'q'
		  	if ( event.which == 27) {
		  		$(".kong_mask").hide();
				$(".feed_lists.W_linka.W_texta").removeClass( "kong_read" );
				$(".feed_lists.W_linka.W_texta").css("padding-top", "0px");
				$(".feed_lists.W_linka.W_texta").css("width", "100%");
				$(".feed_lists.W_linka.W_texta").css("padding-left", "0px");
				$(".feed_lists.W_linka.W_texta").css("padding-right", "0px");
				$(".feed_lists.W_linka.W_texta").css("left", "0%");
				$(".W_gotop").css( "left", "50%" );
				if ( options["enable_reading_hidingtop"] == true ) {
					$("#pl_content_top").show();
				}
				if ( options["enable_reading_enlarge_font"] == true ) {
					$('p[node-type="feed_list_content"]').css("font-size", "14px");
					$('p[node-type="feed_list_content"]').css("font-weight", "normal");
					$('dt[node-type="feed_list_forwardContent"]').css("font-size", "12px");
					$('dt[node-type="feed_list_forwardContent"]').css("font-weight", "normal");	
				}
				if ( options["enable_reading_hidingbuttons"] == true ) {
					$('.info.W_linkb.W_textb span:first-child').show();
				}
				//if ( options["enable_reading_manual"] == true ) $("#kong_reading_button").html( "启用阅读模式" );
		  	}
		});
		
	}
}

/*navigation bar on top*/
function topnav(options) {
	if ( options['hide_top'] == true ) {
		$("#pl_content_top").hide();
	} else {
		if ( options['disable_top_float'] == true ) {
			$(".global_header").css( "position", "absolute");
		}
		if ( options['hide_top_logo'] == true ) {
			$(".logo").hide();
		}
		
		if ( options['hide_top_left'] == true ) {
			$(".logo").next().hide();
			$(".search").css("margin-left", "150px");
		}
		if ( options['hide_top_search'] == true ) {
			$(".search").hide();
		}
		if ( options['hide_top_right'] == true ) {
			$(".right").hide();
		}
		if ( options['hide_top_tips'] == true ) {
			$(".layer_message_box").hide();
		}
	}
	t = setTimeout(function(){topnav(options);}, 2000 );
}

/*navigation sidebar on lelf, only avaiable for 体验版*/
function leftside(options) {
	if ( options['hide_left_info'] == true ) {
		$("#pl_leftNav_common div:first-child").hide();
	}
	if ( options['hide_left_nav'] == true ) {
		$("#pl_leftNav_common div:first-child").next().hide();
	}
	if ( options['hide_left_link'] == true ) {
		$("#pl_leftNav_common div:first-child").next().next().hide();
	}
	if ( options['hide_left_game'] == true ) {
		$("#pl_leftNav_game").hide();
	}
	if ( options['hide_left_app'] == true ) {
		$("#pl_leftNav_app").hide();
	}

}

/*navigation sidebar on right*/
function rightside(options) {
	if ( options['hide_right'] == true ) {
		$(".W_main_r").hide();
		$(".W_main_narrow_bg.clearfix ").css("width", "600px");	
	}
	else {
		if ( options['hide_right_widgets'] ) {
			$('div[name^="app"]').hide();
		}
		if ( options['hide_right_ads'] == true ) {
			$("#ads_35").hide();
			$("#ads_47").hide();
			$("#ads_37").hide();
			$("#ads_36").hide();
			$('div[ad-data]').hide();
			$('#trustPagelet_ugrowth_invite').hide();

		}
		if ( options['hide_right_tips'] == true ) {
			$("#pl_content_userTips").hide();
		}
		if ( options['hide_right_info'] == true ) {
			$("#pl_content_personInfo").hide();
		}
		if ( options['hide_right_mood'] == true ) {
			$("#pl_content_mood").hide();
		}
		if ( options['hide_right_medals'] == true ) {
			$("#pl_rightmod_medal").hide();
		}
		if ( options['hide_right_nav'] == true ) {
			$("#pl_nav_outlookBar").hide();
		}
		if ( options['hide_right_olympics'] == true ) {
			$("#trustPagelet_yunying_olympic").hide();
		}
		if ( options['hide_right_promotion'] == true ) {
			$("#pl_rightmod_promotion").hide();
		}
		if ( options['hide_right_topic'] == true ) {
			if ( options['hide_right_alltopic'] == true ) {
				$('#trustPagelete_zt_hottopic').hide(); 
			}
			else {
				options['class_data'] = $('li[action-data="index=0"]').attr( "class" );
				$('li[action-data="index=0"]').hide();
				$('li[action-data="index=1"]').attr( "class", options['class_data'] );
				$('#pl_topic_followTopic .content div:nth-child(1)').hide();
				$('#pl_topic_followTopic .content div:nth-child(2)').show();
			}
		}
		if ( options['hide_right_vip'] == true ) {
			$('#trustPagelet_member_zone').hide();
		}

		if ( options['hide_right_people'] == true ) {
			$('#trustPagelete_recom_interest').hide();
		}
		if ( options['hide_right_popuser'] == true ) {
			$('#pl_relation_recommendPopularUsers').hide();
		}
		if ( options['hide_right_interestgroup'] == true ) {
			if ( options['hide_right_kan'] == true &&  options['hide_right_apps'] == true ) {
				$('#trustPagelete_recom_allinone').hide();
			}
			else {
				$('li[action-data="type=group&flag=0"]').hide();
				$('.W_rightModule2 .content div:nth-child(1)').hide();
			}
		}
		if ( options['hide_right_kan'] == true ) {
			$('li[action-data="type=kan&flag=3"]').hide();
			$('.W_rightModule2 .content div:nth-child(3)').hide();
		}
		if ( options['hide_right_apps'] == true ) {
			$('li[action-data="type=app&flag=2"]').hide();
			$(',W_rightModule2 .content div:nth-child(4)').hide();
		}
		if ( options['hide_right_alltopic'] == true ) {
			$('li[action-data="index=1"]').hide();
		}
		if ( options['hide_right_notice'] == true ) {
			$("#pl_rightmod_noticeboard").hide();
		}
		if ( options['hide_right_help'] == true ) {
			$("#pl_rightmod_help").hide();
			
		}
	}
	t = setTimeout(function(){rightside(options);}, 2000 );
}

/*popup images*/
function hoverimg()
{
	$(".bigcursor").each( function (){
		$(this).hover(function(){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
			$("#kong_hover_img").attr( "src", $(this).attr( "src" ).replace( "thumbnail", "bmiddle"  ) );
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

/*main contents*/
function mainboard(options) {
	//TODO theme support
	/*var theme = "kong_button" + getTheme( options['global_theme'] );
	var theme_hover = "kong_button_hover" + getTheme( options['global_theme'] );*/
	if ( options['hover_main_img'] == true ) {
		hoverimg();
	}
	if ( options['enlarge_main_post'] == true ) {
		$('textarea[title=\"微博输入框"]').css( "height", "150px" );
	}
	if ( options['hide_main_post'] == true ) {
		$("#pl_content_publisherTop").hide();
	}
	if ( options['hide_main_title'] == true ) {
		$(".key.W_textb").hide();
	}
	if ( options['hide_main_tips'] == true ) {
		$("#pl_content_pullylist").hide();
	}
	if ( options['hide_main_nav'] == true ) {
		$('div[node-type="feed_nav"]').hide();
	}
	if ( options['hide_main_sort'] == true ) {
		$('div[node-type="smartSort"]').hide();
	}
	if ( options['hide_main_micro'] == true ) {
		$(".info.W_linkb.W_textb").hide();
	}
	if ( options["enable_reading_indicator"] == true ) {
		reading_indicator();
	}
	//hide forward contents
	//DEPRECATED
	/*
	if ( options['hide_main_forward'] == true ) {
		$(".sms").each(function (index){
			var html = $(this).html();
			
			var pos = -1;
			var i = 0;
			var ina = false;
			for ( i = 0;i < html.length;i++ ) {
				if ( html[i] == '<' ) ina = true;
				if (html[i] == '<' && html[i+1] == '/' ) ina = false;
				if ( ina == true ) continue;
				if ( html[i] == '/' && html[i + 1] == '/' ) {
					pos = i;
					break;
				}
			}
			if ( pos != -1 ) {
				var mine = html.substring(0, pos);
				var theirs = html.substring(pos + 2, html.length);
				$(this).html(mine + 
					"<div id=\"kong_display_" + index + "\" class=\"kong_button " + theme + "\" >展开</div><span id= \"kong_foward_" + index 
					+ "\" style=\" display: none; margin-left: 40px; \"><hr class=\"kong_hr\">"+ theirs + "</span>");
				var keep = false;
				$("#kong_display_"+index).click(function(){
					if ( keep == false ) {
						keep = true;
						$(this).html("隐藏");
					}
					else {
						keep = false;
						$(this).html("保持展开");
					}
				});
				
				$("#kong_display_"+index).hover(function(){
					var timer = setTimeout(function() {
						$("#kong_display_"+index).addClass(theme_hover);
						if ( keep == false ) {
							$("#kong_display_"+index).html("保持展开");
						}
						else {
							$("#kong_display_"+index).html("隐藏");
						}
						$("#kong_foward_"+index).show();
					}, 500);
				},function(){
					$(this).removeClass(theme_hover);
					if ( keep == false ) {
						$("#kong_foward_"+index).hide();
						$(this).html("展开");
					}
					else {
						$(this).html("隐藏");
					}
				});
			}
		});
	}
	//hide images
	//DEPRECATED
	if ( options["hide_main_image"] == true ) {
		$(".feed_img > a").each( function (){
			var str = $(this).attr( "onclick" );
			var thumbnail_url = $(this).children().attr( "src" );
			var bmiddle_url = thumbnail_url.replace("thumbnail", "bmiddle")
			var large_url = thumbnail_url.replace("thumbnail", "large");
			$(this).parent().append("<span><div class='thumbnail kong_button_left " + theme + "' href='javascript:void(0);'>&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;</div><div class='bmiddle kong_button_middle " + theme + "' href='javascript:void(0);'>&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='kong_button_right " + theme + "'>新窗口打开大图</div></span><br><br><img style='display:none' />");
			var keep = false;
			
			//hover
			var thumbnail = $(this).parent().children("span").children(".thumbnail");
			$(thumbnail).hover(function() {
				var timer = setTimeout(function() {
					$(thumbnail).addClass(theme_hover);
					$(thumbnail).parent().parent().children("img").attr("src", thumbnail_url);
					$(thumbnail).parent().parent().children("img").show();
						
					if ( keep == false ) {
						$(thumbnail).html("保持图片展开");
					}
					else {
						$(thumbnail).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
					}
				}, 500);
			}, function() {
				$(this).removeClass(theme_hover);
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
			var bmiddle = $(this).parent().children("span").children(".bmiddle");
			$(bmiddle).hover(function() {
				var timer = setTimeout(function() {
					$(bmiddle).addClass(theme_hover);
					$(bmiddle).parent().parent().children("img").attr("src", bmiddle_url);
					$(bmiddle).parent().parent().children("img").show();
					
					if ( keep == false ) {
						$(bmiddle).html("保持图片展开");
					}
					else {
						$(bmiddle).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
					}
				}, 500);
			}, function() {
				$(this).removeClass(theme_hover);
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
			//click
			$(this).parent().children("span").children(".thumbnail").click(function() {
				if ( keep == false ) {
					keep = true;
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
				else {
					keep = false;
					$(this).html("保持图片展开");
				}
			});
			
			$(this).parent().children("span").children(".bmiddle").click(function() {
				if ( keep == false ) {
					keep = true;
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
				else {
					keep = false;
					$(this).html("保持图片展开");
				}
			});
			
			$(this).parent().children("span").children(".kong_button_right").click(function() {
				window.open(large_url,"WeiboKong");
			});
			
			$(this).hide();
		});
	}
	*/
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

// other, bottom
function others(options) {
	if ( options['hide_other_ads'] == true ) {
		$("#ads_bottom_1").hide();
	}
	if ( options['hide_other_bot'] == true ) {
		$(".global_footer.global_footer_narrow").hide();
		$(".global_footer").hide();
	}
}


// filter functions
function filter(options) {
	if ( options['enable_filter'] == true ) {
		if ( options['filter'] != "" ) {
			var names = options['filter'].toString().split(",");
			for (var i in names) {
				$('a[title=\"' + names[i] + '\"]').parent().parent().hide();
			}
		}
	}
	if ( options['enable_filter_keyword_origin'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			var keywords = options['filter_keyword'].toString().split(",");
			$("p[node-type='feed_list_content']").each(function (index){
				var html = $(this).html();
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
		}
	}
	if ( options['enable_filter_keyword_forward'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			var keywords = options['filter_keyword'].toString().split(",");
			$("dt[node-type='feed_list_forwardContent']").each(function (index){
				var html = $(this).html();
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().parent().hide();
						break;
					}
				}
			});
		}
	}
	if ( options['enable_filter_source'] == true ) {
		if ( options['filter_source_keyword'] != "" ) {
			var keywords = options['filter_source_keyword'].toString().split(",");
			$(".info.W_linkb.W_textb").each(function (index){
				var html = $(this).html();
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
		}
	}
	t = setTimeout(function(){filter(options);}, 2000 );
}

// auto updater
function checkUpdate() {
	if ( localStorage["version"] == undefined || VERSION > localStorage["version"] ) {
		$(".feed_lists.W_linka.W_texta").prepend( "<dl id='kong_update' class='feed_list W_linecolor'><dt class='face'></dt><dd class='content'><p node-type='feed_list_content'><a>"+DATE+" 微博新控v"+VERSION+"更新详情：       (10秒后自动隐藏)</a><br/><em>"+UPDATE+"</em></p></dd><dd class='clear'></dd></dl>" )
		localStorage["version"] = VERSION;
		var timer = setTimeout("document.getElementById('kong_update').style.display = 'none';", 10000);
	}
}

// notification: blink title
function blink_info(msg) {
	for (i=0;i<15;i++) {
		timer = setTimeout("", 1000);
		document.title = document.title == msg ? '【您有新消息】' : msg;
	}
}

// notification: desktop 
function notification(options) {
	if ( options['enable_notification'] == false ) {
		return;
	}
	// 8	4 		2   	1
	// 0 	0 		0 		0
	// post comment atme  	msg
	var notify_value = 0;
	var new_post = false;
	var new_comment = false;
	var new_atme = false;
	var new_msg = false;
	if ( $("a[action-type='feed_list_newBar']").css( "display" ) == "none" ) {
		document.title = "我的首页 新浪微博-随时随地分享身边的新鲜事儿";
	}
	else {
		var html = $("a[action-type='feed_list_newBar']").html();
		if ( html != null && html.indexOf("点击查看") != -1 ) {
			new_post = true;
		}
	}
	if ( $(".layer_message_box").css( "display" ) == "none" ) {
		document.title = "我的首页 新浪微博-随时随地分享身边的新鲜事儿";
	}
	else {
		html = $(".layer_message_box").html();
		if ( html != null ) {
			if ( html.indexOf("查看评论") != -1 ) {
				new_comment = true;
			}
			if ( html.indexOf("查看@我") != -1 ) {
				new_atme = true;
			}
			if ( html.indexOf("查看私信") != -1 ) {
				new_msg = true;
			}
		}
	}

	if ( options['notification_post_title'] == true && new_post == true ) {
		blink_info("【新微博】");
	}
	else if ( options['notification_comment_title'] == true && new_comment == true ) {
		blink_info("【新评论】");
	}
	else if ( options['notification_atme_title'] == true && new_atme == true ) {
		blink_info("【新@我】");
	}

	if ( options['notification_post'] == true && new_post == true ) {
		notify_value += 8;
	}
	if ( options['notification_comment'] == true && new_comment == true ) {
		notify_value += 4;
	}
	if ( options['notification_atme'] == true && new_atme == true ) {
		notify_value += 2;
	}
	if ( options['notification_msg'] == true && new_msg == true ) {
		notify_value += 1;
	}
	if ( localStorage["notified"] != "0" ) {
		var n_int = parseInt(localStorage["notified"]);
		n_int--;
		localStorage["notified"]= n_int;
	}
	else if ( notify_value != 0  ) {
		if ( localStorage["notified"] == "0" ) {
			chrome.extension.sendRequest({'action' : 'notify', 'value' : notify_value}, function(){});
			localStorage["notified"] = "60";
		}
	}
	var intervals = 10;
	t = setTimeout(function(){notification(options);}, intervals * 1000 );
}

// friend page
function friendpage(options) {
	if ( options['hide_top_friend'] == true ) {
		$(".global_header").hide();
		$(".layer_message_box").hide();
	} else {
		if ( options['hide_top_logo_friend'] == true ) {
			$(".logo").hide();
		}
		if ( options['hide_top_left_friend'] == true ) {
			$(".logo").next().hide();
			$(".search").css("margin-left", "150px");
		}
		if ( options['hide_top_search_friend'] == true ) {
			$(".search").hide();
		}
		if ( options['hide_top_right_friend'] == true ) {
			$(".right").hide();
		}
		if ( options['hide_top_tips_friend'] == true ) {
			$(".layer_message_box").hide();
		}
	}
	
	if ( options['hide_right_info_friend'] == true ) {
		$("#pl_content_litePersonInfo").hide();
	}
	if ( options['hide_right_medal_friend'] == true ) {
		$("#pl_content_medal").hide();
	}
	if ( options['hide_right_follow_friend'] == true ) {
		$('#pl_relation_recommendAttUsers').hide();
	}
	if ( options['hide_right_bothfollow_friend'] == true ) {
		$('#pl_content_chainFollowers').hide();
	}
	if ( options['hide_right_same_friend'] == true ) {
		$('#pl_content_sameFriends').hide();
	}
	if ( options['hide_right_userinfo_friend'] == true ) {
		$('#pl_content_userInfo').hide();
	}
	
	if ( options['hide_right_tag_friend'] == true ) {
		$('#pl_content_hisTags').hide();
	}
	if ( options['hide_right_topic_friend'] == true ) {
		$('#pl_content_topic').hide();
	}
	if ( options['hide_right_fan_friend'] == true ) {
		$('#pl_content_hisFans').hide();
	}
	if ( options['hide_right_feedback_friend'] == true ) {
		$('#pl_common_feedback').hide();
	}
	if ( options['hide_right_report_friend'] == true ) {
		$("#pl_content_hisOperationPlate").hide();
	}
	if ( options['hide_main_relation_friend'] == true ) {
		$(".handle_btn").hide();
	}
	if ( options['hide_main_handle_friend'] == true ) {
		$(".handle_more").hide();
	}
	if ( options['hide_main_album_friend'] == true ) {
		$("#pl_content_album").hide();
	}
	if ( options['hide_main_tab_friend'] == true ) {
		$(".nfTagB.clearfix").hide();
	}
	if ( options['hide_main_filter_friend'] == true ) {
		$(".newFilter.W_texta").hide();
	}
	if ( options['hide_main_micro_friend'] == true ) {
		$(".info.W_linkb.W_textb").hide();
	}
	if ( options['hide_other_bot_friend'] == true ) {
		$("#global_footer global_footer_narrow").hide();
	}
}

// search page
// DEPRECATED
/*function searchpage(options) {
	if ( options['hide_top_search'] == true ) {
		$(".tsina_gnbarea").hide();
	} else {
		if ( options['hide_top_left_search'] == true ) {
			$(".gnb_l").hide();
		}
		if ( options['hide_top_right_search'] == true ) {
			$(".gnb_r").hide();
		}
	}
	if ( options['hide_search_logo'] == true ) {
		$(".newlogo").hide();
	}
	if ( options['hide_search_bottom'] == true ) {
		$("#bottomborder").hide();
	}
	if ( options['hide_search_hot'] == true ) {
		t = setTimeout(function(){$(".srch_hotWrap").hide();}, 2 * 1000 );
	}
	if ( options['hide_search_order'] == true ) {
		$(".tab_top_new").hide();
	}
	if ( options['hide_search_topic'] == true ) {
		$(".srch_link").hide();
	}
	if ( options['hide_search_toptitle'] == true ) {
		$("#list_topic_box").hide();
	}
	if ( options['hide_search_top10'] == true ) {
		$(".top10.hotTipS").hide();
	}
	if ( options['hide_search_related'] == true ) {
		$(".top10.hotTipS").next().hide();
		$(".related_topic").hide();
	}
	if ( options['hide_search_feedback'] == true ) {
		$(".sdbar_opt").hide();
	}
}
*/

// entry function
// check update -> init -> main page -> other page
function doit(options) {
	checkUpdate();
	if ( options['enable_all'] == false ) return;
	localStorage["notified"] = "0";
	if ( $(document).attr('title').match("我的首页") || $(document).attr('title').match("我的首頁") ||
		 $(document).attr('title').match("@我的微博") || $(document).attr('title').match("@我的微博") ||
		 $(document).attr('title').match("@我的评论") || $(document).attr('title').match("@我的評論") ||
		 $(document).attr('title').match("收到的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("发出的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("我的私信") || $(document).attr('title').match("我的私人訊息") ||
		 $(document).attr('title').match("我的收藏") || $(document).attr('title').match("我的收藏")
	){
		$("<style type='text/css'> .kong_button_original { color:" + $('.MIB_linkbl > a').css("color") + "; } </style>").appendTo("head");
		$("<div><img id=\"kong_hover_img\" /></div>").appendTo("body");
		reading( options );
		topnav(options);
		leftside(options);
		rightside(options);
		mainboard(options);
		others(options);
		filter(options);
		notification(options);
	}
	//TODO Search page
	/*
	else if ( $(document).attr('title').match("微博搜索") || $(document).attr('title').match("微博搜尋") ){
		searchpage(options);
	}*/
	else if ( options['enable_friend'] == true ){
		friendpage(options);
	}
}

//get settings
chrome.extension.sendRequest({'action' : 'getOptions'}, doit);