window.onload = (function () {


    fetch('/colors', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(
            kolor()
        ),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            console.log(typeof (data))
            if (data.success) {
                console.log(data)
            }
            else {
                alert("Nie działa")
            }
        })
        .catch((error) => {
            console.log('Error:', error)
        })
})


function kolor() {
    let kolorki = []
    for (i = 0; i < 4; i++) {
        kolorki[i] = Math.floor(Math.random() * 5)
        console.log(kolorki)
    }


    return kolorki
}