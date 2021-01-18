// let arr = [5, 4, 6, 1, 6, 8]

// arr.sort((a, b) => {
//   console.log(a, 'A')
//   console.log(b, 'B')
//   return a-b
// })

// console.log(arr, '数组排序res')


// 对象利用sort 方法进行排序

let arrObj = [{
  name: 'reborn',
  age: 18
}, {
  name: 'david',
  age: 16
},
{
  name: 'molly',
  age: 20
},
{
  name: 'tom',
  age: 13
},
{
  name: 'jerry',
  age: 13
}]

arrObj.sort((a,b) => a.age - b.age)

console.log(arrObj, '对象排序')