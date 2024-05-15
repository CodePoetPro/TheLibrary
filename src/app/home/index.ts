import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCardComponent } from './components/book-card';
import { ApiService } from '../api.service';
import { GetBooksResponse } from '../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  book_data!: GetBooksResponse;
  loading = true;
  constructor(private api:ApiService){}

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData(){
  this.api.getBooks().subscribe((res: GetBooksResponse)=>{
    this.book_data = res;
    this.loading = false;
  })
  }
}
