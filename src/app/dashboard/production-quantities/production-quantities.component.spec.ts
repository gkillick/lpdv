import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionQuantitiesComponent } from './production-quantities.component';

describe('ProductionQuantitiesComponent', () => {
  let component: ProductionQuantitiesComponent;
  let fixture: ComponentFixture<ProductionQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
