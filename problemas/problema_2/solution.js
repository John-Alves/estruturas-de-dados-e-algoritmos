var algorithms = require('../../algoritmos/algoritmos');

function number_of_repetitions(vetor){
    let vetor_ordenado = algorithms.Algorithm.heap_sort(vetor); // Θ(n logn)

    let vetores_auxiliares = transform_to_unique_array(vetor_ordenado); // Θ(n)

    let vetor_ocorrencias = [];
    for (var i = 0; i < vetor.length; i++) { // Θ(n)
        vetor_ocorrencias[i] = get_repetitions(vetor[i], vetores_auxiliares);
    }

    return vetor_ocorrencias;
}

function transform_to_unique_array(vetor_ordenado){
    var vetor_sem_repeticao = [];
    var qtde_ocorrencias = [];
    var j = 0;
    var qtde = 1;
    for (var i = 0; i < vetor_ordenado.length; i++) {
        if ( (i + 1) < vetor_ordenado.length && vetor_ordenado[i] == vetor_ordenado[i + 1]) {
            qtde++;
        }
        else {
            vetor_sem_repeticao[j] = vetor_ordenado[i];
            qtde_ocorrencias[j] = qtde;
            qtde = 1;
            j++;
        }
    }

    return {
        vetor_sem_repeticao: vetor_sem_repeticao, 
        qtde_ocorrencias: qtde_ocorrencias
    };

}

function get_repetitions(valor, vetores_auxiliares){
    var indice = algorithms.Algorithm.binary_search(valor, vetores_auxiliares.vetor_sem_repeticao);
    if (indice != -1) return vetores_auxiliares.qtde_ocorrencias[indice];
    else return 1;
}

function test(){
    let arr = [2, 4, 2, 7, 4, 12];
    console.log(`Vetor: [${arr}]`);

    let r = number_of_repetitions(arr);
    console.log(`Repet: [${r}]`);
}

test();