
const formatarDigito = (digito) => `0${digito}`.slice(-2); //Concatenação de string

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qntSegundos = tempo % 60;
    const qntMinutos = Math.floor((tempo % (60 * 60))/60); 
    const qntHoras = Math.floor((tempo % (60*60*24))/ (60*60));
    const qntDias = Math.floor (tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qntSegundos);
    minutos.textContent = formatarDigito(qntMinutos);
    horas.textContent = formatarDigito(qntHoras);
    dias.textContent = formatarDigito(qntDias);
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
   // O JavaScript conta o tempo em milissegundos
}

const tempoRestante = () => {
    // 1 de janeiro de 1970 - data de referência do JS
    const dataEvento = new Date ('2025-02-15 13:00:00');
    const hoje = Date.now();
    return (Math.floor((dataEvento - hoje)/1000));

}

contagemRegressiva(tempoRestante());