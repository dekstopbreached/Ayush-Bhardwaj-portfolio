declare module "gsap-trial/ScrollSmoother" {
  type ScrollSmootherOptions = {
    wrapper: string | Element;
    content: string | Element;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
  };

  export class ScrollSmoother {
    static create(options: ScrollSmootherOptions): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(value: boolean): ScrollSmoother;
    scrollTop(value: number): ScrollSmoother;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): ScrollSmoother;
  }
}

declare module "gsap-trial/SplitText" {
  type SplitTextTarget = string | Element | Array<string | Element>;

  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    constructor(target: SplitTextTarget, options?: { type?: string; linesClass?: string });
    revert(): void;
  }
}