import {Component, OnInit} from '@angular/core';
import {Form} from "./common/form";
import {WalletService} from "./wallet.service";

@Component({
    selector: 'wallet',
    templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {

    balance: string;
    walletId: number;

    constructor(private service: WalletService) {
    }

    ngOnInit(): void {

        this.service.getLastWalletId().subscribe((x:any) => {
                this.walletId = x;
                this.service.getBalance(this.walletId).subscribe((x: any) => this.balance = x.balance);
            }
        );
    }

    submit(form: any) {
        if (!form.sum) form.sum = 0;
        this.service.changeBalance(this.walletId, form).subscribe((x: any) => {
            this.balance = x.balance;
        }, error => {
            //console.log(error)
        });

    }

}
