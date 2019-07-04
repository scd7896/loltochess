import React from 'react';

import DetailChampion from './DetailChampion'
import {myStore} from '../index'
import {championSkill} from '../data/ChampionData'

const Champions = ()=>{
    const state = myStore.getState().champions
    const getImage = (ck)=>{
        return ck.map((e ,i)=>{
            return <DetailChampion dData ={championSkill[e.id]} data = {e} key = {i}/>
        })
    }   
    return(
        <div>
            {state ? getImage(state):'데이터 부르는 중 딴데 다녀오셈'}
        </div>
    )
}

export default Champions;