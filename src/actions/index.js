export const SELECTBOOK = 'select_book'
export const DESELECTBOOK = 'deselect_book'

export const selectBook = (book) =>{
     return{
         type : SELECTBOOK,
         payload: book
     
     }
}

export const deselectBook = () =>{
    return {
        type: DESELECTBOOK,
        payload : {}
    }
}