import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataRequestsService } from 'src/app/services/data-requests.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() showButtonPreview = new EventEmitter<{}>();
  @Output() cancelAddButton = new EventEmitter();

  @Input() selectOptions!: {'task': string, 'id': number}[];
  
  @Input() oldPosition!: any;

  constructor(private service: DataRequestsService) {}

  formAddPosition!: FormGroup;

  xInput!: number;
  yInput!: number;

  xInputField!: number;
  yInputField!: number;

  messageNoComponentsShow: boolean = false;
  
  showButtonPreviewEmitFun(_xPos: any, _yPos: any) {
    this.showButtonPreview.emit({xPos: _xPos, yPos: _yPos});
  }

  cancelAddButtonFun() {
    this.cancelAddButton.emit();
  }

  ngOnInit(): void {
    if(!this.oldPosition) {
      this.formAddPosition = new FormGroup({
        xPos: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
        yPos: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
        item: new FormControl('', [Validators.required])
      })
    } else {
      this.formAddPosition = new FormGroup({
        xPos: new FormControl(this.oldPosition.xPos, [Validators.required, Validators.min(0), Validators.max(100)]),
        yPos: new FormControl(this.oldPosition.yPos, [Validators.required, Validators.min(0), Validators.max(100)]),
      })

      this.xInputField = this.oldPosition.xPos;
      this.yInputField = this.oldPosition.yPos;
    }

    console.log(this.selectOptions)
  }

  submit() {
    if(!this.oldPosition) {
      Promise.resolve(this.service.addPosition({
        _xPos: this.formAddPosition.value.xPos,
        _yPos: this.formAddPosition.value.yPos,
        _idItem: this.formAddPosition.value.item,
      })).then(() => window.location.reload());
    } else {
      Promise.resolve(this.service.changePositionOfButton(this.oldPosition.idPosition, this.formAddPosition.value.xPos, this.formAddPosition.value.yPos)).then(() => window.location.reload())
    }
  }


  changeInputOfCordinator() {
    if((this.xInputField >= 0 && this.xInputField <= 100) && (this.yInputField >= 0 && this.yInputField <= 100)) {
      if(this.oldPosition) {
        this.showButtonPreview.emit({xPos: this.xInputField, yPos: this.yInputField, idPosition: this.oldPosition.idPosition});
      } else {
        this.showButtonPreview.emit({xPos: this.xInputField, yPos: this.yInputField});
      }
    }
  }
}
