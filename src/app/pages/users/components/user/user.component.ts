import { UserDto } from './../../models/user-list-dto';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { UserService } from '../../services/user.service';
import { DialogModule } from 'primeng/dialog';
import { UserInfoDto } from '../../models/user-info-dto';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        TableModule,
        MultiSelectModule,
        SelectModule,
        InputIconModule,
        TagModule,
        InputTextModule,
        SliderModule,
        ProgressBarModule,
        ToggleButtonModule,
        ToastModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule,
        DialogModule,
        UserDetailsComponent
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    providers: [UserService]
})
export class UserComponent implements OnInit {
    loading: boolean = true;
    @ViewChild('filter') filter!: ElementRef;
    rowGroupMetadata: any;
    users: UserDto[] = [];
    userInfo: UserInfoDto|null = null;
    showDetails:boolean = false;
    userId:number = 0;
    constructor(private userService: UserService) {}
    ngOnInit(): void {
        this.userService.getUserList().subscribe({
            next: (res) => {
                this.users = res.map((c) => {
                    return {
                        id: c.id,
                        name: c.name,
                        email: c.email,
                        companyName: c.company?.name
                    } as UserDto;
                });

                console.log(this.users);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                this.loading = false;
            }
        });
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    openDetails(userId:number){
        this.userId = userId;
        this.showDetails = true
    }
}
