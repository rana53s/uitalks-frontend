import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsDashComponent } from './topics-dash.component';

describe('TopicsDashComponent', () => {
  let component: TopicsDashComponent;
  let fixture: ComponentFixture<TopicsDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsDashComponent]
    });
    fixture = TestBed.createComponent(TopicsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
