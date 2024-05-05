import { Component, OnInit } from '@angular/core';
import { addService } from '../service/add.service';
import { FormsModule } from '@angular/forms';
import { DoListComponent } from '../do-list/do-list.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, DoListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [addService]
})

export class ListComponent implements OnInit{
  public valid: boolean = true
  public array: string[]=[];
  public str: string='';
  public redColor= 'red'
  constructor(private addservice:addService){
   this.array = this.addservice.getArr()
  }
 public add(str: string){
  this.addservice.addArray(str)
  this.array = this.addservice.getArr()
 }

public removeAffairs(str: string){
  this.array = this.addservice.removeArray(str)
  this.array = this.addservice.getArr()
}

public renameList(index: number, str: string){
  this.addservice.rename(index,str)
}

ngOnInit(): void {
}


// public rename (idex: number, str: string){
// this.array = this.addservice.renameService(idex, str)
// this.array = this.addservice.getArr()
// }


}
