import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanUiComponentLibComponent } from './spartan-ui-component-lib.component';

describe('SpartanUiComponentLibComponent', () => {
  let component: SpartanUiComponentLibComponent;
  let fixture: ComponentFixture<SpartanUiComponentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartanUiComponentLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartanUiComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
