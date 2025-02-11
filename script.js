
const formatarDigito = (digito) => `0${digito}`.slice(-2); //Concatenação de string

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');

    const qntSegundos = tempo % 60;
    const qntMinutos = tempo % (60 * 60); 
    
    segundos.textContent = formatarDigito(qntSegundos);
    minutos.textContent = formatarDigito(qntMinutos);
}

const contagemRegressiva = (tempo) =>{
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
       
        if(tempo === 0){
            pararContagem(); //Parar setInterval()
        }
        atualizar(tempo);
        
        console.log(tempo);
        tempo--;
        
    }    
    const id = setInterval(contar, 1000);// Função que realiza a função "contar" a cada 1seg. Ela retorna um id
   
}

contagemRegressiva(60);