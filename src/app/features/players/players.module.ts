import { NgModule } from '@angular/core';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './pages/players-list/players-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { PlayersService } from './services/players/players.service';
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from '@angular/material/paginator';
import { PlayerManagerComponent } from './components/player-manager/player-manager.component';
import { ScoreManagerComponent } from './components/player-manager/score-manager/score-manager.component';
import { DataService } from './services/DataManager/data.service';

@NgModule({
  declarations: [PlayersListComponent, PlayersTableComponent, PlayerManagerComponent, ScoreManagerComponent,],
  imports: [
    SharedModule,
    PlayersRoutingModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    PlayersService,
    DataService
  ],
})
export class PlayersModule { }
