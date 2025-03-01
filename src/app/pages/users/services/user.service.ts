import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user-list-dto';
import { UserInfoDto } from '../models/user-info-dto';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUR: string = environment.appUrl;
    constructor(private http: HttpClient) {}

    getUserList():Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUR}/users`);
    }
    getUserById(userId:number):Observable<UserInfoDto>{
        return this.http.get<UserInfoDto>(`${this.baseUR}/users/${userId}`);
    }
}
