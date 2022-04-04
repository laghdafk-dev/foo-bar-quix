import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { FooBarQuixService } from "../foo-bar-quix.service";
import { FooBarQuixComponent } from "./foo-bar-quix.component";

describe('FooBarQuixComponent', () => {

    let component: FooBarQuixComponent;
    let fixture: ComponentFixture<FooBarQuixComponent>;
    let fakeFooBarQuixService: FooBarQuixService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [FooBarQuixComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: FooBarQuixService,
                    useValue: {
                        getResponse: jasmine.createSpy().and.callFake(
                            (inputNumber: number): Observable<string> => {
                                return of('resultOf-' + inputNumber);
                            })
                    }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(FooBarQuixComponent);
        component = fixture.componentInstance;
        fakeFooBarQuixService = TestBed.inject(FooBarQuixService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('convert and show new number', () => {
        component.convertNumber(33);
        expect(fakeFooBarQuixService.getResponse).toHaveBeenCalled();
    })

})