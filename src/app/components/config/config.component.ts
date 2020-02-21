import { Component, OnInit } from '@angular/core';
import {Config} from "../config.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  config: Config;
  constructor() { }

  ngOnInit() {}
  // showConfig() {
  //   //其回调函数中获取一个带类型的对象，它易于使用，且消费起来更安全
  //   this.configService.getConfig()
  //       .subscribe((data: Config) => this.config = {...data}), // success path
  //       error => this.error = error // error path
  // }
  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //       // resp is of type `HttpResponse<Config>`
  //       .subscribe(resp => {
  //         // display its headers
  //         const keys = resp.headers.keys();
  //         this.headers = keys.map(key =>
  //             `${key}: ${resp.headers.get(key)}`);
  //
  //         // access the body directly, which is typed as `Config`.
  //         this.config = { ... resp.body };
  //       });
  // }
}
