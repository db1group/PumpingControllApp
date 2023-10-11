import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "players", loadChildren: () => import("./features/players/players.module").then(x => x.PlayersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
