import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaMainComponent } from './fea-main.component';

describe('FeaMainComponent', () => {
  let component: FeaMainComponent;
  let fixture: ComponentFixture<FeaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
