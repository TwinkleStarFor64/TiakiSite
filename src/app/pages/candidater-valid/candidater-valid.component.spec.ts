import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaterValidComponent } from './candidater-valid.component';

describe('CandidaterValidComponent', () => {
  let component: CandidaterValidComponent;
  let fixture: ComponentFixture<CandidaterValidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidaterValidComponent]
    });
    fixture = TestBed.createComponent(CandidaterValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
