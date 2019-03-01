import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionChefComponent } from './informacion-chef.component';

describe('InformacionChefComponent', () => {
  let component: InformacionChefComponent;
  let fixture: ComponentFixture<InformacionChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
