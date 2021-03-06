import Phaser from 'phaser';
import config from '../config/config';
import GameScene from '../scenes/GameScene';
import PreloadScene from '../scenes/Preload';
import gameGlobals from '../config/gameGlobals';
import TitleSecene from '../scenes/TitleScene';
import OptionsScene from '../scenes/OptionsScene';
import CreditsScene from '../scenes/CreditsScene';
import LeaderboardScene from '../scenes/LeaderboardScene';
import GameOverScene from '../scenes/GameOverScene';
import InstructionsScene from '../scenes/InstructionsScene';

export default class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.globals = gameGlobals;
    this.scene.add('Preload', PreloadScene);
    this.scene.add('GameScene', GameScene);
    this.scene.add('TitleScene', TitleSecene);
    this.scene.add('OptionsScene', OptionsScene);
    this.scene.add('CreditsScene', CreditsScene);
    this.scene.add('InstructionsScene', InstructionsScene);
    this.scene.add('LeaderboardScene', LeaderboardScene);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.start('Preload');
  }
}