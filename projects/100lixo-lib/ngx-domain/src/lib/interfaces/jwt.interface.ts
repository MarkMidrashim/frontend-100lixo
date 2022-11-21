export declare type Permissions =
  'ROLE_ADMIN'
  | 'ROLE_USER'
  | 'ROLE_OPERATOR';

export interface JWT {
  exp: number;
  user_name: string;
  authorities: Permissions[];
  jti: string;
  client_id: string;
  scope: string[];
}
