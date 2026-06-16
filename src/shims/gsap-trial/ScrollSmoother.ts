type ScrollSmootherOptions = {
  wrapper: string | Element;
  content: string | Element;
  smooth?: number;
  speed?: number;
  effects?: boolean;
  autoResize?: boolean;
  ignoreMobileResize?: boolean;
};

function resolveElement(target: string | Element): Element | null {
  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return target;
}

export class ScrollSmoother {
  private static instance: ScrollSmoother | null = null;

  private constructor(private readonly options: ScrollSmootherOptions) {}

  static create(options: ScrollSmootherOptions) {
    ScrollSmoother.instance = new ScrollSmoother(options);
    return ScrollSmoother.instance;
  }

  static refresh(_force?: boolean) {
    ScrollSmoother.instance?.refresh();
  }

  paused(_value: boolean) {
    return this;
  }

  scrollTop(_value: number) {
    return this;
  }

  scrollTo(target: string | Element, smooth?: boolean, _position?: string) {
    const element = resolveElement(target);

    element?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });

    return this;
  }

  private refresh() {
    const wrapper = resolveElement(this.options.wrapper);
    const content = resolveElement(this.options.content);

    if (wrapper && content) {
      void wrapper;
      void content;
    }
  }
}