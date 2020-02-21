import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/result";
import {CONSTANT} from "../constant";
import {NativeService} from "./native.service";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient, private nativeService: NativeService) {
    }

    // get 请求
    async get(url: string, param: {}) {
        return await this.request('GET', url, param);
    }

    async post(url: string, param: {}) {
        return await this.request('POST', url, param);
    }

    // 方法二：使用拦截器对请求前参数进行处理
    request(method: string = 'GET', url: string, param: {}) {
        return new Promise<any>(async (resolve) => {
            await this.nativeService.showLoading();
            this.httpClient.request(method, url, {params: param}).subscribe((data: Result) => {
                resolve(data);
            });
        });
    }
    // 方法一：请求前的参数进行处理
    // async request(method: string = 'GET', url: string, param: {}) {
    //     // 返回一个 异步的方法
    //     return new Promise<any>(
    //         async (resolve) => {
    //             param = await this.initParam(param);
    //             url = CONSTANT.SERVER_URL + url;
    //             await this.nativeService.showLoading();
    //             this.httpClient.request(method, url, {params: param}).subscribe(
    //                 (data: Result) => {
    //                     this.nativeService.closeLoading();
    //                     if (data && data.code === CONSTANT.SUCCESS_CODE) {
    //                         resolve(data.data);
    //                     } else {
    //                         console.log('error');
    //                     }
    //                 }, (error => {
    //                     console.log('error');
    //                 })
    //             )
    //         }
    //     );
    // }
    //
    // // 返回http请求前的处理
    // async initParam(param: {}) {
    //     return param;
    // }

}
