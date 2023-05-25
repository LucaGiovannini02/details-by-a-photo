import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDivComponent } from './details-div.component';

describe('DetailsDivComponent', () => {
  let component: DetailsDivComponent;
  let fixture: ComponentFixture<DetailsDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
