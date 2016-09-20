$(function () {
    var documentWidth = $(document).width();
    $(".onepage-wrapper").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });
    var clouds = buildCloud();
    $("body").append(clouds);
    $(".cloud").each(function () {
        var cloud = $(this);
        setInterval(function () {
            var width = $(".cloud:first").width();
            var leftPosition = cloud.position().left;
            var nextPosition = leftPosition - (cloud.hasClass("small") ? 1 : cloud.hasClass("big") ? 3 : 2);
            if(nextPosition + width > 0){
                cloud.css({left:nextPosition});
            }else{
                cloud.css({left:documentWidth});
                cloud.css({top:(Math.random() * 80 + 5) + '%'});
            }
        }, 100)
    });
});

function buildCloud(num) {
    var size = num ? num : Math.random() * 3 + 6;
    var colWidth = $(document).width() / size;
    var clouds = "";
    for (var i = 0; i < size; i++) {
        var randomInt = Math.random() * 100;
        clouds += '<i class="cloud icon ' + (randomInt < 30 ? "small" : randomInt < 60 ? "" : "big") + '" style="left:' + (i + 0.3) * colWidth + 'px;top:' + (Math.random() * 80 + 5) + '%"></i>';
    }
    return clouds;
}

