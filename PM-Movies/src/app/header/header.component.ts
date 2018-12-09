import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() queryUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onQueryUpdate(searchQuery: string){
    this.queryUpdate.emit(searchQuery);
  }

}
