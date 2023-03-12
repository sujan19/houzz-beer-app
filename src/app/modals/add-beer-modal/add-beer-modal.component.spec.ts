import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerModalComponent } from './add-beer-modal.component';

describe('AddBeerModalComponent', () => {
  let component: AddBeerModalComponent;
  let fixture: ComponentFixture<AddBeerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBeerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
