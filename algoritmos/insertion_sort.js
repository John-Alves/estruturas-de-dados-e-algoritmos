function InsertionSort(){
    this.sort = function(vetor){
        return this.insertion_sort(vetor, vetor.length - 1);
    }  

    // Complexidade de O(n²)
    this.insertion_sort = function(vetor, n){
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
}

exports.InsertionSort = new InsertionSort();