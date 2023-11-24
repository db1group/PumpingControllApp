import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import("./features/home/home.module").then(x => x.HomeModule)},
  {path: "players", loadChildren: () => import("./features/players/players.module").then(x => x.PlayersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
