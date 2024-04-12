// export type ProviderData = {
//   displayName: string;
//   email: string;
//   phoneNumber: string | null;
//   photoURL: string;
//   providerId: string;
//   uid: string;
// };

// export type Token = {
//   accessToken: string;
//   expirationTime: number;
//   refreshToken: string;
// };

export type FireUser = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string;
  uid: string;
};
