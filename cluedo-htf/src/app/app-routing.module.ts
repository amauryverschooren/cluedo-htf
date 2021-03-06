import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KladblokComponent } from './pages/kladblok/kladblok.component';
import { GameComponent } from './pages/game/game.component';
import { SpelregelsComponent } from './pages/spelregels/spelregels.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: 'game', component: GameComponent},
  { path: 'start', component: StartComponent },
  { path: 'regels', component: SpelregelsComponent },
  { path: 'kladblok', component: KladblokComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }