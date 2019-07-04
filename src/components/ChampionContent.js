import React from 'react';

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from'@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'


 const ChampionContent =(props)=>{
    const assign = props.dData.id + props.dData.skill
    const skillUrl = 'https://ddragon.leagueoflegends.com/cdn/9.12.1/img/spell/';
    const png = '.png'
    const imgUrl =`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${props.data.image.full}`
    let spellImg = '';
    switch(props.dData.id){
        case 'Graves':
            spellImg = 'http://vignette1.wikia.nocookie.net/leagueoflegends/images/c/c2/Buckshot.png'
            break;
        case 'Nidalee':
            spellImg = skillUrl+'AspectOfTheCougar'+png;
            break;
        case 'Blitzcrank':
            spellImg = skillUrl+'RocketGrab'+png;
            break;
        case 'Anivia':
            spellImg = skillUrl+'GlacialStorm'+png;
            break;
        case 'Ashe':
            spellImg = skillUrl+'EnchantedCrystalArrow'+png;
            break;
        case 'Chogath':
            spellImg = skillUrl+'Rupture'+png;
            break;
        case 'Kassadin':
            spellImg = skillUrl+'NetherBlade'+png;
            break;
        default :
            spellImg = skillUrl+assign+png    
            break;
    }
    return(
        <Dialog open = {props.open}>
            <DialogTitle>
                <h2>{props.data.name}</h2>
            </DialogTitle>
            <DialogContent>
                <p><img src = {imgUrl} /></p>
                <img src = {spellImg}/>
            </DialogContent>
            <DialogActions>
                <Button variant = 'contained' onClick = {props.onCreate} color = 'primary'>닫기</Button>
            </DialogActions>
        </Dialog>            
    )
}

export default ChampionContent;