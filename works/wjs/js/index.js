$(function(){
	banner();
})
function banner(){
	//获取后台轮播图图片数据 ajax
	//判断屏幕尺寸，移动端<768 还是PC
	//把后台数据 拼接成对应HTML字符串  字符串拼接&&模板引擎
	//填充到对应盒子
	//屏幕尺寸改变时，创新渲染页面 监听页面尺寸改变resize
	

	// 全局变量解决数据缓存，用于接受数据
	var myData;
	var getData=function(callback){
		if (myData) {
			callback&&callback(data);
			return false;  //如果有缓存，不再请求
		}
		$.ajax({
			url:'js/index.json',  //index引用js，从HTML到json需要加 js/
			type:'get',
			data:{},
			dataType:'json',
			success:function(data){
				myData=data;
				callback&&callback(data);
			}

		});
	}
	// 渲染
	var renderHtml=function(){
		getData(function(data){
			var width=$(window).width();
			var isMobile=false;
			if (width<768) {
				isMobile=true;
			}
			// 两个模板，点+图盒子
			var templatePoint=_.template($('#template_point').html());
			var templateImage=_.template($('#template_item').html());
			// 渲染成html
			var pointHtml=templatePoint({model:data});

			var imgData={
				list:data, //图片数据
				isMobile:isMobile
			}
			var imageHtml=templateImage({model:imgData});
			$('.carousel-inner').html(pointHtml);
			$('.carousel-indicators').html(imageHtml);
		});
	}
	// renderHtml();


	$(window).on('resize',function(){
		renderHtml();
		// 避免每次改变窗口都发出请求，用数据缓存解决
	}).trigger('resize'); //绑定事件后，即时执行
	
	// 手势滑动
	var startX=0,moveX=0,distanceX=0,isMove=false;
	$('.wjs_banner').on('touchstart',function(e){

	});
	$('.wjs_banner').on('touchmove',function(e){

	});
	$('.wjs_banner').on('touchend',function(e){

	});
}
