// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never :T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer R, ...any[]] ? R : never

// 1. extends 类型条件判断
// 2. tuple 'length' 熟悉
// 3. extends union 判断规则
// 4. infer 推断