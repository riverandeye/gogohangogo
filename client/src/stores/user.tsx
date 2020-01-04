import { observable, action, reaction } from 'mobx';
import jwtDecode from 'jwt-decode';
import cookies from 'react-cookies';

interface Auth {
  email: string;
  name: string;
  id: number;
}

class UserStore {
  @observable token: string | null = cookies.load('token');
  @observable auth: Auth | undefined;
  @observable id: number = null;
  @observable name: string = '';
  @observable email = '';

  constructor() {
    if (this.token) {
      console.log(this.token);
      this.auth = jwtDecode(this.token) as Auth;
    }
  }

  isLoggedIn() {
    console.log(this.token);
    return this.token != null;
  }

  @action
  setEmail(email: string) {
    this.email = email;
  }

  @action
  signOut() {
    cookies.remove('token');
    this.token = null;
    this.auth = undefined;
  }
}

export default UserStore;
