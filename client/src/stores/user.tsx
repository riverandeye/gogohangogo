import { observable, action, reaction } from 'mobx';
import { jwtDecode } from 'jwt-decode';

interface Auth {
  email: string;
  name: string;
  id: number;
}

export default class UserStore {
  @observable token: string | null = window.sessionStorage.getItem('jwt');
  @observable auth: Auth | undefined;
  @observable id: number = null;
  @observable name: string = '';
  @observable email = '';

  constructor() {
    if (this.token) {
      this.auth = jwtDecode(this.token) as Auth;
    }

    reaction(
      () => this.token,
      token => {
        if (token != null) window.sessionStorage.setItem('jwt', token);
      },
    );
  }

  isLoggedIn() {
    return this.token != null;
  }

  @action
  async login() {
    const { token } = await (
      await fetch(`${process.env.REACT_APP_BACKEND_HOST}/users/login`, {
        method: 'POST',
      })
    ).json();
    this.setToken(token);
  }

  @action
  setEmail(email: string) {
    this.email = email;
  }

  @action
  setToken(token: string) {
    this.token = token;
    this.auth = jwtDecode(token) as Auth;
  }

  @action
  signOut() {
    window.sessionStorage.removeItem('jwt');
    this.token = null;
    this.auth = undefined;
  }
}
