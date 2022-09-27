import { Component, OnInit } from '@angular/core';

export interface UserData {
  id: number;
  fname: string;
  lname: string;
  username: string;
}

const USER_DATA: UserData[] = [
  { id: 1, fname: 'Mark'  , lname: 'Otto'   , username:"@mdo" },
  { id: 2, fname: 'Jacob' , lname: 'Throton', username:"@fat" },
  { id: 3, fname: 'Larry' , lname: 'thebird', username:"@twitter" },
];  


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['id', 'fname', 'lname', 'username'];
  dataSource = USER_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
