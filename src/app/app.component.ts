import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    public title: string = 'My App';

    public myInput = new FormControl('alohomora', [
        Validators.required,
        Validators.pattern(/^\S+$/)]
    );

    public get color (): string {
        return this.myInput.valid ? 'primary' : 'warn';
    }

    public ngOnInit () {
        this.myInput
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe();
    }

    public ngOnDestroy () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
