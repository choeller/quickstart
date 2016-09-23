import { Component } from '@angular/core';

declare var io: any;

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>'
})
export class AppComponent {

    socket: any;
    constructor() {
       this.socket = io('http://doesnt.matter');
      // this.socket.disconnect(); //comment this line in and in works again!
    }
}
