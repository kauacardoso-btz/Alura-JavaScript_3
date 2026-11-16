let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const ulItens = document.getElementById('lista-de-itens')
const ulItensComprados = document.getElementById('itens-comprados')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    salvarItem()
    mostrarItem()
    itensInput.focus()
})

function salvarItem() {
    const comprasItem = itensInput.value.toUpperCase()
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor === comprasItem)

    if (!checarDuplicado) {
        listaDeItens.push({
            valor: comprasItem,
            checar: false
        })
    } else {
        alert('Item já existe!')
    }

    itensInput.value = ''
}

function mostrarItem() {
    ulItens.innerHTML = ``
    ulItensComprados.innerHTML = ``

    listaDeItens.forEach((elemento, index) => {

        if (elemento.checar) {
            ulItensComprados.innerHTML +=
                `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
                `
        } else {
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
        }
    })


    // Atribuindo listener de evento para modificar estado do item 
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')

    inputsCheck.forEach(i => {
        i.addEventListener('click', (event) => {
            const valorElemento = event.target.parentElement.parentElement.getAttribute('data-value')

            listaDeItens[valorElemento].checar = event.target.checked

            // mostrarItemComprados()
            mostrarItem()
        })
    })


    // Atribuindo listener de evento para deletar aos botões 
    const deletarObjetos = document.querySelectorAll('.deletar')

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (event) => {
            const valorElemento = event.target.parentElement.parentElement.getAttribute('data-value')

            listaDeItens.splice(valorElemento, 1)

            // mostrarItemComprados()
            mostrarItem()
        })
    })

}

// function mostrarItemComprados() {
//     ulItensComprados.innerHTML = ``
//     listaDeItens.forEach((elemento, index) => {
//         ulItensComprados.innerHTML +=
//         `
//         <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
//             <div>
//                 <input type="checkbox" checked class="is-clickable" />  
//                 <span class="itens-comprados is-size-5">${elemento.valor}</span>
//             </div>
//             <div>
//                 <i class="fa-solid fa-trash is-clickable deletar"></i>
//             </div>
//         </li>
//         `
//     })


//     mostrarItem()
// }