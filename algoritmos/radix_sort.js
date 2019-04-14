function RadixSort(){
    this.sort = function(vetor){

        var n = vetor.length;
        var maior_elemento = this.get_highest_element(vetor, n);

        return this.radix_sort(vetor, n, maior_elemento);
    }  

    this.get_highest_element = function(vetor, n){
        var maior_elemento = vetor[0];
        for (var i = 0; i < n; i++){
            if (vetor[i] > maior_elemento) maior_elemento = vetor[i];
        }
        return maior_elemento;
    }

    this.radix_sort = function(vetor, n, maior_elemento){
        for (var exp = 1; parseInt(maior_elemento / exp) > 0; exp *= 10){
            // Constroi vetor contendo apenas o digito atual
            var vetor_digito = new Array(n);
            for (var i = 0; i < n; i++) { vetor_digito[i] = this.get_digit(vetor[i], exp); }

            // Ordena o vetor baseado no vetor de digitos
            vetor = this.sort_array_by_digit(vetor, vetor_digito, n);
        }
        return vetor;
    }

    this.get_digit = function(numero, exp){
        return parseInt((numero / exp) % 10);
    }

    // Baseado no Couting-Sort
    this.sort_array_by_digit = function(vetor, vetor_digito, n) {
        var vetor_ordenado = [];

        var k = 10; // Só existirá valores de 0 a 9.
        var vetor_aux1 = [];
        for (var i = 0; i < k; i++) vetor_aux1[i] = 0; 

        for (var i = 0; i < n; i++) {
            var indice = vetor_digito[i];
            vetor_aux1[indice]++;
        }
        
        for (var i = 1; i < k; i++) { vetor_aux1[i] += vetor_aux1[i - 1]; }

        /* Segue a mesma ideia do counting-sort com uso de mais de um vetor auxiliar,
         * porem ao invés de ordenar o vetor dos digitos, ordenará o vetor que contém 
         * o valor 'completo' (usando o mesmo indice). */
        for (var i = n - 1; i >= 0; i--) {
            var valor = vetor_digito[i];
            var indice = vetor_aux1[valor];

            vetor_ordenado[indice - 1] = vetor[i];

            vetor_aux1[valor]--;
        }

        return vetor_ordenado;
    }
}

// var arr = [132, 145, 50, 500, 377];
// console.log(`array          : [${arr}]`);
// var radix = new RadixSort();
// var sort_arr = radix.sort(arr);
// console.log(`array_ordenado : [${sort_arr}]`);

exports.RadixSort = new RadixSort();