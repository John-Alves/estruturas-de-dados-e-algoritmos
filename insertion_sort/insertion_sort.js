function insertion_sort_normal(vetor, n){
    for (var i = 1; i < n; i++) {
        var j = i - 1;
        var valor = vetor[i]

        while (valor < vetor[j] && j >= 0){
            var aux = vetor[j];
            vetor[j] = vetor[j + 1];
            vetor[j + 1] = aux;

            j -= 1;
        }
    }
    return vetor;
}

// Complexidade de O(n²)
function insertion_sort(vetor, n, binary = false){
    if (binary) return -1 // Não implementado
    else return insertion_sort_normal(vetor, n);
}

function test(){
    var arr = [0, 4, 5, 12, 1, 6];
    console.log(`Array antes do insertion-sort: [${arr}]`);

    var sort_arr = insertion_sort(arr, arr.length);
    console.log(`Array após do insertion-sort : [${sort_arr}]`);
}

test();