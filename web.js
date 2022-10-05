
var div, container = document.getElementById('container')

for(var i=0;i<5;i++){
    div = document.createElement('div')
    div.onclick = function(){
        alert('이것은 박스 #' + i + '입니다.')
    }
    container.appendChild(div)
}