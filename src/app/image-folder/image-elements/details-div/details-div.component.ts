import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details-div',
  templateUrl: './details-div.component.html',
  styleUrls: ['./details-div.component.css']
})
export class DetailsDivComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  @Input() values!: [{nameValue: string, value: number, greenLimit: number, yellowLimit: number, valueSymbol: string}];

  @Output() closeDivDetails = new EventEmitter();

  closeDivDetailsFun() {
    this.closeDivDetails.emit();
  }

  ngOnInit(): void {

  }

  getColorByLimits(_id: number) {

    

    if(Number(this.values[_id].value) > Number(this.values[_id].yellowLimit)) {
      return "red";
    } else if(Number(this.values[_id].value) > Number(this.values[_id].greenLimit)) {
      return "rgb(172, 177, 0)";
    }

    return "blue";
  }
}
