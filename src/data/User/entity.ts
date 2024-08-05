import { UserFromApi } from "./type";

class User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;

  constructor(data: UserFromApi) {
    this.id = data.id ?? '';
    this.username = data.username ?? '';
    this.email = data.email ?? '';
    this.firstName = data.firstName ?? '';
    this.lastName = data.firstName ?? '';
    this.gender = data.gender ?? '';
    this.image = data.image ?? '';
    this.token = data.token ?? '';
    this.refreshToken = data.refreshToken ?? '';
  }
}

export default User;