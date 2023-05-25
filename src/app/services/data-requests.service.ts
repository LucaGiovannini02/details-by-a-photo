import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsService implements OnInit {

  constructor() { }

  components: any;


  getComponentsWithValues() {
    this.components = [
      {id: 0, title: 'Motore', content: 'Motore grigio', xPos: '50%', yPos: '50%', values: [
        {nameValue: 'Temperature', value: Math.floor(Math.random() * (130 - 40) + 40), greenLimit: 80, yellowLimit: 100, valueSymbol: 'C°'},
        {nameValue: 'Giri motore', value: Math.floor(Math.random() * (18 - 3) + 3), greenLimit: 10, yellowLimit: 14, valueSymbol: 'RPM'}
      ]},
      {id: 1, title: 'Accelerometro', content: 'Vibrazioni macchina', xPos: '75%', yPos: '50%',  values: [
        {nameValue: 'Vibrazioni', value: Math.floor(Math.random() * (300 - 1) + 1), greenLimit: 170, yellowLimit: 250, valueSymbol: 'VPM'},
      ]},
      {id: 2, title: 'Pompa', content: 'Pompa olio', xPos: '21%', yPos: '35%', values: [
        {nameValue: 'Giri', value: Math.floor(Math.random() * (100 - 1) + 1), greenLimit: 50, yellowLimit: 80, valueSymbol: 'GPM'},
      ]} 
    ]

    return {...this.components};
  }

  ngOnInit(): void { }



}
