//8hr por dia
//160hr por mês
//ler horas trabalhadas no dia
//qtde de dias trabalhadas no mês

//exibir total de horas trabalhadas
//horas faltantes ou excedidas


var qtdeHoras = parseInt(prompt("Informe as horas trabalhadas no dia: "))

var qtdeDias = parseInt(prompt("Informe quantos dias o funcionario trabalhou: ")) 

var qtdeHorasTotal = qtdeHoras * qtdeDias;

if(qtdeHorasTotal == 160) {

    alert("O total de horas que o funcionario trabalhou durante esse mês foi de " + qtdeHorasTotal + " horas. A carga horaria do mês foi alcançada.")
} else if(qtdeHorasTotal > 160) {

    var horasExcedidas = qtdeHorasTotal - 160;
    alert("O total de horas que o funcionario trabalhou durante esse mês foi de " + qtdeHorasTotal + " horas. A carga horaria do mês foi excedida em " + horasExcedidas + " horas.")    

    alert("O funcionario deverá receber pela hora extra.")

} else {

    var horasFaltantes = 160 - qtdeHorasTotal;
    alert("O total de horas que o funcionario trabalhou durante esse mês foi de " + qtdeHorasTotal + " horas. A carga horaria do mês não foi alcançada, o funcionario tem " + horasExcedidas + " horas faltantes.")

    alert("O funcionario deverá compensar suas horas não trabalhadas.")
    
}