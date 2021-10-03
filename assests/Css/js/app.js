var list = document.querySelector('ul')


var arr = ['Go to Gym','cook oatmeal','eat']

arr.push('completed task')

for(var i=0; i<arr.length; i++) {
  var element = document.createElement('li')
  var texNode = document.createTextNode(arr[i])
  element.appendChild(texNode)
  console.log(texNode)
  list.appendChild(element)
}
