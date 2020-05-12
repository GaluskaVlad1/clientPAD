export class User{
  constructor(username: any, password: any) {
    this.username = username;
    this.password = password;
  }

  private username: string;
  private password: string;
}
