import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'proveedor', component:ProveedorComponent}
];