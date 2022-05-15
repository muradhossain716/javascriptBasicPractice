const map=new Map([
  [1,'apple'] ,
  [2,'bananna'],
  [3,'papaya']
])
map.set('x','not a number').set(true,'win').set(false,'loose')
 map.set(document.querySelector('h1'), 'Heading')
// map.set(document.querySelector('h1'),'Headding')
//document.querySelector('h1'), 'Heading')
console.log(map)
console.log(map.values())
console.log(map.entries())