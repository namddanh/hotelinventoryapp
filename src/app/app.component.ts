import {
  Component,
  ViewContainerRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { componentFactoryName } from '@angular/compiler';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template!</h1>

  //   <p>Angular is awesome!</p> `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red;}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService
  ) {
    console.log(initService.config);
  }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componenentRef = this.vcr.createComponent(RoomsComponent);
  //   componenentRef.instance.numberOfRooms = 50;
  // }
}
