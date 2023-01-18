import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsChildTestComponent } from './collections-child-test.component';

describe('CollectionsChildTestComponent', () => {
  let component: CollectionsChildTestComponent;
  let fixture: ComponentFixture<CollectionsChildTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsChildTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
