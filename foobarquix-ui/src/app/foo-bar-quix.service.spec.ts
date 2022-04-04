import { fakeAsync, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FooBarQuixService } from "./foo-bar-quix.service";

describe('FooBarQuixService', () => {

    let component: FooBarQuixService;
    let httpTestingController: HttpTestingController;
 

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
              { provide: 'SERVER_URL', useValue: 'http://localhost:8080' }
            ]
        }).compileComponents();
    });
        
    beforeEach(() => {
        component = TestBed.inject(FooBarQuixService);
    });

    beforeEach(() => {
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    it ('should get numberConverted fromAPI', fakeAsync(() => {
        let result: string;

        component.getResponse(33).subscribe(_result => result = _result);

        const req = httpTestingController.expectOne('http://localhost:8080/foo-bar-quix/33');

        req.flush({
            result: 'FooFooFoo'
        });

        expect(result).toEqual('FooFooFoo');
    }))
})