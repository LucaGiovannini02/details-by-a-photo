import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataRequestsService } from 'src/app/services/data-requests.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Output() closeDetailsDiv = new EventEmitter();
  cancelAddButtonDivShow: boolean = false;

  previewButtonX: number = 0;
  previewButtonY: number = 0;

  constructor(private service: DataRequestsService) {}

  showAddButtonDiv: boolean = false;
  content: string = 'Motore grigio';
  componentDetails?: {id: number, title: string, content: string, values: [{nameValue: string, value: number, greenLimit: number, yellowLimit: number, valueSymbol: string}]};
  temperatureCheckColor: string = 'blue';

  components!: any;

  itemClicked(_id: number) {
    this.componentDetails = {
      id: _id,
      title : this.components[_id].title,
      content : this.components[_id].content,
      values : this.components[_id].values
    }
  }

  closeDivDetailsFun() {
    delete this.componentDetails;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.components = Object.values(this.service.getComponentsWithValues());

      if(this.componentDetails) {
        this.componentDetails.values = this.components[this.componentDetails.id].values; 
      }
    }, 2000);
  }

  getButtonColor(_id:  number) {
    let aus = this.components[_id].values;

    if(!aus) {
      return 'blue';
    }

    let colors = aus.map((data: any) => {
      let colorToReturn = 'blue';

      if(data['value'] > data['yellowLimit']) {
        return 'red';
      } else if (data['value'] > data['greenLimit'] && data['value'] <= data['yellowLimit']) {
        colorToReturn = 'yellow';
      } 

      return colorToReturn;
    })

    if(colors.includes('red'))
      return 'red';
    else if(colors.includes('yellow'))
      return 'yellow';
    else
      return 'blue'
  }

  getPopoverArrayForAppButton(values: any) {
    let aus: any = [];

    values.map((data: any) => {
      let ausColor = '';

      if(data.value > data.yellowLimit) {
        ausColor = 'red';
      } else if (data.value > data.greenLimit && data.value <= data.yellowLimit) {
        ausColor = 'yellow';
      } else {
        ausColor = 'blue';
      }

      aus.push({content: data.nameValue.substring(0, 6) + ': ' + data.value, color: ausColor})
    });

    return aus;
  }


  showButtonPreviewFun(data: any) {
    this.previewButtonX = data.xPos;
    this.previewButtonY = data.yPos;
  }

  cancelAddButtonFun() {
    this.cancelAddButtonDivShow = true;
  }

  confirmCancelAddButtonFun() {
    this.cancelAddButtonDivShow = false;
    this.showAddButtonDiv = false;
  }
}
