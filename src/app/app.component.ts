import { Component } from '@angular/core';
import {TableViewComponent} from "./components/table-view/table-view.component";

@Component({
  selector: 'app-root',
  imports: [TableViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tables-displayer';
}
