import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image-folder/image/image.component';
import { ButtonComponent } from './image-folder/image-elements/button/button.component';
import { DetailsDivComponent } from './image-folder/image-elements/details-div/details-div.component';
import { AddButtonComponent } from './image-folder/image-elements/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ButtonComponent,
    DetailsDivComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
