import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationHomeComponent } from './certification-home.component';

describe('CertificationHomeComponent', () => {
  let component: CertificationHomeComponent;
  let fixture: ComponentFixture<CertificationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
