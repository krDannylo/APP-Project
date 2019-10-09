import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirVagaPage } from './exibir-vaga.page';

describe('ExibirVagaPage', () => {
  let component: ExibirVagaPage;
  let fixture: ComponentFixture<ExibirVagaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirVagaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirVagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
