import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableViewComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
