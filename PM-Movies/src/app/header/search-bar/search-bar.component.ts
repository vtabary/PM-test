import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() queryUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearchUpdate(searchQuery: string){

    this.queryUpdate.emit(searchQuery);
  }

}
