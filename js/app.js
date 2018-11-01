$(document).ready(function () {
    $("#myInput").focus();
    $("button").click(function () {
        var res = $("#myInput").val();
        $("#result").text(res);
        $("#myInput").val("");
        $("#history").append("<span class=\"w3-padding-small\"> " + res + " </span>");
    });

    $('#myInput').keypress(function (e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            var res = $("#myInput").val();
            $("#result").text(res).fadeIn();
            $("#myInput").val("");
            $("#history").append("<span class=\" w3-padding-small \"> " + res +" </span>");
        }
    });
});