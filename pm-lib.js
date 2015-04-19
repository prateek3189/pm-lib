$(function(){
	$.fn.extend({
		customized: function() {
			var randStr	=	Math.random().toString().substr(2,8);
			var thisID		=	this.addClass("pm_"+randStr);
			var thisWidth	=	this.css("width");
			var selectHTML	=	'';
			selectHTML += '<div class="generateSelect" id="select_'+randStr+'"><span class="generateTitle" id="generated_'+randStr+'" dir="'+randStr+'">Select</span><ul class="generatSelectors" dir="'+randStr+'" id="selector_'+randStr+'">';
			var index	=	0;
			var selectTitle	=	'';
			$(this).children("option").each(function(){
				var liVal		=	$(this).val();
				var liHTML		=	$(this).html();
				selectHTML	+=	'<li dir="'+liVal+'" value="'+index+'"';
				if($(this).prop("selected")){
					selectHTML	+=	'class="selected"';	
					selectTitle	=	liHTML;
				}
				selectHTML	+=	'>'+liHTML+'</li>';
				index++;				
			});
			selectHTML	+=	'</ul></div>';
			$(".pm_"+randStr).after(selectHTML);
			if(selectTitle != ''){
				$("#generated_"+randStr).html(selectTitle);
			}
			$(".pm_"+randStr).hide();
		}
	});
	$('select').each(function(){
		$(this).customized();
	});
	
	$(document).on('click', '.generateTitle', function(e){
 		e.stopPropagation();
		$('.generatSelectors').hide();
		var thisID			=	$(this).attr("dir");
		var thisSelector	=	$("#selector_"+thisID);
		if(thisSelector.is(":visible")){
			thisSelector.hide();
		}else{
			thisSelector.show();
		}
		var scrollPos	=	isNaN(parseInt($('.generatSelectors li.selected').val())) ? 0 : parseInt($('.generatSelectors li.selected').val());
		var multiple	=	40;
		scrollPos		=	parseInt(scrollPos*multiple);
		thisSelector.scrollTop(scrollPos);
	});
	
	$(document).on('click', '.generatSelectors li', function(e){
		e.stopPropagation();
		var selectorID	=	$(this).parent().attr("dir");
		$('#selector_'+selectorID+' li').removeClass("selected");
		$(this).addClass("selected");
		var getVal	=	$(this).attr("dir");
		var getName	=	$(this).html();
		$(".pm_"+selectorID).val(getVal);
		$("#generated_"+selectorID).html(getName);
		$(".generatSelectors").hide();
	});

});
$(document).on("click",function(){
	$('.generatSelectors').hide();
});