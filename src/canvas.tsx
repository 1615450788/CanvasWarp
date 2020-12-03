import { IGroup, IImage, IRect, IText } from './types';

export class CanvasWrap {
  private ctx: any;
  private ratio: number;
  private parents: IGroup[];
  constructor(ctx, { ratio = 1 }) {
    this.ctx = ctx;
    this.ratio = ratio;
  }

  ratioFormat(num) {
    return this.ratio * num;
  }

  text({
    text = '',
    color = '#fff',
    fontFamily = 'Arial',
    fontVariant = 'normal',
    fontWeight = 'normal',
    fontStyle = 'normal',
    verticalAlign = 'normal',
    textAlign = 'left',
    fontSize = 12,
    left = 0,
    top = 0,
  }: IText) {
    this.ctx.save();
    this.ctx.font = `${fontVariant} ${fontWeight} ${fontStyle} ${this.ratioFormat(
      fontSize
    )}px ${fontFamily}`;
    this.ctx.setFillStyle(color);
    this.ctx.setTextAlign(textAlign);
    this.ctx.fillText(text, this.ratioFormat(left), this.ratioFormat(top));
    this.ctx.setTextBaseline(verticalAlign);
    this.ctx.restore();
  }
  image({
    width = 0,
    height = 0,
    src = '',
    borderRadius = false,
    left = 0,
    top = 0,
    backgroundPositionX = 0,
    backgroundPositionY = 0,
    backgroundSizeHeight = 0,
    backgroundSizeWidth = 0,
  }: IImage) {
    if (borderRadius) {
      this.ctx.save();
      this.ctx.beginPath(); //开始绘制
      this.ctx.arc(
        width / 2 + left,
        height / 2 + top,
        width / 2,
        0,
        Math.PI * 2,
        false
      );
      this.ctx.clip();
    }
    if (
      backgroundSizeHeight ||
      backgroundSizeWidth ||
      backgroundPositionY ||
      backgroundPositionX
    ) {
      this.ctx.drawImage(
        src,
        backgroundPositionX,
        backgroundPositionY,
        backgroundSizeWidth,
        backgroundSizeHeight,
        this.ratioFormat(left),
        this.ratioFormat(top),
        this.ratioFormat(width),
        this.ratioFormat(height)
      );
    } else {
      this.ctx.drawImage(
        src,
        this.ratioFormat(left),
        this.ratioFormat(top),
        this.ratioFormat(width),
        this.ratioFormat(height)
      );
    }

    this.ctx.restore();
  }
  rect({
    width = 0,
    height = 0,
    left = 0,
    top = 0,
    backgroundColor = '#fff',
  }: IRect) {
    this.ctx.save();
    this.ctx.setFillStyle(backgroundColor);
    this.ctx.fillRect(
      this.ratioFormat(left),
      this.ratioFormat(top),
      this.ratioFormat(width),
      this.ratioFormat(height)
    );
    this.ctx.restore();
  }

  group({ width = 0, height = 0, left = 0, top = 0 }: IGroup) {
    this.parents.push({ width, height, left, top });
  }

  groupEnd() {
    this.parents.pop();
  }
}
