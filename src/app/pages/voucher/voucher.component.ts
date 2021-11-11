import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.services'
@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
})

export class VoucherComponent implements OnInit {
  voucherInput: any;
  message: any;
  loading!: boolean;
  disabledSubmit!: boolean;

  constructor(private api: ApiService) {
    this.message = '';
    this.voucherInput = '';
    this.loading = false;
  }

  ngOnInit(): void {
    this.voucherInput = '';
    this.disabledSubmit = true;
  }

  inputPress() {
    if (this.voucherInput === '') {
      this.disabledSubmit = true;
    } else {
      this.disabledSubmit = false;
    }
  }

  onSubmit() {
    this.loading = true;
    this.disabledSubmit = true;
    this.api.postVoucher(this.voucherInput).subscribe(
      (data) => {
        this.voucherInput = '';
        this.message = 'success';
        this.loading = false;
        this.inputPress();
      }, (err) => {
        console.log('err', err);
        this.voucherInput = '';
        this.message = err.statusText;
        this.loading = false;
        this.inputPress();
      }
    )
  }

}
