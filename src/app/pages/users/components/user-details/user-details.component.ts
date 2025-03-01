import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserInfoDto } from '../../models/user-info-dto';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-details',
  imports: [
    ButtonModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

    @Input() userId:number=0;
    userInfo: UserInfoDto|null = null;

    constructor(private userService:UserService){

    }

    ngOnInit(): void {
        this.loadData();
    }

    loadData(){
        this.userService.getUserById(this.userId).subscribe({
            next: (res) => {
                this.userInfo = res;
                console.log(this.userId);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        })
    }

}
