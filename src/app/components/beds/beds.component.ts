import { Component, OnInit } from '@angular/core';
import {BedService} from '../../../services/bed.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {
beds = [];
  constructor(private bedService: BedService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(): any{
    return this.bedService.getAll().subscribe(data => {
      this.beds = data;
      console.log(data);
    });
}

}
