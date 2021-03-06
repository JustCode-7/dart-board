import {APP_INITIALIZER, NgModule} from '@angular/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HiddenPlayersDialog} from './dialogTemplates/hidden-players-dialog/hidden-players-dialog.component';
import {VictoryDialog} from './dialogTemplates/victory-dialog/victory-dialog.component';
import {CricketBoardModule} from './modules/cricket-board/cricket-board.module';
import {CurrentPlayerProgressModule} from './modules/current-player-progress/current-player-progress.module';
import {DartBoardModule} from './modules/dart-board/dart-board.module';
import {GameSelectionModule} from './modules/game-selection/game-selection.module';
import {PageNotFoundModule} from "./modules/page-not-found/page-not-found.module";
import {ScoreBoardModule} from './modules/score-board/score-board.module';
import {RedirectWarningService} from "./services/redirect-warning.service";
import {noop} from "./shared/util";

@NgModule({
  declarations: [
    AppComponent,
    VictoryDialog,
    HiddenPlayersDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    DartBoardModule,
    CricketBoardModule,
    ScoreBoardModule,
    GameSelectionModule,
    PageNotFoundModule,
    CurrentPlayerProgressModule,

    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [
    RedirectWarningService,
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [RedirectWarningService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
