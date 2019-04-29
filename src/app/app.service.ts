import { User,Message } from './login/types/types';
import { Observable, BehaviorSubject } from 'rxjs';

export class AppService {

  private users: User[] = [];
  private currentUser: User = null;
  private messages: Message[] = [];
  private subject = null;

  constructor() {
    const usersParsed = JSON.parse(localStorage.getItem('users'));
    this.users = usersParsed ? usersParsed : [];
    
    const currentUserParsed = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = currentUserParsed ? currentUserParsed : null;
    this.subject = new BehaviorSubject<User>(this.currentUser); // используем BehaviorSubject для возможности задать начальное значение

    const messagesParsed = JSON.parse(localStorage.getItem('messages'));
    this.messages = messagesParsed ? messagesParsed : [];
  }
  
  public sendCurrUser(currUserName: string): void {
    this.subject.next({ name: currUserName });
  }

  public getCurrUser(): Observable<User> {
    return this.subject.asObservable(); 
  }

  public getAllUsers(){
    return this.users;
  }

  public getAllMessages(){
    return this.messages;
  }

  public addUser(newUser: User){
    if (!newUser.name) return;
    var foundUser = this.users.find(elem => elem.name == newUser.name);
    if (!foundUser) {
        this.users.push(newUser);
        this.currentUser = newUser;
    }
    else {
        this.currentUser = foundUser;
    }
    this.saveUsers();
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  addMessage(newMessage: Message){
    if (!newMessage.text) return;
    else{
      this.messages.push(newMessage);
      this.saveMessages();
    }
  }

  saveMessages() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }
}