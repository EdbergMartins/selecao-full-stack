import { UserType } from 'types/user';
import authApi from './authApi';

export class CandidateService {
  static getGeneral = () => {
    return authApi.get<UserType>('/profile');
  };
}
