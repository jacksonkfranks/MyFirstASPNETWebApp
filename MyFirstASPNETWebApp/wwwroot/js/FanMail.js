////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("txtFrom").value +
////        ", Subject: " + document.getElementById("txtFrom").value +
////        ", Message: " + document.getElementById("txtMessage").value);
////})

$("#btnSend").click( function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtFrom").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeOut("slow");
})