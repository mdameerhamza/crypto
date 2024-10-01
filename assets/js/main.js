! function() {
    "use strict";
    $(document).ready(function() {
        var o = 0;
        $(window).scroll(function() {
            var n = $(window).scrollTop(),
                a = "";
            if (a = n > o ? "down" : "up", n >= 60 ? $(".scroll-to-top").addClass("go-up") : $(".scroll-to-top").removeClass("go-up"), $(".scroll-to-top").on("click", function() {
                    $("body,html").stop().animate({
                        scrollTop: 0
                    }, 1e3)
                }), n >= 220 && "down" == a) {
                if (o = n, $(".main-top-navigation").hasClass("slideOutUp")) return;
                $(".main-top-navigation").removeClass("slideInDown").addClass("slideOutUp")
            } else {
                if (o = n, $(".main-top-navigation").hasClass("slideInDown")) return;
                $(".main-top-navigation").removeClass("slideOutUp").addClass("slideInDown")
            }
        }), $("#magen-plugin").magenCryptoLiveMarketCap({
            developmentMode: !0,
            donateWalletAddress: "1KU2zUgGuCSZ5hRqLhvZBMjyiEASDyngNJ",
            setCurrencyMinimumFractionDigits: 2,
            coinHistoryDuration: "365day",
            showTotalMarketSummary: !0,
            showCoinsRankColumn: !0,
            onReady: function() {
                $(".loading-screen").hide()
            }
        })
    })
}();
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
