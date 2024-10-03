export interface Event {
  id: number;
  favourite: boolean;
  icon: string;
  title: string;
  matches: Array<EventMatch>;
}

export interface EventMatch {
  id: number;
  time: string;
  set: string;
  player1: PlayerData;
  player2: PlayerData;
}

export interface PlayerData {
  icon: string;
  score: number;
  subscore: number;
  name: string;
  point: number;
}
