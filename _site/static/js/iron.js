/*
2012 Hooppe.
Author: Mikael Carrara
*/


// Console

if(typeof(console) == 'undefined') console = { log : function(){} };
if(typeof(console.log) != 'function') console.log = function(){};


// Functions

var App = {

    StartApp: function() {
        try {
            this.FillHtmlData();
            this.InterfaceActions();
            this.FormActions();
        } catch (e) {
            alert('Existem erros no script.');
            console.log('Error: ' + e);
        }
    },

    FillHtmlData: function() {
      if(window.location.href.indexOf("iron-gym.html") > -1) {
		    $.getJSON("http://adminapi.herokuapp.com/api/v1/data.json", function(data) {

          $.each(data['iron-gym']['body_content'], function( index, data ) {
		        $(".content-int").append("<h3>" + data['title'] + "</h3>");
		        $(".content-int").append("<p>" + data['text'] + "</p>");
          });
		    });
      };
    },

    InterfaceActions: function() {

  		$("#tabs a").click(function(){
        $("#tabs a").removeClass("current");
        $(this).addClass("current");
        $("#horarios ul, #horarios img, #horarios .hide-h4, #tabs-cont div").hide();
        $('.' + $(this).data("show")).show();
  			return false;

  		}).filter(':first').click();

        // Nav
        $("nav a.active").append("<span class=\"bullet\"></span>");
        $("nav a").hover(
            function() {
                $(this).append("<span class=\"bullet\"></span>");
            },
            function() {
              $("nav a:not(.active) span.bullet").remove();
            }
        );

        // Videos
        $("#videos li").append("<span class=\"play\">Play</span>");
        $("#videos li").append("<span class=\"youtube\">Youtube</span>");

        // Banner
        $("#banner").carousel({
            interval: 8000
        });

        $("#banner").append("<a class=\"carousel-control left\" href=\"#banner\" data-slide=\"prev\">Previous</a>");
        $("#banner").append("<a class=\"carousel-control right\" href=\"#banner\" data-slide=\"next\">Next</a>");

        if ($("#banner .item").length <= 1) {
            $(".carousel-control").hide();
        }

        // Fancybox
        $(".fancybox").fancybox();

        $(".auto-load-fancybox").fancybox({
		      minWidth	: 700
        });
        $(".auto-load-fancybox").trigger('click');

    }, // Interface

    FormActions: function() {



    } // Formularios

} // Var Site

jQuery(function(){
	App.StartApp();
});