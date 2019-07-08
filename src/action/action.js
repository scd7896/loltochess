

export const setting = (data)=>{
    return{
        type:'SEETING',
        data 
    }
}

export const deleteList =(championId)=>{
    return{
        type:'DELETE_LIST',
        championId
    }
}

export const addList =(championId)=>{
    return{
        type:'ADD_LIST',
        championId
    }
}

