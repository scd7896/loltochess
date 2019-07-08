import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import '../css/SynergySelected.css'
import {deleteList} from '../action/action.js'

const SynergySelected = ()=>{
    const selected = useSelector(state=>state.selected)
    const dispatch = useDispatch();   
    const test = (e)=>{
        dispatch(deleteList(e.target.name))
    }
    console.log(selected);
    return(
        <div className = 'SelectedScreen'>
            <div>
                <p>선택한 챔피언 0/0</p>
            </div>
            <div className = 'imgContaner'>
                {selected.map((ele,i)=>{
                    return(
                        <img name = {ele} key = {i}onClick = {test} id='selectedImg' src ={`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${ele}.png`} />
                    )
                })}
            </div>   
        </div>
    )

}
export default SynergySelected