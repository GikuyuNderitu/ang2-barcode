import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.sass']
})
export class BarcodeComponent implements OnInit {

  private colors: Array<string> = [];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 8; i ++) {
      this.colors.push(this.generateColor());
    }
  }

  generateColor(): string {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '';
    for(let i = 0; i < 6; i++) {
      color += colors[Math.floor(Math.random()*16)]
    }
    return '#' + color;
  }

}
