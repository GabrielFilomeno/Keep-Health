import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CalcularIdadePipe } from './pipes/calcular-idade.pipe';
import { CmParaMetrosPipe } from './pipes/cm-para-metros.pipe';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, CalcularIdadePipe, CmParaMetrosPipe],
  imports: [CommonModule, DockModule, RadioButtonModule, DockModule, FormsModule, ButtonModule, SidebarModule],
  exports: [HeaderComponent, SidebarComponent, CalcularIdadePipe, CmParaMetrosPipe]
})
export class SharedModule { }
