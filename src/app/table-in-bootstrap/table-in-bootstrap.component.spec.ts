import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInBootstrapComponent } from './table-in-bootstrap.component';

describe('TableInBootstrapComponent', () => {
  let component: TableInBootstrapComponent;
  let fixture: ComponentFixture<TableInBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
