import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'testcrud', loadChildren: './testcrud/testcrud.module#TestcrudPageModule' },
  { path: 'testcrud_load', loadChildren: './testcrud-load/testcrud-load.module#TestcrudLoadPageModule' },
  { path: 'tambah_wisata', loadChildren: './tambah-wisata/tambah-wisata.module#TambahWisataPageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
