import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFigureComponent } from './list-figure.component';

describe('ListFigureComponent', () => {
  let component: ListFigureComponent;
  let fixture: ComponentFixture<ListFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
