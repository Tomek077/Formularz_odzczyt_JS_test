# **Zmodyfikowany Tutorial: Krok po kroku tworzenie strony z formularzem i skryptu z użyciem Visual Studio Code**

### **1. Utwórz plik HTML**

- W **Eksploratorze plików** po lewej stronie (ikona folderu) zobaczysz strukturę swojego projektu.
- Kliknij prawym przyciskiem myszy na nazwę swojego projektu lub na pusty obszar w głównym folderze.
- Wybierz opcję **"New File"** (Nowy plik).
- Nazwij plik **`index.html`**.

### **2. Wpisz kod HTML**

- Kliknij dwukrotnie na **`index.html`**, aby go otworzyć w edytorze.
- Skopiuj poniższy kod i wklej go do pliku:

  ```html
  <!DOCTYPE html>
  <html lang="pl">
  <head>
      <meta charset="UTF-8">
      <title>Prosty Formularz</title>
      <script src="script.js" defer></script>
  </head>
  <body>

      <!-- Formularz -->
      <form id="mojFormularz">
          <label for="imie">Imię:</label>
          <input type="text" id="imie" name="imie"><br><br>

          <label for="nazwisko">Nazwisko:</label>
          <input type="text" id="nazwisko" name="nazwisko"><br><br>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email"><br><br>

          <label for="wiadomosc">Wiadomość:</label><br>
          <textarea id="wiadomosc" name="wiadomosc"></textarea><br><br>

          <button type="button" onclick="wyswietlDane()">Wyświetl</button>
      </form>

      <!-- Miejsce na wyświetlenie danych -->
      <div id="wynik"></div>

  </body>
  </html>
  ```

### **3. Zapisz plik**

- Możesz zapisać plik, klikając **"File"** w menu i wybierając **"Save"**, lub używając skrótu klawiszowego **Ctrl+S** (Windows) lub **Cmd+S** (macOS).

### **4. Utwórz plik JavaScript**

- W **Eksploratorze plików** kliknij prawym przyciskiem myszy na główny folder projektu.
- Wybierz **"New File"**.
- Nazwij plik **`script.js`**.

### **5. Wpisz kod JavaScript**

- Kliknij dwukrotnie na **`script.js`**, aby go otworzyć w edytorze.
- Skopiuj poniższy kod i wklej go do pliku:

  ```javascript
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
  ```

### **6. Zapisz plik**

- Zapisz plik tak samo, jak poprzednio.

---

## **Krok 5: Dodaj commit i wypchnij zmiany na GitHub za pomocą Visual Studio Code**

### **1. Sprawdź zmiany w panelu Source Control**

- Kliknij na ikonę **"Source Control"** po lewej stronie (ikona gałązki).
- Zobaczysz listę zmienionych plików pod sekcją **"Changes"**.
- Powinny tam być **`index.html`** i **`script.js`**.

### **2. Dodaj pliki do commita**

- Zaznacz oba pliki, klikając na znak **"+"** (plus) obok każdego z nich.
- Pliki przeniosą się do sekcji **"Staged Changes"**.

### **3. Napisz wiadomość commita**

- W polu u góry wpisz wiadomość, np. **"Dodano pliki index.html i script.js z formularzem i skryptem"**.

### **4. Wykonaj commit**

- Naciśnij **"Ctrl+Enter"** (Windows) lub **"Cmd+Enter"** (macOS), aby zatwierdzić commit.
- Możesz też kliknąć znaczek **"✔"** (ptaszek) u góry panelu.

### **5. Wypchnij zmiany na GitHub**

- Po wykonaniu commita, na dole Visual Studio Code pojawi się komunikat **"Synchronize Changes"** lub podobny.
- Kliknij na przycisk **"Synchronize Changes"** (ikona dwóch strzałek).
- Jeśli pojawi się pytanie **"Do you want to publish the 'main' branch?"**, kliknij **"OK"**.
- Może pojawić się okno logowania do GitHuba – zaloguj się, jeśli to konieczne.

### **6. Poczekaj na zakończenie procesu**

- Visual Studio Code wypchnie Twoje zmiany na GitHub.
- Gdy proces się zakończy, komunikat **"Synchronizing changes"** zniknie.

---

## **Krok 6: Sprawdź wyniki testów**

### **1. Przejdź do swojego repozytorium na GitHub**

- Otwórz przeglądarkę i wejdź na stronę swojego repozytorium.

### **2. Otwórz zakładkę "Actions"**

- Kliknij na zakładkę **"Actions"** w menu u góry strony.

### **3. Znajdź uruchomiony workflow**

- Powinieneś zobaczyć listę uruchomionych akcji.
- Znajdź ostatnią akcję z etykietą **"Autograding"** lub podobną.

### **4. Otwórz szczegóły testu**

- Kliknij na akcję, aby zobaczyć szczegóły.
- Wybierz etap, który pokazuje wyniki testów.

### **5. Przeczytaj wyniki testów**

- Zobaczysz, które testy zostały zaliczone, a które nie.
- Jeśli wszystkie testy przeszły pomyślnie, gratulacje!
- Jeśli jakiś test nie przeszedł, zobaczysz informacje o błędach.

---

## **Krok 7: Analiza i poprawa błędów (jeśli wystąpiły)**

### **1. Zrozumienie wyników**

- **Zaliczone testy** są oznaczone jako **"PASS"**.
- **Niezaliczone testy** są oznaczone jako **"FAIL"**.

### **2. Identyfikacja problemów**

- Przeczytaj komunikaty błędów.
- Sprawdź, które testy nie przeszły i dlaczego.

### **3. Popraw kod**

- W Visual Studio Code otwórz swoje pliki **`index.html`** i **`script.js`**.
- Upewnij się, że:

  - Wszystkie **identyfikatory (`id`)** w elementach HTML są poprawne.
  - Nazwy funkcji są takie same jak w instrukcjach.
  - Nie ma literówek ani błędów składni.

### **4. Zapisz zmiany**

- Po poprawkach zapisz pliki.

### **5. Dodaj commit i wypchnij zmiany**

- Powtórz kroki z **Kroku 5**:

  - Przejdź do panelu **"Source Control"**.
  - Dodaj zmienione pliki do **"Staged Changes"**.
  - Napisz wiadomość commita, np. **"Poprawki po testach"**.
  - Wykonaj commit.
  - Wypchnij zmiany na GitHub, klikając **"Synchronize Changes"**.

### **6. Ponowne sprawdzenie testów**

- Po wypchnięciu zmian testy automatycznie uruchomią się ponownie.
- Sprawdź wyniki testów tak jak wcześniej.

---

## **Dodatkowe wskazówki**

- **Dokładność jest kluczowa**

  - Upewnij się, że nazwy plików, funkcji i identyfikatorów są dokładnie takie, jak w instrukcji.
  - Nawet drobna literówka może spowodować błąd.

- **Korzystaj z pomocy**

  - Jeśli masz trudności, poproś nauczyciela lub kolegów o pomoc.
  - Nie krępuj się zadawać pytań.

- **Praktyka czyni mistrza**

  - Im więcej będziesz ćwiczyć, tym łatwiej będzie Ci tworzyć własne projekty.

---

## **Podsumowanie**

Wykonując ten tutorial, nauczyłeś się:

- Jak otworzyć zadanie na **Google Classroom** i **GitHub Classroom**.
- Jak sklonować repozytorium na swój komputer za pomocą **Visual Studio Code**.
- Jak stworzyć stronę z formularzem i skryptem wyświetlającym dane.
- Jak dodać commita i wypchnąć zmiany na GitHub, korzystając z graficznego interfejsu Git w Visual Studio Code.
- Jak sprawdzić wyniki testów i odczytać informacje zwrotne.

**Gratulacje** za ukończenie zadania!

---

**Pamiętaj:** Jeśli coś nie działa, nie przejmuj się. Błędy są naturalną częścią nauki programowania. Ważne jest, aby je zrozumieć i poprawić.

**Powodzenia w dalszej nauce!**

---
