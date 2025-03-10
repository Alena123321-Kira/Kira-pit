$(function() {
    var e = {
        init: function() {
            if(typeof hide_ads_on_grid == 'undefined' || !hide_ads_on_grid){
                if ((this.placeholder(), "search" == estamos || estamos=="iconset" )) $("#bsa-placeholder-search").load("../ad_tags/apu_970x250.php",configData), leader_board_bsa && $("#bsa-placeholder-search2").load("../ad_tags/apu_970x250_2.php",configData);
                else if ("packs" == estamos || "setsbycategory" == estamos || "setsbystyle" == estamos) {
                    (e = $(".details-image-preview").width()), (i = $(".details-image-preview").height());
                    $("#apu-mixed-packs").css({
                        width: e + "px",
                        height: i + "px"
                    }), $("#bsa-placeholder-search").load("../ad_tags/apu_970x250.php",configData), leader_board_bsa;
                }
            }
        },
        placeholder: function() {

            var e = 0;
            if ("search" == estamos || estamos=="iconset") {
                if (("download" == estamos && (e = 3 * $(".icon-preview").height()), !(0 < $("#bsa-placeholder-search").length) && 0 !== $(".icon-grid").length)) {
                    var i = $(".icon-grid .icon-preview"),
                        t = Math.round($(".icon-grid").width() / $(".icon-preview").width()),
                        a = $(window).height() - $(".icon-grid").offset().top - $(".icon-preview").height() - e,
                        h = Math.ceil(a / $(".icon-preview").height());
                    (n = Math.floor(i.length / t)) < h && (h = n);
                    var o = t * h,
                        d = $("<div/>", {
                            id: "bsa-placeholder-search"
                        });
                    o > i.length && (o = i.length), i.eq(o - 1).after(d);
                }
                var r = 0;
      
            }else if ("packs" == estamos || "setsbycategory" == estamos || "setsbystyle" == estamos) {
                if (!(0 < $("#bsa-placeholder-search").length) && 0 !== $(".container-fluid").length) {
                    (i = $(".container-packs .details-image-preview")), (t = Math.round($(".container-packs").width() / $(".details-image-preview").width())), (a = $(".container-packs").offset().top - 6 * $(".details-image-preview").height()), (h = Math.ceil(a / $(".details-image-preview").height()));
                    (n = i.length / t) < h && (h = n);
                    (o = t * h), (d = $("<div/>", {
                        id: "bsa-placeholder-search"
                    }));
                    o > i.length && (o = i.length), i.eq(o - 1).after(d);
                }
             
            } else if (!(0 < $("#bsa-placeholder-search").length) && 0 !== $(".container-fluid").length) {
                var n;
                (i = $(".container-fluid .details-image-preview")), (t = Math.round($(".container-fluid").width() / $(".details-image-preview").width())), (a = $(".container-fluid").offset().top - 3 * $(".details-image-preview").height()), (h = Math.ceil(a / $(".details-image-preview").height()));
                (n = Math.floor(i.length / t)) < h && (h = n);
                (o = t * h), (d = $("<div/>", {
                    id: "bsa-placeholder-search"
                }));
                o > i.length && (o = i.length), i.eq(o - 1).after(d);
            }
        },
    };
    e.init(), $(document).on("search.results", function() {
        e.init();
    });
});
var getUrlParameter = function(e) {
    var i, t, a = window.location.search.substring(1).split("&");
    for (t = 0; t < a.length; t++)
        if ((i = a[t].split("="))[0] === e) return void 0 === i[1] || decodeURIComponent(i[1]);
};