import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.services';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [HttpService]
})
export class UsersComponent implements OnInit {
  public dataPosts = {
    "email": "",
    "password": ""
  }

  constructor( private http : HttpService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    
  }

  
  savePosts(){
      this.toastr.info('Post creado correctamente');
      this.http.registrarPost(this.dataPosts).subscribe(
        data => {
          console.log(data);
        }
      );
  }
}
