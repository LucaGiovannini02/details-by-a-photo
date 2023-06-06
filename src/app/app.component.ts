import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'show-items-by-images';

  ngOnInit(): void {
  }

  changeIconColorFun(_color: string) {
    const favicon = document.getElementById("favicon");

    if (_color == 'blue') {
      favicon?.setAttribute("href", "assets/icons/blue-circle.png");
    } else if (_color == 'yellow') {
      favicon?.setAttribute("href", "assets/icons/yellow-circle.png");
    } else if (_color == 'red') {
      favicon?.setAttribute("href", "assets/icons/red-circle.png"); 
    }
  }
}
