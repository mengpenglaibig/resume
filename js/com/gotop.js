define(['jquery'],function($){
	
	function goTop(){
	this.init();
	this.bind();
}

goTop.prototype={
		init:function(){
			this.$el=$('<div id="'+this.id+'" style="position:fixed;right:10px;bottom:20px;display:none;border:1px solid #ccc;border-radius:4px;padding:10px;">回到顶部</div>');
			$('body').append(this.$el);
			this.check();
		},
		check:function(){
			var _this=this;
			$(window).on('scroll',function(){
				var bodySt=$('body').scrollTop(),
					bodyH=$('body').height();
				if(bodySt>300){
					_this.$el.show("slow");
				}else{
					_this.$el.hide("slow");
				}
			})
		},

		bind:function(){
			this.$el.on('click',function(){
				$('body').animate({scrollTop:0},'slow');
			})
		}
}
return goTop;
})

