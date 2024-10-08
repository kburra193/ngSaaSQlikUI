import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlikAppComponent } from './qlik-app.component';

describe('QlikAppComponent', () => {
  let component: QlikAppComponent;
  let fixture: ComponentFixture<QlikAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlikAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlikAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
