
window.onload = (function () {
    buttonik()
})

function buttonik() {
    let nick
    $("#guzik").on("click", function () {
        nick = $("#inpucik").val()
        console.log(nick)
        if (nick == null || nick == "") {
            console.log("Nie podano nicku")
        }
        else {
            console.log(nick)
            var nick1 = { "nick": nick }
            $.ajax({
                url: "/nick",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(nick1),
                success: function (data) {
                    //wypisanie danych z serwera (pobranych z inputa)
                    console.log()
                },
                error: function (xhr, status, error) {
                    console.log(xhr);
                },
            })

        }


    })


}


