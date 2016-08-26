define(['jquery','gotop','lazyload'],function($,goTop,lazyLoad){
	new goTop();
	lazyLoad.init($('#work .thumbnail img'));
	
	//导航栏下方展示
	$(function(){
	$('#logo li').stop().hover(function(){
		$('span',this).css('height','2px');
		$('span',this).animate({
			left:'0',
			width:'100%',
			right:'0'
	},200);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},200);
	})	
	})

	$(document).ready(function(){
	$('.div').hide();
	$('.books_ul li').hover(function(){
		$('.div',this).slideToggle(500);
	})
	})
	
//蒙层
$('.btnintor').on('click',function(e){
	e.preventDefault();
	$('.wrap').css('display','block');

})
$('.cover-introwrap .btn').on('click',function(e){
	e.preventDefault();
	$('.wrap').css('display','none')

})
$('.introwrap').on('click',function(){
	$('.wrap').css('display','none')

})
	
})