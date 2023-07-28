import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaHeaderComponent } from './fea-header.component';

describe('FeaHeaderComponent', () => {
  let component: FeaHeaderComponent;
  let fixture: ComponentFixture<FeaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
