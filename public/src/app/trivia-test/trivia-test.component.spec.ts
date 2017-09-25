import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaTestComponent } from './trivia-test.component';

describe('TriviaTestComponent', () => {
  let component: TriviaTestComponent;
  let fixture: ComponentFixture<TriviaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
