// union 联合类型

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]; 
}

// 类比学习法

function myPick(todo, keys){
  const obj = {};
  
  keys.forEach(key => {
    if(key in todo){
      obj[key] = todo[key];
    }
  })

  return obj;
}

// 1. 访问一个对象
// 2. 遍历foreach       mapped
// 3. todo[key] 取值    indexed access
// 4. 看看在不在 todo[key] 中 keyof, extends