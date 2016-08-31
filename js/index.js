/**
 * Created by Allen on 2016/8/31.
 */
(function(){
	var docked = 0;
	$("#dock li ul").height($(window).height());
	$("#dock .dock-keleyi-com").click(function () {
		$(this).parent().parent().addClass("docked").removeClass("free");
		docked += 1;
		var dockH = ($(window).height()) / docked
		var dockT = 0;
		$("#dock li ul.docked").each(function () {
			$(this).height(dockH).css("top", dockT + "px");
			dockT += dockH;
		});
		$(this).parent().find(".undock").show();
		$(this).hide();
		if (docked > 0)
			$("#content").css("margin-left", "250px");
		else
			$("#content").css("margin-left", "60px");
	});
	$("#dock .undock").click(function () {
		$(this).parent().parent().addClass("free").removeClass("docked")
			.animate({ left: "-180px" }, 200).height($(window).height()).css("top", "0px");
		docked = docked - 1;
		var dockH = ($(window).height()) / docked
		var dockT = 0;
		$("#dock li ul.docked").each(function () {
			$(this).height(dockH).css("top", dockT + "px");
			dockT += dockH;
		});
		$(this).parent().find(".dock-keleyi-com").show();
		$(this).hide();
		if (docked > 0)
			$("#content").css("margin-left", "250px");
		else
			$("#content").css("margin-left", "60px");
	});
	$("#dock li").hover(function () {
		$(this).find("ul").animate({ left: "40px" }, 200);
	}, function () {
		$(this).find("ul.free").animate({ left: "-180px" }, 200);
	});
	$("#dock #links .free li:not('.header,#demo-list-0,#demo-list-1,#demo-list-2')").click(function(){
		alert('正在加班中!....');
	});
	var doc = $(document);
	var showBox = $('#showBox');
	doc.on('click', '#demo-list-0', function(){
		showBox.attr('src', 'demos/snow.html');
	});

	doc.on('click', '#demo-list-1', function(){
		showBox.attr('src','demos/canvas.html');
	});

    doc.on('click', '#demo-list-2', function(){
        showBox.attr('src', 'demos/times.html');
    });

})();