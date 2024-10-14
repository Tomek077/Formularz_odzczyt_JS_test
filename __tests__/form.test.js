const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Testy formularza', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
  });

  test('Czy formularz istnieje', () => {
    const form = document.querySelector('form#mojFormularz');
    expect(form).not.toBeNull();
  });

  test('Czy wszystkie pola są obecne', () => {
    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const email = document.getElementById('email');
    const wiadomosc = document.getElementById('wiadomosc');

    expect(imie).not.toBeNull();
    expect(nazwisko).not.toBeNull();
    expect(email).not.toBeNull();
    expect(wiadomosc).not.toBeNull();
  });

  test('Czy przycisk "Wyświetl" istnieje', () => {
    const button = document.querySelector('button[type="button"]');
    expect(button).not.toBeNull();
    expect(button.textContent).toBe('Wyświetl');
  });

  test('Czy dane są wyświetlane po kliknięciu przycisku', () => {
    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const email = document.getElementById('email');
    const wiadomosc = document.getElementById('wiadomosc');
    const wynik = document.getElementById('wynik');
    const button = document.querySelector('button[type="button"]');

    // Ustawienie wartości pól
    imie.value = 'Jan';
    nazwisko.value = 'Kowalski';
    email.value = 'jan.kowalski@example.com';
    wiadomosc.value = 'To jest testowa wiadomość.';

    // Symulacja kliknięcia przycisku
    dom.window.eval(fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8'));
    button.onclick = dom.window.wyswietlDane;
    button.click();

    // Sprawdzenie, czy dane zostały wyświetlone
    expect(wynik.innerHTML).toContain('Jan');
    expect(wynik.innerHTML).toContain('Kowalski');
    expect(wynik.innerHTML).toContain('jan.kowalski@example.com');
    expect(wynik.innerHTML).toContain('To jest testowa wiadomość.');
  });
});
