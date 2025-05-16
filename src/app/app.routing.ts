import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AthletesComponent } from "./athletes/athletes.component";
import { AthleteDetailComponent } from "./athlete-detail/athlete-detail.component";
import { AthleteFormComponent } from "./athlete-form/athlete-form.component";

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'atletas', component: AthletesComponent},
    {path: 'atletas/:id', component: AthleteDetailComponent},
    {path: 'aniadir', component: AthleteFormComponent},
    {path: 'editar/:id', component: AthleteFormComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);