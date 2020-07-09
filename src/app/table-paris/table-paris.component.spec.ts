import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParisComponent } from './table-paris.component';

describe('TableParisComponent', () => {
  let component: TableParisComponent;
  let fixture: ComponentFixture<TableParisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableParisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
