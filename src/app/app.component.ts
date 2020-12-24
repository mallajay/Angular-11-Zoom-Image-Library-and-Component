import { Component, ViewChild } from '@angular/core';
import { PinchZoomComponent } from './pinch-zoom/pinch-zoom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pinch-zoom';

  @ViewChild('pinch') pinchZoom: PinchZoomComponent;

  move() {
    this.pinchZoom.setTransform({ x: -150, y: -10, scale: 2 });
  }
}
