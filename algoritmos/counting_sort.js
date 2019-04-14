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

        /* DEMONSTRAÇÃO DA COMPLEXIDADE Θ(n + k)
         *   A soma dos elementos de vetor_aux1 sempre será igual a vetor.length:
         * vetor.length = n = n0 + n1 + n2 + n3 + ... + nk
         * Onde n0 é a qtde de vezes que o elem 0 se repete e assim sucessivamente.
         * Temos também que vetor_aux1 = [n0, n1, n2, ..., nk].
         * A complexidade de cada iteração é:
         *  P/ i = 0 => 1 + n0 
         *  P/ i = 1 => 1 + n1
         *  P/ i = k => 1 + nk
         * Total:  (1 + n0) + (1 + n1) + ... + (1 + nk)
         *       = (1 + 1 + ... + 1) + (n0 + n1 + ... + nk)
         *       = k + n
         * Portanto: Θ(n + k)
         */
        var indice = 0; 
        for (var i = 0; i < k; i++) { 
            while (vetor_aux1[i] != 0) {
                vetor[indice] = i;
                indice++;
                vetor_aux1[i]--;
            }
        }

        return vetor;
    }
}

// function test(){
//     var arr = [1, 4, 1, 2, 7, 5, 2];
//     console.log(`array: [${arr}]`);

//     var count = new CountSort();
//     var sort_arr = count.sort(arr, 9);
//     console.log(`array_ordenado: [${sort_arr}]`);
// }

// test();

exports.CountSort = new CountSort();