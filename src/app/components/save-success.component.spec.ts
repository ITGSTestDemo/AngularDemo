import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSuccessComponent } from './save-success.component';

describe('SaveSuccessComponent', () => {
  let component: SaveSuccessComponent;
  let fixture: ComponentFixture<SaveSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
