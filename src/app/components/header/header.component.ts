import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  titulo: string= 'titulo';
  showAddTask: boolean= true;
  subcription?: Subscription;

  constructor(private uiService: UiService){
    this.subcription= this.uiService.onToggle().subscribe(value =>
      this.showAddTask=value);
  }

  ngOnInit(): void {
    
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
