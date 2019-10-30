import { NgModule } from "@angular/core";
import { TileComponent } from './tile/tile.component';

@NgModule({
     declarations:[TileComponent],
     exports:[TileComponent]
})
export class SharedModule{}