function CountSort(){
    this.sort = function(vetor, k){
        return this.counting_sort(vetor, k);
    }  

    this.counting_sort = function(vetor, k){
        var vetor_aux1 = [];
        for (var i = 0; i < k; i++) vetor_aux1[i] = 0;

        for (var i = 0; i < vetor.length; i++) {
            var indice = vetor[i];
            vetor_aux1[indice]++;
        }

        for (var i = 0; i < k; i++) {
            if (i - 1 >= 0) vetor_aux1[i] += vetor_aux1[i - 1];
        }

        var vetor_ordenado = [];
        for (var i = 0; i < vetor.length; i++) vetor_ordenado[i] = 0;

        for (var i = 0; i < vetor.length; i++) {
            var valor = vetor[i];
            var indice_2 = vetor_aux1[valor];

            vetor_ordenado[indice_2 - 1] = valor;
            vetor_aux1[valor]--;
        }

        return vetor_ordenado;
    }
}

function test(){
    var arr = [0, 4, 5, 1, 2, 7, 5, 2, 8];
    console.log(`array: [${arr}]`);

    var count = new CountSort();
    var sort_arr = count.sort(arr, 9);
    console.log(`array_ordenado: [${sort_arr}]`);
}

test();

exports.CountSort = new CountSort();