import { observable, action, reaction } from 'mobx';
import jwtDecode from 'jwt-decode';

interface Auth {
  email: string;
  name: string;
  id: number;
}

export default class UserStore {
  @observable token: string | null = document.cookie;
  @observable auth: Auth | undefined;
  @observable id: number = null;
  @observable name: string = '';
  @observable email = '';

  constructor() {
    if (this.token) {
      this.auth = jwtDecode(this.token) as Auth;
    }
  }

  isLoggedIn() {
    return this.token != null;
  }

  @action
  setEmail(email: string) {
    this.email = email;
  }

  @action
  signOut() {
    document.cookie = null;
    this.token = null;
    this.auth = undefined;
  }
}
