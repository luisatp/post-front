import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.services';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [HttpService]
})
export class ListComponent implements OnInit {

  public readPosts = [];

  public dataPosts = {
    "name": "",
    "job": "",
  }

  constructor( private http : HttpService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.listPosts();
  }

  listPosts(){
    this.http.getUsers().subscribe(
      data => {
        console.log(data)
        this.readPosts=data.data
      },
      error => {
        //
      }
    );
  }

  savePosts(){
    if(this.dataPosts.name == "" || this.dataPosts.job == ""){
      this.toastr.info('Complete todos los campos');
    }else{
      this.toastr.info('Usuario creado correctamente');
      this.http.registrarUser(this.dataPosts).subscribe(
        data => {
          console.log(data);
          this.listPosts();
        }
      );
    }
  }

}
