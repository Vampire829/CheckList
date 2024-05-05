import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffairsComponent } from './add-affairs.component';

describe('AddAffairsComponent', () => {
  let component: AddAffairsComponent;
  let fixture: ComponentFixture<AddAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAffairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
