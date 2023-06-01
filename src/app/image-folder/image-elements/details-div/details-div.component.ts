import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataRequestsService } from 'src/app/services/data-requests.service';

@Component({
  selector: 'app-details-div',
  templateUrl: './details-div.component.html',
  styleUrls: ['./details-div.component.css']
})
export class DetailsDivComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  @Input() values!: any;
  @Input() note!: any;
  @Input() productItem!: any;
  @Input() IdButton!: number;

  @Input() isAdding: boolean = false;
  @Input() isChanging: boolean = false;
  @Input() component!: any;

  @Output() closeDivDetails = new EventEmitter();
  @Output() changePositionButtonEvent = new EventEmitter<number>();

  constructor(private service: DataRequestsService) {}

  showDeleteDiv: boolean = false;

  closeDivDetailsFun() {
    this.closeDivDetails.emit();
  }

  cancelDeleteButtonFun() {
    this.showDeleteDiv = false;
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

  deleteDiv() {
    this.showDeleteDiv = true;
  }


  confirmDeleteButton() {
    Promise.resolve(this.service.deleteButton(this.IdButton)).then(() => window.location.reload());
  }


  changePosition(_idButton: number) {
    this.changePositionButtonEvent.emit(_idButton);
  }
}
