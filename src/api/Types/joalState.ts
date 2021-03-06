export interface Client {
  name: string;
  version: string;
}

interface RuntimeConfig {
  minimumBytesPerSeconds: number;
  maximumBytesPerSeconds: number;
  client: string;
}

export interface JoalConfig {
  needRestartToTakeEffect: boolean;
  runtimeConfig: RuntimeConfig;
}

interface AnnounceHistory {
  wasSuccessful: string;
  datetime: string;
  seeders: number;
  leechers: number;
  interval: number;
  error: string;
}

interface Tracker {
  url: string;
  isAnnouncing: boolean;
  inUse: boolean;
  seeders: number;
  leechers: number;
  interval: number;
  announceHistory: AnnounceHistory[];
}

export interface Torrent {
  infohash: string;
  name: string;
  file: string;
  size: number;
  isAnnouncing: boolean;
  seeders: number;
  leechers: number;
  uploaded: number;
  trackers: { [hashKey: string]: Tracker };
}

interface TorrentBandWidth {
  infohash: string;
  percentOfBandwidth: number;
}

export interface Bandwidth {
  currentBandwidth: number;
  torrents: { [hashKey: string]: TorrentBandWidth };
}

export interface JoalState {
  globals: { [hashKey: string]: any };
  client: Client;
  config: JoalConfig;
  torrents: { [hashKey: string]: Torrent };
  bandwidth: Bandwidth;
}
