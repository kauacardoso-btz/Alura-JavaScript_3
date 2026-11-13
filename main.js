let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value.toUpperCase()
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem)

    if (!checarDuplicado) {
        listaDeItens.push({ valor: comprasItem })
    } else {
        alert('Item já existe!')
    }

    console.log(listaDeItens);
}