import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onKey(event): void {
    this.searchChange.emit(event.target.value);
  }

}
