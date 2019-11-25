import {Component, OnInit} from '@angular/core';
import {Form} from "./common/form";
import {UserService} from "./user.service";

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{

    constructor(private service: UserService){

    }

    ngOnInit(): void {
        //alert(1);
    }

    submit(form:Form)
    {
        this.service.register(form).subscribe(x => {
            console.log(x);
        });
    }
}
