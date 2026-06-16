type SplitTextTarget = string | Element | Array<string | Element>;

type SplitTextOptions = {
  type?: string;
  linesClass?: string;
};

function resolveTargets(target: SplitTextTarget): Element[] {
  if (Array.isArray(target)) {
    return target.flatMap((item) => resolveTargets(item));
  }

  if (typeof target === "string") {
    return Array.from(document.querySelectorAll(target));
  }

  return [target];
}

export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];

  private readonly originals = new Map<Element, string>();

  constructor(target: SplitTextTarget, private readonly options: SplitTextOptions = {}) {
    resolveTargets(target).forEach((element) => this.splitElement(element));
  }

  revert() {
    this.originals.forEach((text, element) => {
      element.textContent = text;
    });

    this.chars = [];
    this.words = [];
    this.lines = [];
    this.originals.clear();
  }

  private splitElement(element: Element) {
    const originalText = element.textContent ?? "";
    this.originals.set(element, originalText);
    element.textContent = "";

    const wantsChars = (this.options.type ?? "").includes("chars");
    const wantsWords = (this.options.type ?? "").includes("words");
    const fragment = document.createDocumentFragment();

    if (wantsWords) {
      originalText.split(/(\s+)/).forEach((token) => {
        if (!token) {
          return;
        }

        if (/^\s+$/.test(token)) {
          fragment.append(token);
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word";
        wordSpan.textContent = token;
        this.words.push(wordSpan);
        fragment.append(wordSpan, document.createTextNode(" "));
      });
    }

    if (wantsChars) {
      fragment.textContent = "";

      Array.from(originalText).forEach((character) => {
        const charSpan = document.createElement("span");
        charSpan.className = "split-char";
        charSpan.textContent = character;
        this.chars.push(charSpan);
        fragment.append(charSpan);
      });
    }

    if (!wantsChars && !wantsWords) {
      fragment.textContent = originalText;
    }

    element.append(fragment);
  }
}