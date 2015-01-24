$(document).ready(function(){

	$(".all.link").click(function(){
        $("#grid li").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".webdesign.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.webdesign").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".webdev.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.webdev").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".video.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.video").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });
    $(".foto.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.foto").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });
    $(".sm.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.sm").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });
    $(".sonstiges.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.sonstiges").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });
    $(".ci.link").click(function(){
    	$("#grid li").addClass("hide");
        $("#grid li.ci").removeClass("hide");
        $('.link').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.gallery_fotos_rapp_link').on('click', function () {
	    $('.fotos_rapp').magnificPopup('open');
	});

	$('.gallery_fh_grafik_link').on('click', function () {
	    $('.fh_grafik').magnificPopup('open');
	});

	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		}
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			  patterns: {
			    youtube: {
			      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
			      id: 'v=', // String that splits URL in a two parts, second part should be %id%
			      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
			    },
			  },

			  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
			}
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

});
