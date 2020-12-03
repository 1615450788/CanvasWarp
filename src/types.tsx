export interface IPos {
  left?: number;
  top?: number;
}

export interface IBox {
  width: number;
  height: number;
}

export interface IText extends IPos {
  text: string;
  color: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: 'center' | 'left' | 'right';
  verticalAlign?: 'top' | 'bottom' | 'middle' | 'normal';
  fontVariant?: 'normal' | 'small-caps';
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export interface IImage extends IPos, IBox {
  src: string;
  /**
   * 是否为圆角，目前仅能用于绘制圆形
   */
  borderRadius?: boolean;
  backgroundPositionX?: number;
  backgroundPositionY?: number;
  backgroundSizeWidth?: number;
  backgroundSizeHeight?: number;
}

export interface IRect extends IPos, IBox {
  backgroundColor?: string;
}

export interface IGroup extends IPos, IBox {}
