import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersApi {
  public URL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
}

export interface Users {
  userId: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  birthdate: string;
  province: string;
  city: string;
  phone: string;
  role: string;
  roleId: number;
}

export interface Roles {
  roleId: number;
  name: string;
}
