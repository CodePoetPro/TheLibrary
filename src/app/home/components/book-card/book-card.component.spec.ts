import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from '.';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
