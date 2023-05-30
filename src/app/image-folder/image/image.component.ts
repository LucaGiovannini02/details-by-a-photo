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

  oldPositions!: any;

  previewButtonX: number = 0;
  previewButtonY: number = 0;

  constructor(private service: DataRequestsService) {}

  showAddButtonDiv: boolean = false;
  content: string = 'Motore grigio';
  componentDetails?: any;
  temperatureCheckColor: string = 'blue';

  isButtonChanging!: any;

  components!: Array<any>;

  componentsToAddButton!: Array<any>;

  itemClicked(_id: number) {
    this.componentDetails = {
      id: _id,
      title : this.components[_id].myComponent.task,
      content : this.components[_id].myComponent.device,
      values : this.components[_id].details,
      idPositionButton : this.components[_id].position.id
    }
  }

  closeDivDetailsFun() {
    delete this.componentDetails;
  }

  ngOnInit(): void {
    setInterval(() => {
      Promise.resolve(this.service.getComponentsWithValues()).then((data) => {
        this.components = [];
        this.components = data;

        if(this.isButtonChanging) {
          this.takePositionById(this.isButtonChanging.idPosition).xPosition = this.isButtonChanging.xPos;
          this.takePositionById(this.isButtonChanging.idPosition).yPosition = this.isButtonChanging.yPos;
        }
      })

      if(this.componentDetails) {
        this.componentDetails.values = this.components[this.componentDetails.id].details; 
      }

      // PERCHE NON CE LINDEX??!?!?!?!?


    }, 2000);


    this.getComponents();
  }

  getButtonColor(_id: number) {
    try{

      let aus = this.components[_id].details;

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
    } catch {
      return 'blue';
    }
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

      aus.push({content: data.description.substring(0, 6) + ': ' + data.value, color: ausColor})
    });

    return aus;
  }


  getComponents() {
    Promise.resolve(this.service.getOnlyComponents()).then((data: any) => {
      this.componentsToAddButton = data;
    });
  }

  getOptionsForAppAddButton() {
    let aus: {'task': string, 'id': number}[] = [];

    this.componentsToAddButton.map((data) => {
      aus.push({'task': data.task, 'id': data.id});
    });

    return aus;
  }


  showButtonPreviewFun(data: any) {
    this.isButtonChanging = data;
    if(data.idPosition) {
      this.takePositionById(data.idPosition).xPosition = data.xPos;
      this.takePositionById(data.idPosition).yPosition = data.yPos;
    } else {
      this.previewButtonX = data.xPos;
      this.previewButtonY = data.yPos;
    }
  }

  cancelAddButtonFun() {
    this.cancelAddButtonDivShow = true;
  }

  confirmCancelAddButtonFun() {
    this.cancelAddButtonDivShow = false;
    this.showAddButtonDiv = false;
    delete this.oldPositions;
    this.previewButtonX = NaN;
    this.previewButtonY = NaN;
    delete this.isButtonChanging;
  }


  changePositionButton(_id: number) {
    delete this.componentDetails;

    let aus = this.takePositionById(_id);

    this.oldPositions = {xPos: aus.xPosition, yPos: aus.yPosition, task: this.takeComponentById(aus.fk).task, idPosition: _id}
  }

  takePositionById(_id: number): any {
    let aus = "";

    this.components.map((data) => {
      if(data.position.id == _id) {
        aus = data.position;
      }
    })

    return aus;
  }

  takeComponentById(_id: number): any {
    let aus = "";

    this.components.map((data) => {
      if(data.myComponent.id == _id) {
        aus = data.myComponent;
      }
    })

    return aus;
  }
}
