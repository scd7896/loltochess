import {champions} from '../data/ChampionData'


const returnChamp = async(name) =>{
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/9.12.1/data/ko_KR/champion/${name}.json`)
    const body = res.json()
    return body;
} 
const getChampions=(temp)=>{
    for(let i = 0 ; i<champions.length; i++){
        returnChamp(champions[i].id).then(res=>{
            temp.push(res.data[champions[i].id])

        })
        
    }
    
}
const setInit = ()=>{
    const initState = {
        champions : [],
        mode : 'all',
        serchName : ''
    }
    getChampions(initState.champions)
    return initState
}
/* championStore에서 state를 초기화 했습니다. 
 여기서 넘어가는 결과 물이 App.js에서 사용되는 것처럼 보여지나 접근 방법을 모르겠어서
써야하는 부분에서 전혀 못쓰고 헤매고 있습니다.*/
const championStore =(state = setInit(), action) =>{
    let newState = {};

    switch(action.type){
        case 'SERCH_ALL':
            newState = Object.assign({},state,{
                mode:'all',
                serchName:''
            })
            return newState;
        case 'SERCH_NAME':
            newState = Object.assign({}, state,{
                mode:'SERCH',
                serchName : action.name
            })
            return newState;
        case 'SEETING' :
            newState = Object.assign({},state,{
                champions : action.data
            })
            console.log(newState.champions)
            return newState;
        default :
            return state;    
    }
}

export default championStore