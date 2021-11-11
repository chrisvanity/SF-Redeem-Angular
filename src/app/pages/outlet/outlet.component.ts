import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import {environment} from '../../../environments/environment.prod'

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {
 
  advertiserName:any;
  outletCode:any;
  message:any;
  loading!:boolean;
  token: string|undefined;
  disabledSubmit!:boolean;
  siteKey!:string;
  constructor(private api:ApiService) {
    this.message ='';
    this.loading = false;
    this.token = undefined;
    this.disabledSubmit = true;
    this.siteKey = environment.recaptcha.siteKey
    console.log('this.siteKey',this.siteKey)
  }

  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse!=null||captchaResponse!=undefined){
      this.disabledSubmit = false;
    }
  }

  onSubmit(){
    console.log('onSubmit');
    this.loading = true;
    let dataObj = {
      advertiserName:this.advertiserName,
      outletCode:this.outletCode
    }
    this.api.postRedeem(dataObj).subscribe(
      (data)=>{
        console.log('success',data)
        this.message = 'success';
        this.loading = false;
      },(err)=>{
        console.log('err',err)
        this.message = err.statusText;
        this.loading = false;
      }
    )
  }

}
