$(document).ready(function(){
    $(".menu-button").click(function(){
        if (parseInt($(".menu").css("right")) === 0) {
            $(".menu").animate({ right: "-250px" }, 300);
        } else {
            $(".menu").animate({ right: "0px" }, 300);
        }
        
    });

    // メニュー外をクリックすると閉じる
    $(document).click(function(event) {
        if (!$(event.target).closest(".menu-button, .menu").length) {
            $(".menu").animate({ right: "-250px" }, 300);
        }
    });
});