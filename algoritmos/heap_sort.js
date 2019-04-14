function HeapSort(){
    this.sort = function(vetor){
        return this.heap_sort(vetor, vetor.length - 1);
    }  

    this.heap_sort = function(vetor, maior_indice){
        if (maior_indice <= 0) return vetor;
    
        var nivel = parseInt((maior_indice / 2)); // penultimo nível
        for (var i = nivel; i >= 0; i--) {
            vetor = this.build_max_heap(vetor, maior_indice, i);
        }
    
        var aux = vetor[maior_indice];
        vetor[maior_indice] = vetor[0];
        vetor[0] = aux;
    
        return this.heap_sort(vetor, maior_indice - 1);
    }

    this.build_max_heap = function(vetor, maior_indice, nivel){
        var filho_esq_ind = 2 * nivel + 1;
        var filho_dir_ind = 2 * nivel + 2;
        var pai_ind = nivel;
    
        if (filho_esq_ind <= maior_indice && vetor[filho_esq_ind] > vetor[pai_ind]){
            pai_ind = filho_esq_ind;
        }
    
        if (filho_dir_ind <= maior_indice && vetor[filho_dir_ind] > vetor[pai_ind]){
            pai_ind = filho_dir_ind;
        }
    
        if (nivel != pai_ind){
            var aux = vetor[pai_ind];
            vetor[pai_ind] = vetor[nivel];
            vetor[nivel] = aux;
    
            return this.build_max_heap(vetor, maior_indice, pai_ind);
        } 
    
        return vetor;
    }
}

exports.HeapSort = new HeapSort();