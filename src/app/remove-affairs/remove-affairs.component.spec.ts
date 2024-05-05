import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAffairsComponent } from './remove-affairs.component';

describe('RemoveAffairsComponent', () => {
  let component: RemoveAffairsComponent;
  let fixture: ComponentFixture<RemoveAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAffairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
