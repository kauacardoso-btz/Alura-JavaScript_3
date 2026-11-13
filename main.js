let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.querySelector('#lista-de-itens')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value.toUpperCase()
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor === comprasItem)

    if (!checarDuplicado) {
        listaDeItens.push({ valor: comprasItem })
        addItemLista(comprasItem)
    } else {
        alert('Item já existe!')
    }

    console.log(listaDeItens);
}


function addItemLista(item) {
    const li = document.createElement('li')
    li.textContent = item

    ulItens.appendChild(li)
}