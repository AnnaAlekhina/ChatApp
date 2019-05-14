import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Message, User } from '../login/types/types';

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

  constructor(Service: AppService, AppRouter: Router) {
    this._AppService = Service;
    this._router = AppRouter;
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
    } else { this._AppService.addMessage(newMessage); }
    this.message.text = '';
  }

  clickDeleteHandler(i: number) {
    this._AppService.delMessage(i);
  }

  clickEditHandler(i: number) {
    this.flag = true;
    this.index = i;

    this.placeholder = 'Редактировать сообщение';

    const mess: Message = this.myMessages[this.index];
    this.message.text = mess.text;
  }
}
