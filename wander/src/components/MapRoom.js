import React from 'react'
import styled from 'styled-components'
import Player from './Player'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    max-width: 50%;
    max-height: 50%;
    top: ${props => `${400 - props.room.y * 90}px`};
    left: ${props => `${props.room.x * 90}px`};
`

const Box = styled.div`
    border: 1px black solid;
    width: 50px;
    height: 50px;
    background-color: ${props => props.room.room.id === props.currentRoomId ? "aquamarine" : "white"};
`

const Top = styled.div`
    display: flex;
    flex-direction: row;
`

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
`

const TopLeft = styled.div`
    width: 50%;
    height: 25px;
    border-right: ${props => props.room.room.n_to ? "1px black solid" : "none"};
`

const TopRight = styled.div`
    width: 50%;
    height: 25px;
    border-left: ${props => props.room.room.n_to ? "1px black solid" : "none"};
`

const BottomLeft = styled.div`
    width: 50%;
    height: 25px;
    border-right: ${props => props.room.room.s_to ? "1px black solid" : "none"};
`

const BottomRight = styled.div`
    width: 50%;
    height: 25px;
    border-left: ${props => props.room.room.s_to ? "1px black solid" : "none"};
`

const Middle = styled.div`
    display: flex;
    flex-direction: row;
`

const MiddleLeft = styled.div`

`

const MidLeftTop = styled.div`
    height: 50%;
    width: 25px;
    border-bottom: ${props => props.room.room.w_to ? "1px black solid" : "none"};
`

const MidLeftBottom = styled.div`
    height: 50%;
    width: 25px;
    border-top: ${props => props.room.room.w_to ? "1px black solid" : "none"};
`

const MiddleRight = styled.div`

`

const MidRightTop = styled.div`
    height: 50%;
    width: 25px;
    border-bottom: ${props => props.room.room.e_to ? "1px black solid" : "none"};
`

const MidRightBottom = styled.div`
    height: 50%;
    width: 25px;
    border-top: ${props => props.room.room.e_to ? "1px black solid" : "none"};
`

const MapRoom = props => {
    return (
        <Container room = {props.room}>
            <Top>
                <TopLeft room = {props.room}/>
                <TopRight room = {props.room}/>
            </Top>
            <Middle>
                <MiddleLeft>
                    <MidLeftTop room = {props.room}/>
                    <MidLeftBottom room = {props.room}/>
                </MiddleLeft>
                <Box currentRoomId = {props.currentRoomId} room = {props.room}>
                    {props.currentRoomId === props.room.room.id ? <Player direction={props.direction}/> : props.room.room.id}
                </Box>
                <MiddleRight>
                    <MidRightTop room = {props.room}/>
                    <MidRightBottom room = {props.room}/>
                </MiddleRight>
            </Middle>
            <Bottom>
                <BottomLeft room = {props.room}/>
                <BottomRight room = {props.room}/>
            </Bottom>
        </Container>    
    )
}

export default MapRoom