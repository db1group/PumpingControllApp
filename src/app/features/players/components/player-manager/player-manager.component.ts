import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlayersList } from '../../Interfaces/IPlayersList';
import { PlayersService } from '../../services/players/players.service';

interface IUpdatePlayersRequest {
  Amount: number;
  Action: Number;
}

@Component({
  selector: 'pumping-player-manager',
  templateUrl: './player-manager.component.html',
  styleUrls: ['./player-manager.component.css']
})
export class PlayerManagerComponent{
  constructor(private playerService: PlayersService) {}
  
  @Input() selectedPlayers?: IPlayersList[];
  @Output() unselect = new EventEmitter<IPlayersList>();
  @Output() clear = new EventEmitter();

  unselectPlayer(player: IPlayersList) {
    this.unselect.emit(player);
  }

  updatePlayers(event: IUpdatePlayersRequest) {
    const request = {
      "Amount": event.Amount,
      "Action": Number(event.Action)
    }
    
    let playerIds = this.selectedPlayers!.map(x => x.id);
    this.playerService.updateBalances(playerIds, request);
    this.clearPlayers();
  }

  clearPlayers() {
    this.clear.emit();
  }
}