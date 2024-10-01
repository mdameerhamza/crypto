jQuery(document).ready(function(){
  // Add smooth scrolling to all links
  jQuery("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = jQuery(".scrollTop");

  jQuery(window).scroll(function() {
    // declare variable
    var topPos = jQuery(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      jQuery(scrollTop).css("opacity", "1");

    } else {
      jQuery(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  jQuery(scrollTop).click(function() {
    jQuery('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = jQuery("#h1").position();
  var h2 = jQuery("#h2").position();
  var h3 = jQuery("#h3").position();

  jQuery('.link1').click(function() {
    jQuery('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  jQuery('.link2').click(function() {
    jQuery('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  jQuery('.link3').click(function() {
    jQuery('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

});



// scrollify

// COMMENTED BY ALI
// jQuery(function(){
//     jQuery.scrollify({
//         section:".test",
//         scrollSpeed: 700,
//     });
// });


//COMMENTED BY ALI BECAUSE BOOTSTRAP CAROUSEL STOPPED WORKING
/** carousel js **/

// jQuery(document).ready(function() {
//   if (jQuery(".carousel-bazaar").hasClass('is-on') == false) {
//     jQuery(".carousel-bazaar").slick({
//       lazyLoad: "ondemand",
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       dots: true,
//       prevArrow: '<i class="glyphicon glyphicon-chevron-left"></i>',
//       nextArrow: '<i class="glyphicon glyphicon-chevron-right"></i>'
//     });
//     jQuery(".carousel-bazaar").addClass("is-on");
//   }

//   if (jQuery(".variants-gallery-carousel").hasClass('is-on') == false) {
//     jQuery(".variants-gallery-carousel").slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       infinite: false,

//       prevArrow: '<i class="glyphicon glyphicon-chevron-left"></i>',
//       nextArrow: '<i class="glyphicon glyphicon-chevron-right"></i>'
//     });
//     jQuery(".variants-gallery-carousel").addClass("is-on");
//   }

//   jQuery(".box.box-product").hover(
//     function() {
//       var jQueryvariantBox = jQuery(this).find('.box-shadow');
//       if ($variantBox.length) {
//         $variantBox.show();
//         $variantBox.find('.variants-gallery-carousel').get(0).slick.setPosition();
//       }
//     },
//     function() {
//       var $variantBox = jQuery(this).find('.box-shadow');
//       if ($variantBox.length) {
//         jQueryvariantBox.hide();
//       }
//     }
//   );
// });


/**   STICKY HEADER  **/
 jQuery(window).load(function(){
      jQuery("#header").sticky({ topSpacing: 0 });
    });



 jQuery(document).scroll(function() {
    height = jQuery(document).scrollTop();
    if (height > 100 ) {
      jQuery("#header").addClass("short-height");
    }
    else {
      jQuery("#header").removeClass("short-height");
    }
})


// var height = jQuery(window).height() - jQuery('#test').height() - jQuery('#primary').height();
// cal = jQuery('#nosotros-section').css("min-height",height+"px");

// console.log(height);
// console.log("cal" + cal);

jQuery(document).ready(function($) {
var targets = jQuery('.test'); // List of elements to scroll to
var index = 0;
var duration = 500;
var canScroll = true;
var cache;

function limit(x, min, max) {
    return Math.min(max, Math.max(min, x));
}

jQuery(window).mousewheel(function (ev) {
    
    if (canScroll) {
        
        cache = index;
        
        if (ev.deltaY < 0) {
            index = index + 1; // Scrolling down, so increase index
        } else {
            index = index - 1; // Scrolling up, so decrease index
        }
    
        // Make sure the index is between 0 and (targets.length - 1)
        index = limit(index, 0, targets.length - 1);

        console.log(index);
        console.log(cache);
                    
        // Make sure to scroll if and only if the value has changed
        if (index !== cache) {
        
        // Scroll to the target element:
        jQuery(window).scrollTo(targets.get(index), {
            duration: duration,
            easing: 'swing'
        });

        canScroll = false;
        setTimeout(function () {
            canScroll = true;
        }, duration);
    }
}
        
ev.preventDefault();
return false;
});
});