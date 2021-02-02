import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote.DetailsComponent } from './quote.details.component';

describe('Quote.DetailsComponent', () => {
  let component: Quote.DetailsComponent;
  let fixture: ComponentFixture<Quote.DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quote.DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
