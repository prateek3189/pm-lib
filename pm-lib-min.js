$(function(){$.fn.extend({customized:function(){var e=Math.random().toString().substr(2,8),t=(this.addClass("pm_"+e),document.createElement("div"));t.className="generateSelect",t.id="select_"+e;var r=document.createElement("span");r.className="generateTitle",r.id="generated_"+e,r.setAttribute("dir",e),r.innerHTML="Select",t.appendChild(r);var a=document.createElement("ul");a.className="generatSelectors",a.id="selector_"+e,a.setAttribute("dir",e);var i=0,s="";$(this).children("option").each(function(){var e=$(this).val(),t=$(this).html(),r=document.createElement("li");r.setAttribute("dir",e),r.setAttribute("value",i),$(this).prop("selected")&&(r.setAttribute("class","selected"),s=t),r.innerHTML=t,a.appendChild(r),i++}),t.appendChild(a),$(".pm_"+e).after(t),""!=s&&$("#generated_"+e).html(s),$(".pm_"+e).hide()}}),$("select").each(function(){$(this).customized()}),$(document).on("click",".generateTitle",function(){$(".generatSelectors").hide();var e=$(this).attr("dir"),t=$("#selector_"+e);t.is(":visible")?t.hide():t.show();var r=isNaN(parseInt($(".generatSelectors li.selected").val()))?0:parseInt($(".generatSelectors li.selected").val()),a=40;r=parseInt(r*a),t.scrollTop(r)}),$(document).on("click",".generatSelectors li",function(){var e=$(this).parent().attr("dir");$("#selector_"+e+" li").removeClass("selected"),$(this).addClass("selected");var t=$(this).attr("dir"),r=$(this).html();$(".pm_"+e).val(t),$("#generated_"+e).html(r),$(".generatSelectors").hide()})}),$(document).on("click",function(e){var t=e.target.className;"generateTitle"!=t&&$(".generatSelectors").hide()});