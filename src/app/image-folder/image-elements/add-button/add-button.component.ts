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

  constructor(private service: DataRequestsService) {}

  formAddPosition!: FormGroup;

  xInput!: number;
  yInput!: number;
  
  showButtonPreviewEmitFun(_xPos: any, _yPos: any) {
    this.showButtonPreview.emit({xPos: _xPos, yPos: _yPos});
  }

  cancelAddButtonFun() {
    this.cancelAddButton.emit();
  }

  ngOnInit(): void {
    this.formAddPosition = new FormGroup({
      xPos: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      yPos: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      item: new FormControl('', [Validators.required])
    })
  }

  submit() {
    Promise.resolve(this.service.addPosition({
      _xPos: this.formAddPosition.value.xPos,
      _yPos: this.formAddPosition.value.yPos,
      _idItem: this.formAddPosition.value.item,
    })).then(() => window.location.reload());
  }
}
