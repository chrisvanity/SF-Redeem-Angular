import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {

    }

    postVoucher(data: any): Observable<any> {
        console.log('postVoucher', data)
        let reqData = {
            "reqparam":
                { "vcode": data }
        }
        console.log('reqData',reqData)
        let url = 'https://api-sf.novaly.ltd/api/v1/voucher';
        return this.http.post(url, reqData);
    }

    postRedeem(data: any): Observable<any> {
        console.log('postRedeem', data)
        let reqData = {
            "params":
            {
                "vcode":"",
                "advertiserName":data.advertiserName,
                "outletCode":data.outletCode
            }
        }
        console.log('reqData',reqData)
        let url = 'https://api-sf.novaly.ltd/api/v1/redeem';
        return this.http.post(url, reqData);
    }
}