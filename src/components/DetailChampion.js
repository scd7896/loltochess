import React from'react'
import {useState} from 'react';
import ChampionContent from './ChampionContent'


import '../css/DetailChampion.css'
const DetailChampion=({data})=>{
    const imgUrl =`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${data.image.full}`
    const [open, setOpen] =useState(false);
    const clickHandle = ()=>{
        setOpen(!open)
    }
    return(
        <div className = 'oneBox'>
            <img onClick = {clickHandle} src ={imgUrl} alt ='이미지 불러오기 실패'/>
            <p>이름 :{data.name}</p>
            <ChampionContent open = {open} data ={data} onCreate ={clickHandle}/>
        </div>
    )
}

export default DetailChampion


// axios.get(`${url}/data/ko_KR/champion.json`).then(champlist_kor => {
//     for (const idx in champlist_kor.data.data) {
//       const champData = champlist_kor.data.data[idx]
//       const champId = champData.id
//       axios.get(`${url}/data/ko_KR/champion/${champId}.json`).then(champ_res => {
//         axios.get(`${url}/data/en_US/champion/${champId}.json`).then(champ_res_eng => {
//           const spellImg = []
//           const spellName = []
//           const spellName_eng = []
//           for (let i = 0; i < 4; i++) {
//             spellImg[i] = `${url}/img/spell/${champ_res.data.data[champId].spells[i].image.full}`
//             spellName[i] = champ_res.data.data[champId].spells[i].name
//             spellName_eng[i] = champ_res_eng.data.data[champId].spells[i].name
//           }
//           arr.push({
//             id: champId,
//             champImg: `${url}/img/champion/${champData.image.full}`,
//             name: champData.name,
//             name_eng: champ_res_eng.data.data[champId].name,
//             pImg: `${url}/img/passive/${champ_res.data.data[champId].passive.image.full}`,
//             pName: champ_res.data.data[champId].passive.name,
//             pName_eng: champ_res_eng.data.data[champId].passive.name,
//             spellImg: spellImg,
//             spellName: spellName,
//             spellName_eng: spellName_eng
//           })
//         })
//       })
//     }
//   })