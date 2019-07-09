import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../css/SynergySelected.css'
import {championName}from'../data/ChampionData'
import {deleteList,addList} from '../action/action.js'

const SynergySelected = ()=>{
    const selected = useSelector(state=>state.selected)
    const dispatch = useDispatch();   
    
    const test = (e)=>{
         dispatch(deleteList(e.target.name))
    }
    const selectedFromBottom = (e)=>{
        if(selected.indexOf(e.target.name) === -1){
            dispatch(addList(e.target.name))
        }else{
            dispatch(deleteList(e.target.name))
        }
    }
    return(
        <div className = 'SelectedScreen'>
            <div>
                <p>선택한 챔피언 {selected.length}/10</p>
            </div>
            <div className = 'imgContaner'>
                {selected.map((ele,i)=>{
                    return(
                        <img name = {ele} key = {i}onClick = {test} id='selectedImg' src ={`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${ele}.png`} />
                    )
                })}
            </div>
            <div>
                {championName.map((e,i)=>{
                    return <img className ={selected.indexOf(e) !== -1? 'opa100' :'opa20'} src = {`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${e}.png`} 
                       key = {i} name = {e} onClick ={selectedFromBottom}/>
                })}
            </div>
        </div>
    )
}
export default SynergySelected