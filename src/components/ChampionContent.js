import React from 'react';
import {useState} from 'react';
import '../css/ChampionContent.css'
import {championSkill} from '../data/ChampionData'
import {myStore} from '../index'

import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from'@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

 const useStyles = makeStyles({
    root :{
        alignItems : 'center',
        textAlign: 'center'
    }
 })
 const ChampionContent =(props)=>{
    const championStatus = myStore.getState().championStatus
    const [status, setStatus] = useState()
    championStatus.then((value)=>{
        setStatus(value[props.data.id])
    })
    console.log(status ? status : '');
    const classes = useStyles();
    const assign = props.data.id + championSkill[props.data.id].skill
    
    const skillUrl = 'https://ddragon.leagueoflegends.com/cdn/9.12.1/img/spell/';
    const png = '.png'
    const imgUrl =`https://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${props.data.image.full}`
    let spellImg = '';
    const styles = {
        float: 'right'
    }
    switch(props.data.id){
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
        <Dialog fullScreen open = {props.open} className={classes.root}>
            <DialogTitle>
                <h2>{props.data.name}</h2>
            </DialogTitle>
            <DialogContent>
                <div className ='left'>
                    <p><img src = {imgUrl} /></p>
                    <p>스킬:<img src = {spellImg}/>
                        팅팅탕
                    </p>
                </div>
                <div className ='right'>
                    <Table style = {styles}>
                        <TableBody>
                            <TableRow>
                                <TableCell>공격력</TableCell>
                                <TableCell>공격속도</TableCell>
                                <TableCell>DPS</TableCell>
                                <TableCell>공격사거리</TableCell>
                                <TableCell>체력</TableCell>
                                <TableCell>방어력</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{status ? status.stats.offense.damage:''}</TableCell>
                                <TableCell>{status ? status.stats.offense.attackSpeed:''}</TableCell>
                                <TableCell>{status ? status.stats.offense.dps:''}</TableCell>
                                <TableCell>{status ? status.stats.offense.range:''}</TableCell>
                                <TableCell>{status ? status.stats.defense.health:''}</TableCell>
                                <TableCell>{status ? status.stats.defense.armor:''}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>마법저항력</TableCell>
                                <TableCell>직업</TableCell>
                                <TableCell>종족</TableCell>
                                <TableCell>가격</TableCell>
                                <TableCell>사용마나</TableCell>
                                <TableCell>시작마나</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{status ? status.stats.defense.magicResist:''}</TableCell>
                                <TableCell>{status ? status.class[0]:''}</TableCell>
                                <TableCell>{status ? status.origin[0]:''}</TableCell>
                                <TableCell>{status ? status.cost:''}</TableCell>
                                <TableCell>{status ? status.ability.manaCost:''}</TableCell>
                                <TableCell>{status ? status.ability.manaStart:''}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>    
            </DialogContent>
            <DialogActions>
                <Button variant = 'contained' onClick = {props.onCreate} color = 'primary'>닫기</Button>
            </DialogActions>
        </Dialog>            
    )
}

export default ChampionContent;