import produtos from "./produtos"

{/* import produtos from "./produtos" RESPONSAVEL POR TRAZER TODOS OS DADOS DE PRODUTOS.JS */}

function ListaProdutos(props) {

    function exibirLista(){
                        {/* .MAP = RESPONSAVEL POR "MOSTRAR TUDO QUE TENHA DENTRO DO" */}
        return produtos.map(p=>{
          {/*  key={p.id}> = IRA SETAR POR ID OS DADOS DE PRODUTOS */}
            return (                
                <h3 key={p.id}>
                   cod: [ {p.id} ] iten : [ {p.nome} ] tem preço R$  [ {p.preco} ] 
                </h3>
            )
        })

    }

    return (
      <>
        <h2>Lista de produtos</h2>
        {exibirLista()}

      </>
    )
}

export default ListaProdutos