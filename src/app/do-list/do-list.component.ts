import { Component, Input } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-do-list',
  standalone: true,
  imports: [ListComponent, FormsModule],
  templateUrl: './do-list.component.html',
  styleUrl: './do-list.component.scss',
})
export class DoListComponent {




   

}
