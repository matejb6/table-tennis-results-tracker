import { generateId } from './generate-id.util';
import { getMatchScore } from './get-match-score.util';
import { getMatchWinner } from './get-match-winner.util';
import { getPlayerByName } from './get-player-by-name.util';
import { AddMatchFormData, Match, Player } from '../interfaces';
import { MatchSet } from '../types';

/**
 * Takes match form data and parses it into match data for app usage
 * @param players Players
 * @param addMatchFormData Add match form data
 * @returns Match data
 */
export const parseMatchForm = (players: Player[], addMatchFormData: AddMatchFormData): Match => {
  const id = generateId();
  const gamePlayers: Player[] = [
    getPlayerByName(players, addMatchFormData.firstPlayer)!,
    getPlayerByName(players, addMatchFormData.secondPlayer)!,
  ];
  const sets: MatchSet[] = addMatchFormData.sets.map((item) => [
    item.firstPlayerScore!,
    item.secondPlayerScore!,
  ]);
  const score = getMatchScore(sets);
  const winner: Player = getMatchWinner(score, gamePlayers);
  const date = new Date(id).toUTCString();
  return { id: id, players: gamePlayers, sets: sets, score: score, winner: winner, date: date };
};
