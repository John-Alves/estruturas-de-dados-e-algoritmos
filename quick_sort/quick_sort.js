function particiona(vetor, menor_indice, maior_indice){
    var j = menor_indice - 1; // todo elemento até o indice j é <= ao pivot
    var pivot = maior_indice;

    for (var i = menor_indice; i <= maior_indice; i++){
        if (vetor[i] <= vetor[pivot]){
            j++; // agora aponta para o 1° elemento > que o pivot

            var aux = vetor[j];
            vetor[j] = vetor[i];
            vetor[i] = aux;
        }
    }

    if ( j > maior_indice ) j = maior_indice; // caso o vetor esteja ordenado

    return { pivot: j, vetor: vetor };
}

function quick_sort(vetor, menor_indice, maior_indice){
    if (menor_indice >= maior_indice) return vetor;

    var resultado = particiona(vetor, menor_indice, maior_indice);
    vetor = resultado.vetor;
    var pivot = resultado.pivot;

    vetor = quick_sort(vetor, menor_indice, pivot - 1);
    vetor = quick_sort(vetor, pivot + 1, maior_indice);

    return vetor;
}

function test(){
    var arr = [0, 4, 5, 12, 1, 6];
    console.log(`Array antes do quick-sort: [${arr}]`);

    var sort_arr = quick_sort(arr, 0, arr.length - 1);
    console.log(`Array após do quick-sort : [${sort_arr}]`);
}

test();