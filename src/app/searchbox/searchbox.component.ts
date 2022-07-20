import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  constructor() { }
  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  searchForm = new FormGroup({
    search: new FormControl("",[Validators.pattern("[a-zA-Z]*")])//permitiremos unicamente letras
  });
  get f(){return this.searchForm.controls}

  getSearch(){
    this.searchValue.emit((this.searchForm.value).search)
  }

  onEnter(evt:any){
    evt.preventDefault();//para que no refresque la pagina al presionar enter
    this.searchValue.emit(evt.target.value);
  }

  ngOnInit(): void {
  }

}
