function RadixSort(){
    this.sort = function(vetor, total_digitos){
        return this.radix_sort(vetor, vetor.length, total_digitos);
    }  

    this.radix_sort = function(vetor, n, total_digitos){
        var digito_atual = total_digitos;
        while (digito_atual > 0) {
            var vetor_digito = [];
            for (var i = 0; i < n; i++) {
                vetor_digito[i] = this.get_digit(vetor[i], digito_atual, total_digitos);
            }

            vetor = this.sort_array_by_digit(vetor, vetor_digito, n);
            digito_atual--;
        }

        return vetor;
    }

    this.get_digit = function(numero, digito_atual, d){
        var resto = numero % 10;
        var quociente = parseInt(numero/10);

        var i = 0;
        while (digito_atual != d - i){
            resto = quociente % 10;
            quociente = parseInt(quociente/10);
            i++;
        }

        return resto;
    }

    // Baseado no Couting-Sort
    this.sort_array_by_digit = function(vetor, vetor_digito, n) {
        var vetor_ordenado = [];
        var vetor_aux1 = [];
        var k = 10; // Só existirá valores de 0 a 9.

        for (var i = 0; i < k; i++) vetor_aux1[i] = 0;

        for (var i = 0; i < n; i++) {
            var indice = vetor_digito[i];
            vetor_aux1[indice]++;
        }
        for (var i = 0; i < k; i++) {
            if (i - 1 >= 0) vetor_aux1[i] += vetor_aux1[i - 1];
        }

        /* Segue a mesma ideia do counting-sort com uso de mais de um vetor auxiliar,
         * porem ao invés de ordenar o vetor dos digitos, ordenará o vetor que contém 
         * o valor 'completo' (usando o mesmo indice). */
        for (var i = 0; i < n; i++) {
            var valor = vetor_digito[i];
            var indice_2 = vetor_aux1[valor];

            vetor_ordenado[indice_2 - 1] = vetor[i];

            vetor_aux1[valor]--;
        }

        return vetor_ordenado;
    }
}

var arr = [132, 145, 500, 377];
console.log(`array          : [${arr}]`);
var radix = new RadixSort();
var sort_arr = radix.sort(arr, 3);
console.log(`array_ordenado : [${sort_arr}]`);

exports.RadixSort = new RadixSort();