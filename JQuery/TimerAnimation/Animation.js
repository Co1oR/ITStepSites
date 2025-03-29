$("document").ready(function(){
    function horizontalBoxMove() {
        $("#horizontalBox").animate({left: "80%"}, 1500, "swing", function () {
            $(this).animate({left: "0%"}, 1500, "swing", horizontalBoxMove);
        });
    }

    function verticalBoxMove() {
        $("#verticalBox").animate({ top: "80%" }, 1000, "swing", function(){
            $(this).animate({ top: "0%" }, 1000, "swing", verticalBoxMove);
        });
    }

    function fullBoxMove() {
        $("#fullBox").animate({left: "90%"}, 1500, "swing", function(){
            $(this).animate({top: "70%"}, 1500, "swing", function () {
                $(this).animate({left: "0%"}, 1500, "swing", function (){
                    $(this).animate({top: "0%"}, 1500, "swing", fullBoxMove)
                })
            })
        })
    }


    $("#divContainer").on("mouseover", ".col-12",function(){
        $(this).fadeTo(500, 0.5);
    }).on("mouseout", ".col-12", function(){
        $(this).fadeTo(500, 1);
    });

    $("#cardContainer").on("click", ".card", function(){
        $(this).addClass("d-none");
    });

    $("#horizontalBox").on("click", function (){
        horizontalBoxMove()
    });

    $("#verticalBox").on("click", function (){
        verticalBoxMove()
    });

    $("#fullBox").on("click", function (){
        fullBoxMove()
    })

    $("#startButton").on("click", function () {
        $("#textBox").hide().removeClass("d-none").addClass("d-flex justify-content-center").slideDown(1000);
    });
});