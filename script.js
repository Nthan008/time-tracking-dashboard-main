$(function () {
    $("#day").hide();
    $("#month").hide();
    $("#btn1").click(function () {
        $("#week").hide();
        $("#month").hide();
        $("#day").show();
    });
    $("#btn2").click(function () {
        $("#week").show();
        $("#month").hide();
        $("#day").hide();
    });
    $("#btn3").click(function () {
        $("#week").hide();
        $("#month").show();
        $("#day").hide();
    });
});
