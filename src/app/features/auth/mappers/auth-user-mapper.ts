import firebase from 'firebase';
import { Mapper } from '../../../core/mapper';
import { User } from '../../../domain/user';

export class AuthUserMapper implements Mapper<firebase.UserInfo, User> {
  mapFrom(param: firebase.UserInfo): User {
    return {
      uid: param.uid,
      displayName: param.displayName,
      photoURL: param.photoURL,
    };
  }

  mapTo() {
    return {} as any;
  }
}
