import { state, style, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html',
  animations: [
    trigger('openClose', [
      state('true', style({
        backgroundColor: '#337ab7'
      })),
      state('false', style({
        backgroundColor: 'hsl(210,8%,95%)',
        color: 'black'
      }))
    ]),
  ]
})
export class FooBarQuixFormComponent implements OnInit {

  @Output() submitNumberOutput: EventEmitter<number> = new EventEmitter();
  inputNumberForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.inputNumberForm = this.formBuilder.group(
      {
        inputNumber: [null, [Validators.required, Validators.pattern("^[0-9]*$")]]
      });
  }

  get inputNumber() {
    return this.inputNumberForm.get("inputNumber");
  }

  submitNumber(): void {
    this.submitNumberOutput.emit(parseInt(this.inputNumber.value));
  }

}
