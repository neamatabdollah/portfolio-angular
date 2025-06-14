import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutmeComponent } from './app-aboutme.component';

describe('AppAboutmeComponent', () => {
  let component: AppAboutmeComponent;
  let fixture: ComponentFixture<AppAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAboutmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
