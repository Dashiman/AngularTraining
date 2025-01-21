Zadanie A

1. Dodaj możliwość filtrowania w zakładce lol
2. Wyświetl więcej statystyk bohaterów
3. Stwórz podstronę ze szczegółami bohatera


Korzystaj z https://developer.riotgames.com/docs/lol

Zadanie B
1. Utwórz widoki i serwis w Angularze do CRUD prognoz pogody. Skomunikuj go z WeatherForecastController
  


Formularze w Angularze
1. Template-driven Forms (Formularze oparte na szablonach)
Opis: Logika formularza jest definiowana w szablonie HTML przy użyciu dyrektyw Angulara.
Cechy:
Proste do implementacji, szczególnie w przypadku mniejszych formularzy.
Używa dwukierunkowego wiązania danych ([(ngModel)]).


Automatyczne zarządzanie walidacją poprzez atrybuty HTML (np. required, minlength).
Zastosowanie: Formularze z prostymi wymaganiami, małe projekty.
Przykład:
<form #myForm="ngForm">
  <input type="text" name="name" [(ngModel)]="user.name" required />
  <button [disabled]="myForm.invalid">Submit</button>
</form>


2. Reactive Forms (Formularze reaktywne)
Opis: Logika formularza jest definiowana w kodzie TypeScript, co daje większą kontrolę nad formularzem.
Cechy:
Używa struktur takich jak FormGroup i FormControl.
Większa testowalność i elastyczność.
Obsługuje zaawansowane walidacje, w tym niestandardowe.
Zastosowanie: Duże, skomplikowane formularze, projekty z rozbudowanymi wymaganiami walidacyjnymi.

Przykład:

this.form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)])
});



<form [formGroup]="form">
  <input type="text" formControlName="name" />
  <button [disabled]="form.invalid">Submit</button>
</form>

Porównanie:
Cecha		Template-driven Forms	Reactive Forms
Miejsce logiki	Szablon HTML		Kod TypeScript
Złożoność	Prostota		Większa kontrola
Walidacja	Automatyczna, HTML5	Zaawansowana, niestandardowa
Testowalność	Trudniejsza		Łatwiejsza
