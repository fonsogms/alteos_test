enum Gender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "other",
}

export interface User {
  id: number;
  _id: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: Gender;
  company: string;
  email: string;
  phone: string;
  address: string;
}
