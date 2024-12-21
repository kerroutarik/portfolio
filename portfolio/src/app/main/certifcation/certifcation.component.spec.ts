import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifcationComponent } from './certifcation.component';

describe('CertifcationComponent', () => {
  let component: CertifcationComponent;
  let fixture: ComponentFixture<CertifcationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifcationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertifcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
