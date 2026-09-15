import {inject, Injectable} from '@angular/core';
import {PlayerService} from "./player.service";
import {OverviewPlayer} from "../models/player/player.model";

interface VictoryCount {
  playerName: string;
  wins: number;
}

@Injectable({
  providedIn: 'root',
})
export class VictoryCountService {

  playerService = inject(PlayerService);


  addWinToPlayer(playerName: string) {
    if (localStorage.getItem('playerNames')) {
      let players: OverviewPlayer[] = JSON.parse(localStorage.getItem('playerNames')!)
      let player = players.find(p => p.name === playerName)
      if (player) {
        player.wins++
        localStorage.setItem('playerNames', JSON.stringify(players))
      }
    }
  }

}
