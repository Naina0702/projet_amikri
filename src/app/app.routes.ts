import { Routes } from '@angular/router';
import { HomeComponent } from './contenu/home/home.component';
import { Component } from '@angular/core';
import { ProgramaComponent } from './contenu/programa/programa.component';
import { HifandrayComponent } from './contenu/hifandray/hifandray.component';
import { HiraComponent } from './contenu/hira/hira.component';
import { BiraoComponent } from './contenu/birao/birao.component';
import { VaovaoTabComponent } from './contenu/vaovao-tab/vaovao-tab.component';
import { AlbumComponent } from './contenu/album/album.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'programa',component:ProgramaComponent},
    {path:'hifandray',component:HifandrayComponent},
    {path:'hira',component:HiraComponent},
    {path:'birao',component:BiraoComponent},
    {path:'Vaovao',component:VaovaoTabComponent},
    {path:'Album',component:AlbumComponent}



];
