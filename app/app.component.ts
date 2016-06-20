import {Component} from "angular2/core";

@Component({
 selector: 'demo-app',
 templateUrl:'app/app.component.html'
})

export class AppComponent
{
    welcomeMessage: string = "Hello World!";
}