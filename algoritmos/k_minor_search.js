function KMinorSearch(){
    // Baseado no Quick-Sort
    this.search = function(k, vetor){
        if (k - 1 >= vetor.length) {
            console.log(`Erro. O vetor possui apenas ${vetor.length} elementos!`);
            return -1;
        }
        return this.k_minor_search(vetor, k - 1, 0, vetor.length - 1);
    } 

    this.k_minor_search = function(vetor, k, menor_indice, maior_indice) {
        var result = this.particiona(vetor, menor_indice, maior_indice);
        if (result.pivot == k) return result.vetor[result.pivot];
        else if (result.pivot > k) {
            return this.k_minor_search(vetor, k, menor_indice, result.pivot - 1);
        }
        else {// result.pivot < k
            return this.k_minor_search(vetor, k, result.pivot + 1, maior_indice);
        }
    }

    this.particiona = function(vetor, menor_indice, maior_indice){
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

        if ( j > maior_indice ) j = maior_indice;

        return { pivot: j, vetor: vetor };
    }
}
// var k_minor = new KMinorSearch();
// var value = k_minor.search(1, [1, 4, 6, 7, 2, 8, 5]);
// console.log(value);

exports.KMinorSearch = new KMinorSearch();