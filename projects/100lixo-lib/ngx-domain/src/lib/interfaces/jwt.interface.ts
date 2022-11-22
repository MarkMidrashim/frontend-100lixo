export declare type Permissions =
  'ROLE_ADMIN'
  | 'ROLE_USER'
  | 'ROLE_OPERATOR';

export interface JWT {
  sub: string;
  roles: Permissions[];
  iat: number;
  exp: number;
}
