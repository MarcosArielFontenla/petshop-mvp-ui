import { Roles, Users } from "../../core/services/users.api";

export const users_roles: Roles[] = [
  {
    roleId: 1,
    name: 'Admin'
  },
  {
    roleId: 2,
    name: 'Employee'
  }
]

export const users_mock: Users[] = [
  {
    userId: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'john-doe@email.com',
    address: '1234 Main St',
    birthdate: '1990-01-01',
    province: 'Ontario',
    city: 'Toronto',
    phone: '123-456-7890',
    role: 'Admin',
    roleId: 1
  },
  {
    userId: 2,
    name: 'Chuck',
    lastname: 'Norris',
    email: 'chuck-norris@email.com',
    address: '1234 Main St',
    birthdate: '1990-01-01',
    province: 'Buenos Aires',
    city: 'Mar del Plata',
    phone: '123-456-7890',
    role: 'Admin',
    roleId: 1
  },
  {
    userId: 3,
    name: 'Steve',
    lastname: 'vai',
    email: 'steve-vai@email.com',
    address: '1234 Main St',
    birthdate: '1990-01-01',
    province: 'Chubut',
    city: 'Comodoro Rivadavia',
    phone: '123-456-7890',
    role: 'Employee',
    roleId: 2
  },
  {
    userId: 4,
    name: 'Joe',
    lastname: 'Satriani',
    email: 'joe-satriani@email.com',
    address: '1234 Main St',
    birthdate: '1990-01-01',
    province: 'Ushuaia',
    city: 'Tierra del Fuego',
    phone: '123-456-7890',
    role: 'Employee',
    roleId: 2
  },
]
