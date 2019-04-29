import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from './types/types';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public user: User = {
    name: ""
  };
  private _AppService: AppService;
  private _router: Router;

  constructor(Service: AppService, Router: Router) {
    this._AppService = Service;
    this._router = Router;
  }

  ngOnInit() {
  }

  public goToChat(){
    this._router.navigate(['chat']);
  }

  submitHandler(event){
    event.preventDefault();
    const newUser: User = {
      name: this.user.name,
    };
    if (this.user.name == "") return;
    if (newUser.name.search(/\S/)==-1) return;
    this._AppService.addUser(newUser);
    this.user.name = '';
    this.goToChat();
    this._AppService.sendCurrUser(newUser.name);
  }
}