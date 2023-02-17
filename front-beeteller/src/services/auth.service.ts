import { ReducedUserType } from 'types/user';
import authApi from './authApi';

export interface LoginResponseRequestType {
  associatedCompanyRoles: string[];
  token: string;
  user: ReducedUserType;
}

export class AuthService {
  static login = (email: string, password: string, isCompanyLogin: boolean) => {
    return authApi.post<LoginResponseRequestType>('/authentication/signing', {
      email,
      password,
      isCompanyLogin
    });
  };
}
