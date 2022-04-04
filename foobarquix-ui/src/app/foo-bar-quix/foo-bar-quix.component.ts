import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  private _fooBarQuixSubscription: Subscription;

  numbersConverted: NumberConverted[] = []

  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this._fooBarQuixSubscription != null) {
      this._fooBarQuixSubscription.unsubscribe();
    }
  }

  convertNumber(inputNumber: number): void {
    this._fooBarQuixSubscription = this.fooBarQuixService.getResponse(inputNumber)
      .subscribe((data: string) => this.numbersConverted.push({numberToConvert: inputNumber, result: data}));
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
