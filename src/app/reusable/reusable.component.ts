import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-reusable',
  standalone: true,
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css'
})
export class ReusableComponent {
@Input() btnName:string=""
@Input() btnClass:string="";
@Output() emitEvent=new EventEmitter<any>();

onclick(){
  this.emitEvent.emit();
}
}
