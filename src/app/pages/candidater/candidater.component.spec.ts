import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaterComponent } from './candidater.component';

describe('CandidaterComponent', () => {
  let component: CandidaterComponent;
  let fixture: ComponentFixture<CandidaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
