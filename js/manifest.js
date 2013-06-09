/********************************
Copyright (c) 2011~2012 Min Zhang
http://code.google.com/p/wei-bo-kong/
License: LGPL v2.1
********************************/
this.manifest = {
    "name": "微博新控-设置",
    "icon": "icon.png",
    "settings": [
    {
        "tab": "基本设置",
        "group": "全局设置",
        "name": "enable_all",
        "type": "checkbox",
        "label": "启用微博控"
    },

    {
        "tab": "基本设置",
        "group": "全局设置",
        "name": "description",
        "type": "description",
        "text": "*此选项为该扩展的全局开关，请确保选中"
    },

    {
        "tab": "基本设置",
        "group": "当前版本更新详情",
        "name": "auth_status",
        "type": "description",
        "text": chrome.i18n.getMessage("appChangelog")
    },
	/*
		Top
	*/
	{
        "tab": "顶端导航条",
        "group": "全局设置",
        "name": "hide_top",	
        "type": "checkbox",
        "label": "隐藏所有元素"
    },

    {
        "tab": "顶端导航条",
        "group": "全局设置",
        "name": "disable_top_float",     
        "type": "checkbox",
        "label": "禁止导航条随屏幕滚动 "
    },
	{
        "tab": "顶端导航条",
        "group": "详细设置",
        "name": "hide_top_logo",
        "type": "checkbox",
        "label": "隐藏新浪图标"
    },
	{
        "tab": "顶端导航条",
        "group": "详细设置",
        "name": "hide_top_left",
        "type": "checkbox",	
        "label": "隐藏左侧链接"
    },
	{
        "tab": "顶端导航条",
        "group": "详细设置",
        "name": "hide_top_search",
        "type": "checkbox",	
        "label": "隐藏搜索栏"
    },
	{
        "tab": "顶端导航条",
        "group": "详细设置",
        "name": "hide_top_right",
        "type": "checkbox",	
        "label": "隐藏右侧链接"
    },
	{
        "tab": "顶端导航条",
        "group": "详细设置",
        "name": "hide_top_tips",
        "type": "checkbox",	
        "label": "隐藏小提示"
    },	
		/*
			Left
		*/
		{
            "tab": "体验版左侧边栏",
            "group": "详细设置",
            "name": "hide_left_info",
            "type": "checkbox",
            "label": "隐藏用户信息"
        },
		{
            "tab": "体验版左侧边栏",
            "group": "详细设置",
            "name": "hide_left_nav",
            "type": "checkbox",
            "label": "隐藏导航栏"
        },
		{
            "tab": "体验版左侧边栏",
            "group": "详细设置",
            "name": "hide_left_link",
            "type": "checkbox",
            "label": "隐藏其余链接"
        },
		{
            "tab": "体验版左侧边栏",
            "group": "详细设置",
            "name": "hide_left_game",
            "type": "checkbox",
            "label": "隐藏微博游戏"
        },
		{
            "tab": "体验版左侧边栏",
            "group": "详细设置",
            "name": "hide_left_app",
            "type": "checkbox",
            "label": "隐藏微博应用"
        },
		
		
		/*
			Right
		*/
		{
            "tab": "右侧边栏",
            "group": "全局设置",
            "name": "hide_right",
            "type": "checkbox",
            "label": "隐藏所有元素"
        },
		
		{
            "tab": "右侧边栏",
            "group": "全局设置",
            "name": "hide_right_ads",
            "type": "checkbox",
            "label": "隐藏广告"
        },

        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_info",
            "type": "checkbox",
            "label": "隐藏个人资料"
        },
            
            {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_mood",
            "type": "checkbox",
            "label": "隐藏写心情"
        },
            
            {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_medals",
            "type": "checkbox",
            "label": "隐藏勋章"
        },
            
        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_nav",
            "type": "checkbox",
            "label": "隐藏导航"
        },
      
        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_people",
            "type": "checkbox",
            "label": "隐藏可能感兴趣的人"
        },
            
        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_topic",
            "type": "checkbox",
            "label": "隐藏热门话题"
        },

        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_alltopic",
            "type": "checkbox",
            "label": "隐藏关注的话题"
        },

        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_vip",
            "type": "checkbox",
            "label": "隐藏会员专区 <strong style='color:red'>[Fixed]</strong>"
        },

        {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_interestgroup",
            "type": "checkbox",
            "label": "隐藏微群"
        },

    {
        "tab": "右侧边栏",
        "group": "详细设置",
        "name": "hide_right_kan",
        "type": "checkbox",
        "label": "隐藏微刊 <strong style='color:red'>[New]</strong>"
    },

      {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_apps",
            "type": "checkbox",
            "label": "隐藏应用"
      },

      {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_help",
            "type": "checkbox",
            "label": "隐藏玩转微博"
        },

            
      {
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_notice",
            "type": "checkbox",
            "label": "隐藏公告栏"
      },
            

            
		
		/*
			Main
		*/
		{
            "tab": "主面板",
            "group": "优化功能",
            "name": "hover_main_img",
            "type": "checkbox",
            "label": "鼠标悬浮显示大图"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "enlarge_main_post",
            "type": "checkbox",
            "label": "增大发布栏"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_post",
            "type": "checkbox",
            "label": "隐藏发布栏"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_title",
            "type": "checkbox",
            "label": "隐藏发布器标题"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_tips",
            "type": "checkbox",
            "label": "隐藏推荐"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_nav",
            "type": "checkbox",
            "label": "隐藏分组导航"
        },

        {
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_sort",
            "type": "checkbox",
            "label": "隐藏排序 <strong style='color:red'>[New]</strong>"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_micro",
            "type": "checkbox",
            "label": "精简模式(仅显示微博正文,隐藏转发,收藏,评论等功能)"
        },
      {
            "tab": "主面板",
            "group": "详细设置",
            "name": "enable_reading_indicator",
            "type": "checkbox",
            "label": "添加阅读指示器"
      },
		
		/*
			Other
		*/
		{
            "tab": "其它",
            "group": "详细设置",
            "name": "hide_other_ads",
            "type": "checkbox",
            "label": "隐藏底部广告"
        },
		
		{
            "tab": "其它",
            "group": "详细设置",
            "name": "hide_other_bot",
            "type": "checkbox",
            "label": "隐藏底部链接"
        },
		
		/*
			Friend
		*/
		{
            "tab": "好友页面",
            "group": "全局设置",
            "name": "enable_friend",
            "type": "checkbox",
            "label": "启用好友页面优化"
        },
		
		/*
			Top
		*/
		{
            "tab": "好友页面",
            "group": "顶端导航条",
            "name": "hide_top_friend",	
            "type": "checkbox",
            "label": "隐藏所有元素"
        },
		
		
		{
            "tab": "好友页面",
            "group": "顶端导航条",
            "name": "hide_top_logo_friend",
            "type": "checkbox",
            "label": "隐藏新浪图标"
        },
		
		{
            "tab": "好友页面",
            "group": "顶端导航条",
            "name": "hide_top_left_friend",
            "type": "checkbox",	
            "label": "隐藏左侧链接"
        },
		
		{
            "tab": "好友页面",
            "group": "顶端导航条",
            "name": "hide_top_search_friend",
            "type": "checkbox",	
            "label": "隐藏搜索栏"
        },
		
		{
            "tab": "好友页面",
            "group": "顶端导航条",
            "name": "hide_top_right_friend",
            "type": "checkbox",	
            "label": "隐藏右侧链接"
        },
		
		/*
			Right
		*/
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_info_friend",
            "type": "checkbox",
            "label": "隐藏个人信息"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_medal_friend",
            "type": "checkbox",
            "label": "隐藏好友徽章"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_follow_friend",
            "type": "checkbox",
            "label": "隐藏'关注Ta的人同时关注'"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_bothfollow_friend",
            "type": "checkbox",
            "label": "隐藏'这些人也关注Ta'"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_same_friend",
            "type": "checkbox",
            "label": "隐藏共同好友"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_userinfo_friend",
            "type": "checkbox",
            "label": "隐藏好友信息"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_tag_friend",
            "type": "checkbox",
            "label": "隐藏好友标签"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_topic_friend",
            "type": "checkbox",
            "label": "隐藏好友关注的话题"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_fan_friend",
            "type": "checkbox",
            "label": "隐藏好友粉丝"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_feedback_friend",
            "type": "checkbox",
            "label": "隐藏意见反馈"
        },
		
		{
            "tab": "好友页面",
            "group": "右侧边栏",
            "name": "hide_right_report_friend",
            "type": "checkbox",
            "label": "隐藏举报"
        },
		
		/*
			Main
		*/
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_relation_friend",
            "type": "checkbox",
            "label": "隐藏关注情况"
        },
		
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_handle_friend",
            "type": "checkbox",
            "label": "隐藏好友操作"
        },
		
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_album_friend",
            "type": "checkbox",
            "label": "隐藏好友相册"
        },
		
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_tab_friend",
            "type": "checkbox",
            "label": "隐藏微博/TA的资料"
        },
		
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_filter_friend",
            "type": "checkbox",
            "label": "隐藏筛选"
        },
		
		{
            "tab": "好友页面",
            "group": "主面板",
            "name": "hide_main_micro_friend",
            "type": "checkbox",
            "label": "精简模式(仅显示微博正文,隐藏转发,收藏,评论等功能)"
        },
		
		/*
			Other
		*/
		{
            "tab": "好友页面",
            "group": "其它设置",
            "name": "hide_other_bot_friend",
            "type": "checkbox",
            "label": "隐藏底部链接"
        },

        /*
                  Reading
            */
      

        {
            "tab": "阅读模式",
            "group": "全局设置",
            "name": "enable_reading_mode",
            "type": "checkbox",
            "label": "启用阅读模式"
        },

        {
            "tab": "阅读模式",
            "group": "全局设置",
            "name": "b",
            "type": "description",
            "text": "快捷键列表：<br/>R ：打开阅读模式;<br/> Esc ：退出阅读模式",
        },
      
        {
            "tab": "阅读模式",
            "group": "阅读模式宽度",
            "name": "reading_mode_width",
            "type": "slider",
            "display": true,
            "min": 50,
            "max": 100,
            "step": 2,
        },

        {
            "tab": "阅读模式",
            "group": "阅读模式宽度",
            "name": "b",
            "type": "description",
            "text": "*占屏幕百分比，如70就是占屏幕70%宽度",
        },

        {
            "tab": "阅读模式",
            "group": "详细设置",
            "name": "b",
            "type": "description",
            "text": "*以下设置在进入阅读模式后生效",
        },

        {
            "tab": "阅读模式",
            "group": "详细设置",
            "name": "enable_reading_hidingtop",
            "type": "checkbox",
            "label": "隐藏微博顶部导航条",
        },

        {
            "tab": "阅读模式",
            "group": "详细设置",
            "name": "enable_reading_enlarge_font",
            "type": "checkbox",
            "label": "增大字体",
        },

        {
            "tab": "阅读模式",
            "group": "详细设置",
            "name": "enable_reading_hidingbuttons",
            "type": "checkbox",
            "label": "隐藏'评论''转发''收藏'等按钮",
        },

      

      {
            "tab": "阅读模式",
            "group": "备注",
            "name": "b",
            "type": "description",
            "text": "*阅读模式和[主面板]共享优化方案，如果你想更改阅读模式内部样式，请至[主面板]<br/>*阅读模式暂时在测试中，如果你有意见或建议请<a href=\"http://t.ye11ow.me/chrome-weibokongnew/feedback/\" target=\"blank\">猛击此处</a>",
      },

		/*
			Notification
		*/
	{
            "tab": "消息提醒",
            "group": "全局设置",
            "name": "enable_notification",
            "type": "checkbox",
            "label": "启用消息提醒"
    },
    {
            "tab": "消息提醒",
            "group": "全局设置",
            "name": "enable_notification_sound",
            "type": "checkbox",
            "label": "播放提示音 <strong style='color:red'>[New]</strong>"
    },
      {
            "tab": "消息提醒",
            "group": "全局设置",
            "name": "notification_time",
            "type": "slider",
            "display": true,
            "min": 5,
            "max": 60,
            "step": 5,
      },

      {
            "tab": "消息提醒",
            "group": "全局设置",
            "name": "b",
            "type": "description",
            "text": "*消息提醒持续时间(秒)",
      },
		{
            "tab": "消息提醒",
            "group": "桌面提醒",
            "name": "notification_post",
            "type": "checkbox",
            "label": "有新微博时"
        },
		{
            "tab": "消息提醒",
            "group": "桌面提醒",
            "name": "notification_comment",
            "type": "checkbox",
            "label": "有新评论时"
        },
		{
            "tab": "消息提醒",
            "group": "桌面提醒",
            "name": "notification_atme",
            "type": "checkbox",
            "label": "有新@时"
        },
        {
            "tab": "消息提醒",
            "group": "桌面提醒",
            "name": "notification_msg",
            "type": "checkbox",
            "label": "有新私信时"
        },
		
		{
            "tab": "消息提醒",
            "group": "标题闪烁",
            "name": "notification_post_title",
            "type": "checkbox",
            "label": "有新微博时"
        },
		{
            "tab": "消息提醒",
            "group": "标题闪烁",
            "name": "notification_comment_title",
            "type": "checkbox",
            "label": "有新评论时"
        },
		{
            "tab": "消息提醒",
            "group": "标题闪烁",
            "name": "notification_atme_title",
            "type": "checkbox",
            "label": "有新@时"
        },

    //filter
	   {
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "enable_filter",
            "type": "checkbox",
            "label": "启用过滤用户 <strong style='color:red'>[New]</strong>",
        },
        
        {
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "filter",
            "type": "text",
            "label": "请输入想屏蔽用户名",
            "text": "以半角逗号,分隔用户名",
            "masked": "false"
        },
        
        {
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "bugs",
            "type": "description",
            "text": "*请以半角逗号分隔多个用户名"
        },
        
        {
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "enable_filter_keyword_origin",
            "type": "checkbox",
            "label": "过滤原创内容",
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "enable_filter_keyword_forward",
            "type": "checkbox",
            "label": "过滤转发内容",
        },
		
	   {
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "filter_keyword",
            "type": "text",
            "label": "请输入想屏蔽的关键字",
			"text": "以半角逗号,分隔关键字",
			"masked": "false"
        },

        {
            "tab": "消息过滤",
            "group": "过滤来自",
            "name": "enable_filter_source",
            "type": "checkbox",
            "label": "过滤来自特定应用的微博",
        },
        
       {
            "tab": "消息过滤",
            "group": "过滤来自",
            "name": "filter_source_keyword",
            "type": "text",
            "label": "请输入想屏蔽的关键字",
            "text": "以半角逗号,分隔关键字",
            "masked": "false"
        },

        {
            "tab": "消息过滤",
            "group": "过滤来自",
            "name": "thx",
            "type": "description",
            "text": "使用介绍:你可以在此屏蔽来自豆瓣电影、虾米音乐、皮皮时光机等好友在第三方网站发布的微博条目。例如你想屏蔽所有来自豆瓣电影的条目，请激活【过滤来自特定应用的微博】，并且在关键字中填上“豆瓣电影”。同样，你可以屏蔽自定的关键字，只需要把某个条目下面“来自XX”中的“XX”复制到过滤关键字里面就ok了。详细图文教程请猛击<a target='_blank' href='http://t.ye11ow.me/chrome-weibokongnew/#屏蔽功能'>此处</a>。"
        },
		
		/*
			About
		*/
		{
            "tab": "关于",
            "group": "关于微博控",
            "name": "thx",
            "type": "description",
            "text": "非常感谢您的使用!"
        },
		
		{
            "tab": "关于",
            "group": "版本信息",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appVersion")
        },
		
		{
            "tab": "关于",
            "group": "发布时间",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appReleaseDate")
        },
		
	{
            "tab": "关于",
            "group": "更新详情",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appChangelog")
      },
		
	{
            "tab": "关于",
            "group": "已知Bug",
            "name": "version",
            "type": "description",
            "text": "1. 关于消息提醒的延迟：这不是bug，因为受限制于扩展实现原理，如果想要即时弹出消息提醒，会消耗较大资源。因此该扩展会每10秒查看一次是否有新消息，这也就是延迟的原因<br/><br/>"
      },
		
		{
            "tab": "关于",
            "group": "相关网页",
            "name": "version",
            "type": "description",
            "text": "<a href=\"http://t.ye11ow.me/\" target=\"blank\">访问官方博客</a><br><a href=\"http://t.ye11ow.me/chrome-weibokongnew/changelog/\" target=\"blank\">访问历史更新记录</a><br><a href=\"http://chrome.google.com/webstore/detail/pimgjnopcjhodkapdnhlmgnjeaegdfam\" target=\"blank\">访问微博新控Chrome商店</a>"
        },
		
	  {
            "tab": "关于",
            "group": "关于微博控",
            "name": "bug",
            "type": "description",
            "text": "关于Bug和建议:请发送邮件至ye111111ow (at) gmail.com 或<a href=\"http://t.ye11ow.me/chrome-weibokongnew/feedback/\" target=\"blank\">猛击此处</a>非常感谢!"
        }
	]
}