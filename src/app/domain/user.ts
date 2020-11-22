import firebase from 'firebase';

export type User = Pick<firebase.UserInfo, 'displayName' | 'photoURL' | 'uid'>;
