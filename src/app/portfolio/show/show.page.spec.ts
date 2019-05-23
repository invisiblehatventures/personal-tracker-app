import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShowPage } from './show.page';

describe('ShowPage', () => {
  let component: ShowPage;
  let fixture: ComponentFixture<ShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowPage
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render portfolio#show', async () => {
    const page = fixture.nativeElement;

    const header = page.querySelectorAll('ion-header')[0];
    const headerToolBar = header.querySelectorAll('ion-toolbar')[0];
    const headerTitle = headerToolBar.querySelectorAll('ion-title')[0];

    expect(headerTitle.textContent).toContain('Portfolio#show');
  });
});
