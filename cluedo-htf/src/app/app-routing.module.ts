import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpelregelsComponent } from './pages/spelregels/spelregels.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'regels', component: SpelregelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }