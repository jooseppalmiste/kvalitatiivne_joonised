# Mehenäod

Joonistamise ülesanne õppejõu näidete põhjal: https://github.com/jaagup/kvaldh26/tree/main/joonised

Õppejõu failide ülesehitus, HTML Canvas'e joonistuskäsud, andmete laadimise ning vormiga lisamise näited on säilitatud võimalikult algsel kujul. Lumememme asemel on ülesandes vajalikuks muudatuseks mehe näo funktsioon, mille parameetrid on asukoht, suurus ja habemekarvade arv.

## Failid

- `joonis4.html` – funktsiooniga eri suuruse ja habemekarvade arvuga näod.
- `joonis5.html` – andmed otse HTML-failis.
- `joonis6_kohalik.html` – andmete lugemine failist `naod.json` („uuenda” nupp).
- `joonis7_csv.html` – andmete lugemine failist `naod.csv` („uuenda” nupp).
- `index.html` – õppejõu `tabelisse.html` järgi veebitabelist lugemine ja sinna uute andmete lisamine.
- `Code.gs` – Google Apps Scripti jaoks vajalik veebiteenuse kood.

## Google Sheetsi tabel

https://docs.google.com/spreadsheets/d/11loekvlAgL7ejYSfHVBsZ8K_1EYDoDHBwESeLUz40ZM/edit

Tabelis on veerud `Nimi`, `Suurus` ja `Habemekarvad`. Algandmed on juba sisestatud.

## Veebitabeliga ühendamise viimased sammud

1. Ava ülalolev Google Sheetsi tabel ja vali **Laiendused → Apps Script**.
2. Asenda Apps Scripti redaktoris `Code.gs` kood selle repositooriumi `Code.gs` sisuga ning salvesta.
3. Vali **Deploy → New deployment → Web app**. Käivitamine: **Execute as: Me**. Juurdepääs: **Anyone**. Kinnita vajalikud õigused.
4. Kopeeri saadud veebirakenduse aadress (lõpus `/exec`).
5. Asenda failis `index.html` rida `const veebiteenus = "";` sama aadressiga jutumärkide sees (jäta ülejäänud kood muutmata).
6. Avalda GitHubis leht: **Settings → Pages → Deploy from a branch → main → /(root)**.

Seejärel loeb avaleht näod Google Sheetsist, veebivorm lisab tabelisse uue rea ning pärast lisamist joonistatakse näod uuesti.

**Märkus:** kuni Apps Script ei ole avaldatud ja selle aadress `index.html`-i lisatud, töötab avalehel nelja näoga näidisjoonis, kuid veebitabelisse lisamine ei tööta. Avalik veebiteenus võimaldab igal lehe kasutajal tabelisse ridu lisada.

JSON- ja CSV-faili lugemise näited tuleb avada veebiserveri kaudu (näiteks GitHub Pagesis), mitte otse `file://` aadressilt.
