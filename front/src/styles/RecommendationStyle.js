import styled from 'styled-components';

const Rech1 = styled.h1`
margin:0;
padding:10px;
`
const Rech5 = styled.h5`
margin:0;
padding: 0px;
`
const Rechpro = styled.div`
position: absolute;
right: 0%;
margin-top: 50px;
`
const RechChild = styled.div`
position: absolute;
right: 7%;
margin-top: 50px;
`

const RechHeader = styled.header`
background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
min-height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
font-family: Arial Rounded MT Bold;
color: white;
`
.Rec-header {
}

.Rec-body {
    background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
    min-height: 90vh;
    display: inline-block;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    font-size: calc(10px + 2vmin);
    font-family: Arial Rounded MT Bold;
    color: white;
}

#rcorners1 {
    border-radius: 25px;
    background: #FFFFFF;
    padding: 20px;
    width: 200px;
    height: 150px;
}

.recommendation {
    align-items: center;
    justify-content: center;
    display: inline-grid;
    width: 30.33%;
    margin-top: 100px;
    margin-left: 20px;
    margin-right: 10px;
}