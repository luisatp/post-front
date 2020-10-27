import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [HttpService]
})
export class PostComponent implements OnInit {

  public readPosts = [];
  public valdiarEmail=false;
  public dataPosts = {
    "email": "",
    "password": ""
  }

  public mensaje = '';
  public mensaje2 = '';

  constructor( private http : HttpService, 
    private _router: Router,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    
  }

  
  savePosts(){
 /*   var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regex.test(this.dataPosts.email) == false){
     
      this.valdiarEmail = true;
    }else{
      this.valdiarEmail=false;
    }
    if(this.valdiarEmail == false){*/ 
      this.toastr.info('Ingreso correctamente');
      this.http.loginPost(this.dataPosts).subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/list']);
        }
      );
  
  }
}
