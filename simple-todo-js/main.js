function add(){
    let input = document.getElementById('input').value
    let list = document.getElementById('list')
    let li = document.createElement('li')
    let text = document.createTextNode(input)
    li.append(text)
    if (input.trim(' ') !== ''){
        list.append(li)
    } else {
        alert('Kiriting')
    }
}