import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barcode-square',
  templateUrl: './barcode-square.component.html',
  styleUrls: ['./barcode-square.component.sass']
})
export class BarcodeSquareComponent implements OnInit {

  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
