import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeSquareComponent } from './barcode-square.component';

describe('BarcodeSquareComponent', () => {
  let component: BarcodeSquareComponent;
  let fixture: ComponentFixture<BarcodeSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
