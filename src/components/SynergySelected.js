import React from 'react'

import {myStore} from '../index'

const SynergySelected = ()=>{
    const selected = myStore.getState().selected;
    return(
        <div className = 'SelectedScreen'>
            {selected.map((ele)=>{
                return(
                    <img src ={`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${ele}.png`} />
                )
            })}
        </div>
    )
}
export default SynergySelected