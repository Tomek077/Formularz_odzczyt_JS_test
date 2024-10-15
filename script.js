<script>
function wyswietlDane() {
    // Pobieranie wartości z formularza
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    var wiadomosc = document.getElementById("wiadomosc").value;

    // Tworzenie tekstu do wyświetlenia
    var dane = "<h2>Wprowadzone dane:</h2>";
    dane += "<p><strong>Imię:</strong> " + imie + "</p>";
    dane += "<p><strong>Nazwisko:</strong> " + nazwisko + "</p>";
    dane += "<p><strong>E-mail:</strong> " + email + "</p>";
    dane += "<p><strong>Wiadomość:</strong> " + wiadomosc + "</p>";

    // Wyświetlanie danych
    document.getElementById("wynik").innerHTML = dane;
}
</script>