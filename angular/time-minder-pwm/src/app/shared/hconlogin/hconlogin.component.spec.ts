import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HconloginComponent } from './hconlogin.component';

describe('HconloginComponent', () => {
  let component: HconloginComponent;
  let fixture: ComponentFixture<HconloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HconloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HconloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
