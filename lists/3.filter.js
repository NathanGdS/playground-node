const {
    getPeople
} = require('./service')

/*

 const item = {
     nome: 'Erick',
     idade: 12,

 }

 const { nome , idade } = item
 console.log(nome, idade)
*/
Array.prototype.myFilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        const {
            results
        } = await getPeople(`a`)

        // const familiaLars = results.filter(function (item) {
        //     // por padrão precisa retornar um booleano
        //     // para informar se deve manter ou remover da lista
        //     // false > remove da lista
        //     // true > mantem
        //     // não encontrou = -1
        //     // encontrou = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })
        const familiaLars = results.myFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error(error.message, error)
    }

}
main()