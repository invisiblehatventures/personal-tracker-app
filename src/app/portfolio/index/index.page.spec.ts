import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexPage } from './index.page';

describe('IndexPage', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexPage
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
    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render portfolio#index', async () => {
    const page = fixture.nativeElement;

    const header = page.querySelectorAll('ion-header')[0];
    const headerToolBar = header.querySelectorAll('ion-toolbar')[0];
    const headerTitle = headerToolBar.querySelectorAll('ion-title')[0];

    expect(headerTitle.textContent).toContain('Portfolio#index');
  });
});
