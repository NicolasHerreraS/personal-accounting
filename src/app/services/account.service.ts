import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  API_URL = "http://uam.jdcorrea.me/pfe-personal-accounting/web/accounts";

  constructor() { }
}
