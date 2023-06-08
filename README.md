# Show Items

## Idea

Questo progetto l’ho sviluppato per una azienda che mi ha chiesto di fare un interfaccia per visualizzare i parametri ed essere allertati in caso uno di questi raggiunga e superi il limite. Tutto questo e’ possibile mettendo dei bottoni sopra ad un’immagine in 2d rappresentativa della linea. I bottoni sono posizionati circa sopra al componente di cui sta facendo riferimento nell’immagine.

### Come ho proceduto

Per prima cosa mi sono preoccupato di come potere “ancorare” dei tasti sopra l’immagine, in modo tale da fare capire a tutti in pochi secondi a quale componente della linea si sta facendo riferimento.

![Immagine 2023-06-08 084434](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/50179c46-7a61-4669-8ba8-964ce389fd5e)

Poi ho programmato le cose essenziali:

- Quando si sposta il puntatore sopra a questi tasti compare una picola finestrella con le informazioni piu’ importanti.

![Immagine 2023-06-08 085531](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/e83aa206-54b7-4861-80a2-57c687e2cd81)

- Se si clicca su uno di questi tasti si aprira’ una finestra con le informazioni riguardante al componente e tutti i suoi relativi parametri

![Immagine 2023-06-08 085757](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/f2f150bf-c4bb-47a3-bb00-c9cf19f40972)

- Ho aggiunto anche il form per mettere tasti nell’immagine specificando le due cordinate “X” e “Y”.

![Immagine 2023-06-08 090010](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/e5ea9d95-4993-44b5-a189-880ae94116a3)

- Inoltre quando si inserisce dei parametri validi sulla posizione automaticamente il sito fara’ visualizzare un’anteprima all’utente

![Immagine 2023-06-08 090029](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/e9d0a02e-fe8b-497b-a556-188a91f093d2)

Come ultimo particolare, ho voluto mettere l’icona della tab del browser dinamica: in base alla situazione l’icona puo’ essere un cerco di tre colori, cioe’ blu, giallo o rosso. Se uno dei parametri raggiunge il valore limite, e in base a quanto lo supera, il colore dell’icona cambia. Questo l’ho voluto fare cosi’ se un operatore sta navigando in giro per il browser, potra’ sempre vedere sulla tab in cima se c’e’ qualche problema.

![blue](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/753cae3a-7f45-4573-90d7-225b764cf918)

![Immagine 2023-06-08 090300 - Copy](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/273e32b4-8a61-415b-bdea-ba9ecfbb27fb)

![Immagine 2023-06-08 090300](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/9dc7bfdd-290d-4ca2-a4f5-7bd60e045624)

### Considerazioni finali

Sono stato contento di fare parte di questo progetto, poiche’ l’ho ritenuto ambizioso. Prima di cominciarlo ho passato del tempo su come affrontarlo, per poi trovare una soluzione. E’ stato anche ottimo per rinforzare le mie conoscenze di Angular.

### Ringraziamenti

Ringrazio l’azienda che mi ha incaricato di questa sfida facendomi affrontare un problema che loro avevano bisogno di risolvere. 

E ringrazio anche [Pablososs](https://github.com/Pablososs) per avere contribuito sviluppando la parte backend per realizzare questo bellissimo progetto

Link alla sua rep:

[https://github.com/Pablososs/api-for-components-management](https://github.com/Pablososs/api-for-components-management)

### Note

Questo lavoro e’ stato fatto insieme ad un altro sito caricato sull’altra mia repository. L’altro progetto serviva ad aggiungere tutti i componenti presenti sulla macchina e i relativi parametri.

Per maggiori informazioni ecco il link alla repo:

[https://github.com/LucaGiovannini02/components-details](https://github.com/LucaGiovannini02/components-details)

---

### Tecnologie con cui è stato sviluppato:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" width="50"> &emsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" width="50" /> &emsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="50"> &emsp; <img src="https://ng-bootstrap.github.io/img/logo-stack.svg" width="50">
