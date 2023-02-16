import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.scss']
})
export class RegisteredListComponent implements OnInit {

   public registerForm!: FormGroup;

    public members: User[] = [];
    public dataSource!: MatTableDataSource<User>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    displayedColumns: string[] = ['id','firstName','lastName','email','mobile','bmiResult','gender','package','enquiryDate','action'];

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private ngconfirm: NgConfirmService, private toast: NgToastService){}


  ngOnInit(): void {
  
    this.getAllMembers();
  }
  
  getAllMembers(){
    this.api.getAllMemebers()
    .subscribe({
      next: (users) => {
        this.members = users;
        this.dataSource= new MatTableDataSource(this.members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(Response) => {
        console.log(Response);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: string){
    this.router.navigate(['update', id]);
  }

  delete(id: string){
    this.ngconfirm.showConfirm("Are you sure want to delete?",
    ()=>{
      this.api.deleteMember(id)
      .subscribe(res=>{
        this.toast.success({detail:"Success",summary:"Member deleted!",duration:3000});
        this.getAllMembers();
    })
    },
    ()=>{
    })
  }
}
