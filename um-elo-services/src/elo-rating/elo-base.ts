import { ExpectedScores } from "src/matches/expected-scores.dto";
import { Player } from "src/players/player.dto";

export class EloBase {

  constructor(
    private player: Player,
    private opponent: Player,
    private score: number,
    private k: number = 32,
  ) { }

  private calc_expected_score(player_rating: number, opponent_rating: number) {
    return 1 / (1 + Math.pow(10, (opponent_rating - player_rating) / 400));
  }

  private calc_new_rating(rating: number, expected_score: number, actual_score: number, k: number) {
    return rating + k * (actual_score - expected_score);
  }

  update(): ExpectedScores {
    const player_expected_score = this.calc_expected_score(this.player.rating, this.opponent.rating);
    const opponent_expected_score = this.calc_expected_score(this.opponent.rating, this.player.rating);

    const player_new_rating = this.calc_new_rating(this.player.rating, player_expected_score, this.score, this.k);
    const opponent_new_rating = this.calc_new_rating(this.opponent.rating, opponent_expected_score, 1 - this.score, this.k);

    this.player.rating = player_new_rating;
    this.player.num_of_matches++;
    this.opponent.rating = opponent_new_rating;
    this.opponent.num_of_matches++;

    return {
      player: player_expected_score,
      opponent: opponent_expected_score,
    }
  }
}