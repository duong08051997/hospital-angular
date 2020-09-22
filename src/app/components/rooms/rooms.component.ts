import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../../services/room.service';
import {BedService} from '../../../services/bed.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
rooms = [];
beds = [];
  constructor(private roomService: RoomService,
              private bedService: BedService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllBed();
  }
  getAll(): any{
    return this.roomService.getAll().subscribe(data => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }
  getAllBed(): any{
    return this.bedService.getAll().subscribe(data => {
      this.beds = data;
      console.log(this.beds);
    });
  }

}
