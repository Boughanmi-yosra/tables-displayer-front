import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {CommonModule} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-table-view',
  imports: [CommonModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})

  export class TableViewComponent implements OnInit {
  data: any[] = [];
  users: any[] = [];

  constructor(private dataService: DataService , private  userService :UserService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });

    this.userService.getData().subscribe(response => {
      this.users = response;
    });
  }

}
