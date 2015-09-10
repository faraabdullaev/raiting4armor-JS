(function($){
	jQuery.fn.LineRating = function(){
		$make = function(){
			$hidden = $(this).find('.hidden-voice');
			$rating = $(this).find('.rating-voice');
			$hidden.on('mousemove click', function(e){
				calculate(e, $(this));
			});
			$rating.on('mousemove click', function(e){
				calculate(e, $(this));
			});
		};

		function calculate(event, obj){
			$offset = obj.offset();
			$byX = (event.pageX - $offset.left);
			$rt = $byX/1.8;
			$rating
				.css('width', $rt+'%');
		};
		
		return this.each($make);
	};
})(jQuery);
