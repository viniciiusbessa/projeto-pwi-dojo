import styled from 'styled-components'

const ContainerHome = styled.div`

display: flex;
flex-direction: column;



.cabecalho{
    background-color: #6C698D;
    margin-bottom: 80px;
    padding: 20px;
    text-align: center;
}

.conteudo1{
    margin-left: 100px;
}

.titulo-cabe{
    color: #f5f5f5;
}

.titulo-item{
    font-size: 35px;
    color: black;
    font-weight: bolder;
    margin-bottom: 20px;
}

.tit-ativ{
    margin-bottom: 5px;
    font-size: 20px;
}

.botao-add  {
    background-color: #6C698D;
    border: none;
    color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
}

.Input1{
    margin-bottom: 10px;
}

.Input1 input{
    height: 15px;
}

.options{
    margin-bottom: 10px;
}


 td button {
     border-radius: 50%;
     background-color: #565656;
     border: none;
     width: 31px;
     height: 31px;
 }
 
 .box-image {
     margin-right: 2em;
 }

 thead {
     background-color: #6C698D;
    
 }
table {
    margin-top: 2em;
    align-items: center;
}
 tbody {
     background-color: #F5F5F5;
 }

td {
    text-align: left;
    height: 35px;
    width: 350px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

.table-user {
    border-collapse: collapse;
}

th {
    height: 25px;
    width: 350px;
    text-align: left;
    padding: 1em;
    color: #ffff;
    font-weight: 800;
}
`

export default ContainerHome