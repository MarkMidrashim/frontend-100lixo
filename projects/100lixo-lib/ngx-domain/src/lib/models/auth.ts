export interface IAuth {
  username: string;
  password: string;
}

export interface IToken {
  username: string;
  token: string;
}

export class Auth implements IAuth {
  username: string;
  password: string;

  constructor(rawData: IAuth) {
    this.username = rawData.username;
    this.password = rawData.password;
  }
}

export class Token implements IToken {
  username: string;
  token: string;

  constructor(rawData: IToken) {
    this.username = rawData.username;
    this.token = rawData.token;
  }
}

export const publicAuthRequestMock: IAuth = {
  username: 'teste@teste.com',
  password: 'teste@123'
};

export const publicAuthResponseMock: IToken = {
  username: 'teste@teste.com',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzkwOTkzMzAsInVzZXJfbmFtZSI6Im1hcmNvc2ZyYW5jby5kZXZlbG9wZXJAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9PUEVSQVRPUiIsIlJPTEVfQURNSU4iXSwianRpIjoiZmE5ODVkM2UtZDk0My00NTExLTk4NWYtNDBkY2U5ZjA5ZTdlIiwiY2xpZW50X2lkIjoiUmVjZWJhLUFwcCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.dJ7gE2_n-ExPizOpEKjXyRDhZ84Fh3Uo0nlEaqmyDmw'
};
