import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieComponent } from './components/pages/serie/serie.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full',
  },

  { 
    path: 'home', 
    loadChildren: () => 
    import('./components/pages/home/home.module').then(m => m.
      HomeModule) 
    }, 
    { 
      path: 'character-list', 
      loadChildren: () => 
      import(
        './components/pages/characters/character-list/character-list.module'
        ).then(m => m.CharacterListModule) 
    }, 
    { 
      path: 'character-details/:id', 
      loadChildren: () => 
      import(
        './components/pages/characters/character-details/character-details.module'
        ).then(m => m.CharacterDetailsModule) 
    },
    {
      path: 'serie',
      component: SerieComponent
    },
  { path: 'extra', loadChildren: () => import('./components/pages/extra/extra.module').then(m => m.ExtraModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
