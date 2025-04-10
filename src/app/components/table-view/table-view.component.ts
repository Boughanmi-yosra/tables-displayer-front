import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {CommonModule} from "@angular/common";
import {UserService} from "../../services/user.service";
import {DataItem} from "../../interfaces/DataItem";
import {Users} from "../../interfaces/Users";
import {Products} from "../../interfaces/Products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-table-view',
  imports: [CommonModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})

  export class TableViewComponent implements OnInit {
  data: DataItem[] = [];
  users: Users[] = [];
  products :Products[]= [];

  constructor(private dataService: DataService , private  userService :UserService ,private productsService : ProductsService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });

    this.userService.getData().subscribe((response)=> {
      this.users = response;
    });

    this.productsService.getData().subscribe((response)=> {
      this.products = response;
    });
  }

}
