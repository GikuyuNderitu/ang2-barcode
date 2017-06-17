import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { BarcodeSquareComponent } from './barcode/barcode-square/barcode-square.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeComponent,
    BarcodeSquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
