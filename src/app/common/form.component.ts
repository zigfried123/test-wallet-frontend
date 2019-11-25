import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Form} from "./form";


@Component({
    selector: 'form-template',
    templateUrl: './form.component.html'
})

export class FormComponent implements OnInit{

    @Input() walletId:string;
    @Input() name:string;
    @Input() fields:{};
    @Output() submitForm = new EventEmitter();

    form = new Form();

    objectKeys: any;


    ngOnInit(): void {

        this.objectKeys = Object.keys(this.fields);

        //console.log(Object.keys(this.fields));


      for(let field in this.fields){
          if(this.fields[field] == 'checkbox'){
              this.form[field] = 1;
          }
      }
    }

    onSubmit(form:any) {

      this.submitForm.emit(form);
    }
}
