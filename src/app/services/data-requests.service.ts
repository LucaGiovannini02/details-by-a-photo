import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataRequestsService {
  apiRootLink: string = 'https://192.168.0.116:8999/api/';
  apiPositionsLink: string = 'Positions/';

  constructor(private http: HttpClient) {
    this.testFun();
  }

  async testFun() {
    let result = await this.http.get<positionsResponse>(`${this.apiRootLink}${this.apiPositionsLink}ShowAllPositions`).toPromise().then((data) => {return data});
  }

  components: any;


  async getComponentsWithValues() {
    let result = await this.http.get<positionsResponse>(`${this.apiRootLink}${this.apiPositionsLink}ShowAllPositions`).toPromise().then((data) => {return data});

    this.components = result;

    return this.components;
  }

  async getOnlyComponents() {
    let result = await this.http.get<positionsResponse>(`${this.apiRootLink}${this.apiPositionsLink}ShowAllPositions`).toPromise().then((data) => {
      let aus: Array<any> = [];
      data?.map((dataAus) => {
        if(dataAus.position.id == 0) {
          aus.push(dataAus.myComponent)
        }
      })
      return aus;
    })

    return result;
  }


  async addPosition(body: {'_xPos': number, '_yPos': number, '_idItem': number}) {
    this.http.post(`${this.apiRootLink}Positions/InsertNewPosition`, {id: 0, xPosition: body._xPos, yPosition: body._yPos, fk: body._idItem}, {responseType: 'text'}).subscribe((data) => {
      console.log(data);
    });
  }

  async deleteButton(_idButton: number) {
    this.http.delete(`${this.apiRootLink}Positions/DeletePosition?IdPosition=${_idButton}`, {responseType: 'text'}).subscribe((data) => {console.log(data)})
  }

  async changePositionOfButton(_idButton: number, _newXPosition: number, _newYPosition: number) {
    this.http.patch(`${this.apiRootLink}Positions/ModifyPosition`, {"id": _idButton, "xPosition": _newXPosition, "yPosition": _newYPosition, "fk": 0}, {responseType: 'text'}).subscribe((data) => console.log(data))
  }
}







export type positionsResponse = positionResponse[]

///////////////////////////////////////////////

export interface positionResponse {
  myComponent: MyComponent
  details: Detail[]
  position: Position
}

///////////////////////////////////////////////

export interface MyComponent {
  id: number
  device: string
  task: string
  dateEntry: string
  productItem: string
  note: string
  pathImage: any
}

export interface Detail {
  id: number
  parameter: string
  description: string
  value: number
  dateEntry: string
  fk: number
  note: string
  greenLimit: number
  yellowLimit: number
}

export interface Position {
  id: number
  xPosition: number
  yPosition: number
  fk: number
}




export interface getComponentsResponse {
  message: string
  components: Component[]
}

export interface Component {
  id: number
  device: string
  task: string
  dateEntry: string
  productItem: string
  note: string
  pathImage: string
}
