
export const paginationLogic = (currentPage, pokemonsByName) => {
    //Cantidad de pokemon por pagina
    const POKEMONS_PER_PAGE = 20

    
    //Pokemons que se van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1 ) * POKEMONS_PER_PAGE
    const sliceEnd = sliceStart + POKEMONS_PER_PAGE
    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)

    //Ultima pagina
    const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

    //Bloque actual
     const PAGES_PER_BLOCK = 5
     const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)
    
    //paginas que se van a mostrar en el bloque actual
    const pagesInBlock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK
    for(let i = minPage; i <= maxPage; i++){
      if(i <= lastPage){
        pagesInBlock.push(i)
      }
    }

    return {pokemonInPage, lastPage, pagesInBlock}
  }