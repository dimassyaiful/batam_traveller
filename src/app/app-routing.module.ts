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
  { path: 'testcrud', loadChildren: './testcrud/testcrud.module#TestcrudPageModule' },
  { path: 'testcrud_load', loadChildren: './testcrud-load/testcrud-load.module#TestcrudLoadPageModule' },
  { path: 'tambah_wisata', loadChildren: './tambah-wisata/tambah-wisata.module#TambahWisataPageModule' },
  { path: 'Login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'data-wisata', loadChildren: './data-wisata/data-wisata.module#DataWisataPageModule' },
  { path: 'update-wisata', loadChildren: './update-wisata/update-wisata.module#UpdateWisataPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
