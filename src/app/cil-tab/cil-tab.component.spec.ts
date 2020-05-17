import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CilTabComponent } from './cil-tab.component';

describe('CilTabComponent', () => {
  let component: CilTabComponent;
  let fixture: ComponentFixture<CilTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CilTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CilTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
