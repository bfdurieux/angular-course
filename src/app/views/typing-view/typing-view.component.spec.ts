import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingViewComponent } from './typing-view.component';

describe('TypingViewComponent', () => {
  let component: TypingViewComponent;
  let fixture: ComponentFixture<TypingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
