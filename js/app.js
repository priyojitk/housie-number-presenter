$(document).ready(function() {
  let historyValue = new Set();
  $("#myInput").focus();

  $("button").click(function() {
    var res = $("#myInput").val();

    if (res !== "" && !historyValue.has(res)) {
      historyValue.add(res);
      $("#result").removeClass("w3-text-red");
      $("#result").text(res);
      $("#myInput").val("");
      $("#history").append(
        '<span class="w3-padding-small"> ' + res + " </span>"
      );
    } else {
      $("#result").addClass("w3-text-red");
    }
    $("#myInput").focus();
  });

  $("#myInput").keypress(function(e) {
    var key = e.which;
    if (key == 13) {
      // the enter key code
      var res = $("#myInput").val();
      if (res !== "" && !historyValue.has(res)) {
        historyValue.add(res);
        $("#result").removeClass("w3-text-red");
        $("#result")
          .text(res)
          .fadeIn();
        $("#myInput").val("");
        $("#history").append(
          '<span class="w3-padding-small "> ' + res + " </span>"
        );
      } else {
        $("#result").addClass("w3-text-red");
      }
    }
    $("#myInput").focus();
  });
});
