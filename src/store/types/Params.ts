export interface Params {
  size: {
    width: number;
    height: number;
  };
  drag: {
    horizontal: number;
    vertical: number;
  };

  darkMode: boolean;
}

export interface ParamsState {
  params: Params;
}
