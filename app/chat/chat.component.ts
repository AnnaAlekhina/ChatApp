import { Component, OnInit } from '@angular/core';
import { User, Message } from '../login/types/types';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private _router: Router;
  private _AppService: AppService;
  private subscription: Subscription;
  public myMessages: Message[];

  public currentUser: User = null;
  public message: Message = {
    author: null,
    text: ""
  };

  constructor(Service: AppService, Router: Router) {
    this._AppService = Service;
    this._router = Router;
    this.subscription = this._AppService.getCurrUser()
      .subscribe(currUserName => { this.currentUser = currUserName; });
  }

  ngOnInit() {
    this.message.author = this.currentUser;
    this.myMessages = this._AppService.getAllMessages();
  }

  submitHandler(event){
    event.preventDefault();
    const newMessage: Message = {
      author: this.message.author,
      text: this.message.text
    };
    this._AppService.addMessage(newMessage);
    this.message.text = "";
  }
}
