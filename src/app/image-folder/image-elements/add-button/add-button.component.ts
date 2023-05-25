import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  @Output() showButtonPreview = new EventEmitter<{}>();
  @Output() cancelAddButton = new EventEmitter();

  xInput!: number;
  yInput!: number;
  
  showButtonPreviewEmitFun(_xPos: any, _yPos: any) {
    this.showButtonPreview.emit({xPos: _xPos, yPos: _yPos});
  }

  cancelAddButtonFun() {
    this.cancelAddButton.emit();
  }
}
