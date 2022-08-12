type TupleToObject<T extends readonly any[]> = {
  [P in keyof T]: P
}
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type t = TupleToObject<typeof tuple>