import { CanvasWrap } from '../src/canvas';

const ctx = document.querySelector('canvas').getContext('2d');
const cw = new CanvasWrap(ctx, { ratio: 1 });
cw.rect({ backgroundColor: 'block', width: 200, height: 200 });
