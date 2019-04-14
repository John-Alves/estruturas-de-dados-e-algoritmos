function QuickSort(){
    this.sort = function(vetor){
        return this.quick_sort(vetor, 0, vetor.length - 1);
    }  

    this.quick_sort = function(vetor, menor_indice, maior_indice){
        if (menor_indice >= maior_indice) return vetor;
    
        var resultado = this.particiona(vetor, menor_indice, maior_indice);
        vetor = resultado.vetor;
        var pivot = resultado.pivot;
    
        vetor = this.quick_sort(vetor, menor_indice, pivot - 1);
        vetor = this.quick_sort(vetor, pivot + 1, maior_indice);
    
        return vetor;
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

        if ( j > maior_indice ) j = maior_indice; // caso o vetor esteja ordenado

        return { pivot: j, vetor: vetor };
    }
}

exports.QuickSort = new QuickSort();