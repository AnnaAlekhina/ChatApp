import { Component, OnInit } from '@angular/core';
import { User, Message } from '../login/types/types';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Subscription, observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private _router: Router;
  private _AppService: AppService;
  private subscription: Subscription;
  private subscriptionMessage: Subscription;
  public myMessages: Message[];

  public currentUser: User = null;
  public message: Message = {
    author: null,
    text: ''
  };

  public index: number;
  public flag = false;
  public placeholder = 'Введите сообщение';

  constructor(Service: AppService, Router: Router) {
    this._AppService = Service;
    this._router = Router;
    this.subscription = this._AppService.getUserAsObservable()
      .subscribe(currUser => { this.currentUser = currUser; });

    this.subscriptionMessage = this._AppService.getMessageasAsObservable()
      .subscribe(currMessages => { this.myMessages = currMessages; });
  }

  ngOnInit() {
    this.message.author = this.currentUser;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionMessage.unsubscribe();
  }

  submitSendHandler(event) {
    event.preventDefault();
    const newMessage: Message = {
      author: this.message.author,
      text: this.message.text
    };
    if (this.flag) {
      this._AppService.editMessage(this.index, newMessage);
      this.flag = false;
      this.placeholder = 'Введите сообщение';
    }
    else this._AppService.addMessage(newMessage);
    this.message.text = '';
  }

  clickDeleteHandler(i: number) {
    this._AppService.delMessage(i);
  }

  clickEditHandler(i: number) {
    this.flag = true;
    this.index = i;

    this.placeholder = 'Редактировать сообщение';

    let mess: Message = this.myMessages[this.index]; // редактируемое сообщение
    this.message.text = mess.text; // отправили данные в input через ngModel
  }
}