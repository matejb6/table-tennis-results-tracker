import { Component, OnInit } from '@angular/core';

import { DataService } from '@core/data/data.service';
import { Player } from '@core/models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: Player[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.dataService.getPlayers()[0]);
    this.dataSource = this.dataService.getPlayers();
  }
}
