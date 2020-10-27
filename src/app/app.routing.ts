import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import componets
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { ListComponent } from './components/list/list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: 'post', component: PostComponent },
    { path: 'users', component: UsersComponent },
    { path: 'list', component: ListComponent },
    { path: '**', redirectTo: '/post', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);