let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.getElementById('lista-de-itens')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    salvarItem()
    mostrarItem()
})

function salvarItem() {
    const comprasItem = itensInput.value.toUpperCase()
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor === comprasItem)

    if (!checarDuplicado) {
        listaDeItens.push({ valor: comprasItem })
    } else {
        alert('Item já existe!')
    }
}

function mostrarItem() {
    ulItens.innerHTML = ``
    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += 
        `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${elemento.valor}"></input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
        `
    })
}