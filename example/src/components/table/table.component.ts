import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
users;
  constructor() { }

  ngOnInit() {
    var  that=this;
      $.ajax({
        url:"https://jsonplaceholder.typicode.com/users ",
        method:"GET",
        data:{},
        success:function(res){
          console.log(res)
          that.users=res;  
        },
        error:function(err){}
     })
    }
}
