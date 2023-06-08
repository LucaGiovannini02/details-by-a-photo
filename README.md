# Show Items

## Idea

Questo progetto l’ho sviluppato per una azienda che mi ha chiesto di fare un interfaccia per visualizzare i parametri ed essere allertati in caso uno di questi raggiunga e superi il limite. Tutto questo e’ possibile mettendo dei bottoni sopra ad un’immagine in 2d rappresentativa della linea. I bottoni sono posizionati circa sopra al componente di cui sta facendo riferimento nell’immagine.

### Come ho proceduto

Per prima cosa mi sono preoccupato di come potere “ancorare” dei tasti sopra l’immagine, in modo tale da fare capire a tutti in pochi secondi a quale componente della linea si sta facendo riferimento.

![Immagine 2023-06-08 084434](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/4654f95f-e823-47a5-96a5-6ec03fab0696)

Poi ho programmato le cose essenziali:

- Quando si sposta il puntatore sopra a questi tasti compare una picola finestrella con le informazioni piu’ importanti.

![Immagine 2023-06-08 085531](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/be1a91ec-e9bf-461e-86d8-4045866c1224)

- Se si clicca su uno di questi tasti si aprira’ una finestra con le informazioni riguardante al componente e tutti i suoi relativi parametri

![Immagine 2023-06-08 085757](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/7dd36b54-fd24-4bf7-b45a-0b783a1dd605)

- Ho aggiunto anche il form per mettere tasti nell’immagine specificando le due cordinate “X” e “Y”.

![Immagine 2023-06-08 090010](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/6bb29d80-e0ee-45ec-9769-1c00baa34db4)

- Inoltre quando si inserisce dei parametri validi sulla posizione automaticamente il sito fara’ visualizzare un’anteprima all’utente

![Immagine 2023-06-08 090029](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/0dbda75b-6b2d-4fa7-944d-c3b93d8ef22a)

Come ultimo particolare, ho voluto mettere l’icona della tab del browser dinamica: in base alla situazione l’icona puo’ essere un cerco di tre colori, cioe’ blu, giallo o rosso. Se uno dei parametri raggiunge il valore limite, e in base a quanto lo supera, il colore dell’icona cambia. Questo l’ho voluto fare cosi’ se un operatore sta navigando in giro per il browser, potra’ sempre vedere sulla tab in cima se c’e’ qualche problema.

![blue](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/36b06041-c8bc-4740-81d5-8fd2fdec574e)

![Immagine 2023-06-08 090300 - Copy](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/520def56-09fc-40a2-90fe-c52692f423be)

![Immagine 2023-06-08 090300](https://github.com/LucaGiovannini02/details-by-a-photo/assets/58634285/b400da53-07d4-4778-9957-c04c41d66b10)

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
