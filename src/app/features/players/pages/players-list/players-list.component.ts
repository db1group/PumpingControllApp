import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPlayersList } from '../../Interfaces/IPlayersList';
import { PlayersService } from '../../services/players/players.service';
import { DataService } from '../../services/DataManager/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'pumping-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>();
  players: IPlayersList[] = [];
  clickedRows: IPlayersList[] = [];

  constructor(
    private playerService: PlayersService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.playerService
      .getPlayers()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((x) => {
        this.players = x;
      });

    this.dataService.dataChanged$
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.playerService.getPlayers().subscribe((x) => {
          this.players = x;
        });
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  handleSelection($event: IPlayersList) {
    if (this.clickedRows.includes($event)) {
      let index = this.clickedRows.indexOf($event);
      this.clickedRows.splice(index, 1);
      return;
    }
    this.clickedRows.push($event);
  }

  resetClickedPlayers() {
    this.clickedRows = [];
  }
}
