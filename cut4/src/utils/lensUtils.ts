// src/utils/lensUtils.ts

export type LensAndPath<Main, Child> = {
    get: (main: Main) => Child | undefined;
    set: (main: Main, child: Child) => Main;
    path: string[];
  };
  
  export function identityLens<T>(): LensAndPath<T, T> {
    return {
      get: (main: T) => main,
      set: (main: T, child: T) => child,
      path: [],
    };
  }
  
  export function child<Main, T, K extends keyof T>(
    lens: LensAndPath<Main, T>,
    key: K
  ): LensAndPath<Main, T[K]> {
    return {
      get: (main: Main) => {
        const parent = lens.get(main);
        return parent ? parent[key] : undefined;
      },
      set: (main: Main, childValue: T[K]) => {
        const parent = lens.get(main);
        if (!parent) return main;
        const updatedParent = { ...parent, [key]: childValue };
        return lens.set(main, updatedParent as T);
      },
      path: [...lens.path, key.toString()],
    };
  }
  
  export class LensBuilder<Main, Child> {
    private _lens: LensAndPath<Main, Child>;
  
    constructor(lens: LensAndPath<Main, Child>) {
      this._lens = lens;
    }
  
    focusOn<K extends keyof Child>(key: K): LensBuilder<Main, Child[K]> {
      return new LensBuilder(child(this._lens, key));
    }
  
    build() {
      return this._lens;
    }
  }
  
  export function lensBuilder<T>() {
    return new LensBuilder(identityLens<T>());
  }
  