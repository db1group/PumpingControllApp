import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlayersList } from '../../Interfaces/IPlayersList';
import { forkJoin, map } from 'rxjs';
import { DataService } from '../DataManager/data.service';

interface IUpdatePlayersRequest {
  Amount: number;
  Action: Number;
}

@Injectable()
export class PlayersService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  getPlayers() {
    return this.http.get<IPlayersList[]>('/api/Player').pipe(
      map((value) =>
        value.map((value, index) => {
          value.index = ++index;
          return value;
        })
      )
    );
  }

  updateBalances(playerIds: string[], request: IUpdatePlayersRequest) {
    const updateRequests = playerIds.map((playerId) => {
      const url = `/api/Player/${playerId}`;
      return this.http.put(url, request);
    });

    return forkJoin(updateRequests).subscribe(x => this.dataService.notifyDataChanged());
  }
}
