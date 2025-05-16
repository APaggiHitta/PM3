interface UserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  username: string;
  password: string;
  photo?: string;
}
export default UserDto;
