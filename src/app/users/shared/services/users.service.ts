import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchUsersResponse } from '../interfaces/search-users-response.interface';
import { User, UserProfile } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  searchUsers(filter: string = 'sample', page: number = 1, limitPerPage: number = 10): Observable<SearchUsersResponse> {
    return this.httpClient.get<SearchUsersResponse>(`${environment.api.host}/search/users`, {
      params: { q: filter, page: page, per_page: limitPerPage }
    });
  }

  getUserProfile(url: string): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(url);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get<User>(`${environment.api.host}/users`);
  }
}
