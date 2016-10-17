//===============================================
//PLACEHOLDER
//===============================================
(function($){
	$('input[value], textarea').each(function(){

		var elem = $(this),
			placeholder = elem.val();

		if(elem.is(':submit'))return;

		if(elem.is(':password')){
			elem.wrap('<span class="wrap-password-field" style="display:inline-block; vertical-align:middle; position:relative; overflow:hidden;"/>');
			elem.after('<input type="text" class="pseudo-elem ' + elem.attr('class') + '" style="position:absolute; top:0; left:0;" value="' + placeholder + '">');

			elem.removeAttr('style').val('');

			var pseudoElem = $(elem.siblings());
			pseudoElem.focus(function(){
				$(this).hide();
				elem.trigger('focus');
			});
			elem.blur(function(){
				if(elem.val()) return;
				pseudoElem.show();
			});

			return;
		}

		elem.focus(function(){
			if(elem.val() == placeholder) elem.val('');
		});
		elem.blur(function(){
			if(isBlank(elem.val())) elem.val(placeholder);
		});

		function isBlank(str) {
			return (!/\S/.test(str));
		}
	});
})(jQuery);
