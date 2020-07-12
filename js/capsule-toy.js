var iEnd;
var iColor;
var prizeList = [
    "歌劇院怪人 / 歌劇院殺人事件",
    "地獄的傀儡師 / 魔術列車殺人事件",
    "兇鳥之命 / 魔神遺跡殺人事件",
    "放學後的魔術師 / 學園七大不可思議殺人事件",
    "雪夜叉 / 雪夜叉傳說殺人事件"
];

$(".capsule-toy-button").on("click", function() {

    var $this = $(this);

    iEnd = Math.floor(Math.random() * prizeList.length);
    var prize = prizeList[iEnd];
    iColor = Math.floor(Math.random() * 6);

    $this.addClass("active");
    $this.attr("disabled", "disabled");

    setTimeout(function() {
        $(".prize-ball").addClass("ball-color-" + iColor);
        $(".prize-ball").addClass("active");
    }, 4000);

    setTimeout(function() {
        $(".ball").addClass("ball-color-" + iColor);
        $("html").addClass("hide");
        $(".show-prize").addClass("show");
        $(".prize-text").html(prize);
        $this.removeClass("active");
        $this.removeAttr('disabled');
        $(".prize-ball").removeClass("ball-color-" + iColor);
        $(".prize-ball").removeClass("active");
    }, 6000);
});

$(".close").on("click", function() {
    $("html").removeClass("hide");
    $(".show-prize").removeClass("show");
    $(".ball").removeClass("ball-color-" + iColor);
});