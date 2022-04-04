import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooBarQuixFormComponent } from './foo-bar-quix-form.component';

describe('FooBarQuixFormComponent', () => {
  let component: FooBarQuixFormComponent;
  let fixture: ComponentFixture<FooBarQuixFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ FooBarQuixFormComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooBarQuixFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.inputNumberForm.valid).toBeFalsy();
  });

  it('inputNumber field validity', () => {
    let errors = {};
    let inputNumber = component.inputNumberForm.controls['inputNumber'];
    expect(inputNumber.valid).toBeFalsy();
    errors = inputNumber.errors || {};
    expect(errors['required']).toBeTruthy();
    inputNumber.setValue("toto");
    errors = inputNumber.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
    inputNumber.setValue("33");
    errors = inputNumber.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('submitting a form emits a number', () => {
    expect(component.inputNumberForm.valid).toBeFalsy();
    component.inputNumberForm.controls['inputNumber'].setValue("33");
    expect(component.inputNumberForm.valid).toBeTruthy();

    let submitNumber: number;
    component.submitNumberOutput.subscribe((value) => submitNumber = value);

    component.submitNumber();

    expect(submitNumber).toBe(33);
  });


});
