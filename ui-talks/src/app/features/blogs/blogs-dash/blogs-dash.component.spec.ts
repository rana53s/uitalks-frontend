import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDashComponent } from './blogs-dash.component';

describe('BlogsDashComponent', () => {
  let component: BlogsDashComponent;
  let fixture: ComponentFixture<BlogsDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsDashComponent]
    });
    fixture = TestBed.createComponent(BlogsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
