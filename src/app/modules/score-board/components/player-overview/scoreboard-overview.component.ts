import {Component, HostListener, OnInit} from '@angular/core';
import {PlayerService} from "../../../../services/player.service";
import {HiddenPlayersDialog} from 'src/app/dialogTemplates/hidden-players-dialog/hidden-players-dialog.component';
import {MatDialog} from "@angular/material/dialog";
import {CurrentPlayerService} from "../../../../services/current-player.service";


@Component({
  selector: 'app-scoreboard-overview',
  templateUrl: './scoreboard-overview.component.html',
  styleUrls: ['./scoreboard-overview.component.scss']
})
export class ScoreboardOverviewComponent implements OnInit {
  miniMode = ""
  playersToDisplay = 1;

  constructor(public playerService: PlayerService,
              private dialog: MatDialog,
              public currentPlayerService: CurrentPlayerService,
  ) {
  }

  ngOnInit(): void {
    this.setCardClass(window.innerWidth)
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange() {
    this.setCardClass(window.innerWidth)
  }


  @HostListener('window:load', ['$event'])
  handleONLoad() {
    this.setCardClass(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  handleKeyboardEvent($event: { target: { innerWidth: any; innerHeight: any; }; }) {
    this.setCardClass($event.target.innerWidth)
  }

  setCardClass(innerWidth: number) {
    if (innerWidth < 400 && this.playerService._players.length > 1) {
      this.miniMode = "2"
      this.playersToDisplay = 0
    } else {
      this.miniMode = ""
    }

    if (innerWidth < 679 && this.playerService._players.length > 1) {
      this.miniMode = "2"
    } else {
      this.miniMode = ""
    }
    if (innerWidth > 1190) {
      this.playersToDisplay = 4
    } else {
      this.playersToDisplay = 1
    }

  }

  showAllPlayers() {
    this.dialog.open(HiddenPlayersDialog)
  }
}
