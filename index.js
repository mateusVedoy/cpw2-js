
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
 function invert(people){
    // todos os nomes digitados, por�m de maneira invertida (do �ltimo para o primeiro).
    // Uma dica, voc� pode utilizar a fun��o prompt para permitir que o usu�rio digite os
    // nomes dos usu�rios.
    let peopleArr = [];
    people.forEach(person => {
        peopleArr.push(person);
    });
    peopleArr.reverse();
    return peopleArr;
}

/**
 * Essa fun��o recebe um array de notas e retorna uma m�dia
 *
 * @param {*} grades : Um array de notas
 * @returns Uma m�dia a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Fa�a um programa que leia o nome e as tr�s notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua m�dia e se ele foi aprovado, sabendo-se que a m�dia para aprova��o � igual
    // ou superior a 7.
    let avg = grades.reduce((total, value) => {
        return total + value;
    });
    return avg /= grades.length;
}

/**
 * Fun��o recebe uma m�dia e informa textualmente se um estudante est� aprovado ou n�o
 *
 * @param {*} mean : Um n�mero que representa uma m�dia
 * @returns Uma string dizendo se um estudante est� aprovado ou n�o
 */
function isApproved(mean){

    // TODO
    // 2.1) Fa�a um programa que leia o nome e as tr�s notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua m�dia e se ele foi aprovado, sabendo-se que a m�dia para aprova��o � igual
    // ou superior a 7.

    if(mean >= 7){
        return "aprovado";
    }else{
        return "reprovado";
    }
}

//CONTINUAR DAQUI
/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descri��o da data informada
 */
function wide(strDate){

    // TODO
    // 3) Fa�a um script que receba uma data no formato �dd/mm/aaaa� e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de mar�o de 2022". Dica: use a fun��o
    // �split� de uma string que quebra a string em peda�os dado um separador como argumento da fun��o.
    // Nesse caso, o separador � a barra (/) da data.

    let dateArr = strDate.split("/");
    if(dateArr[1] < 10){dateArr[1] = dateArr[1].replace("0","")}
    let month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return `${dateArr[0]} de ${month[dateArr[1] -1]} de ${dateArr[2]}`;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}