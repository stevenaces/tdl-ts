type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer A1, ...infer A2] 
  ? Equals<A1, U> extends true 
    ? true 
    : Includes<A2, U>
  : false;