import Svg, { Path } from 'react-native-svg';

// Linien-Icons im 24er-Raster, gleiche Formen wie auf der Website.
const I = {
  upload: 'M12 16V4m0 0-5 5m5-5 5 5M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2',
  home: 'M3 11 12 4l9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  users: 'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M21 19v-1a4 4 0 0 0-3-3.87M15.5 3.13a3.5 3.5 0 0 1 0 6.74',
  close: 'M6 6l12 12M18 6 6 18',
  check: 'M5 12.5 10 17 19 7',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  back: 'M19 12H5m6 6-6-6 6-6',
  clock: 'M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM8.5 12l2.5 2.5 4.5-5',
  award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12M8.5 13.5 7 21l5-3 5 3-1.5-7.5',
  cam: 'M4 7h3l2-3h6l2 3h3v12H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  inbox: 'M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
  doc: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
  video: 'M3 6h12v12H3zM15 10l6-3v10l-6-3',
  lock: 'M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  play: 'M8 5v14l11-7z',
  euro: 'M17 6.5A7 7 0 1 0 17 17.5M4 10h9M4 14h9',
  chev: 'M9 6l6 6-6 6',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1',
  logout: 'M15 4h4v16h-4M10 17l5-5-5-5M15 12H3',
  image: 'M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M15 9.5a1.5 1.5 0 1 0 0-.01',
  wallet: 'M4 7h15a1 1 0 0 1 1 1v11H5a1 1 0 0 1-1-1zM4 7l11-3v3M16 13h1',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 11v5M12 8h.01',
  ext: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  card: 'M3 6h18v12H3zM3 10h18M7 15h4',
  racket: 'M9 15l-5 5M14.5 4a5.5 6.5 40 1 0 .01 0zM9.5 14.5l2-2',
};
export type IconName = keyof typeof I;

export function Icon({ n, size = 20, color = 'currentColor', sw = 1.8, fill = 'none' }: { n: IconName; size?: number; color?: string; sw?: number; fill?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <Path d={I[n]} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill={fill} />
    </Svg>
  );
}
