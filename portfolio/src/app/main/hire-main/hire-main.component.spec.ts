import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMainComponent } from './hire-main.component';

describe('HireMainComponent', () => {
  let component: HireMainComponent;
  let fixture: ComponentFixture<HireMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HireMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HireMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
