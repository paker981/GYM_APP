import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  public userID!: string;
  userDetails!: User

  constructor(private activeRoute: ActivatedRoute, private api: ApiService){}

  ngOnInit(): void {
    this.activeRoute.params
    .subscribe(res=>{
      this.userID=res['id'];
      this.fetchUserDetails(this.userID);
    })
  }

  fetchUserDetails(userID: string){
    this.api.getMemeber(userID)
    .subscribe(res=>{
      this.userDetails = res;
    })

  }

}
