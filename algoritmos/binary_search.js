function BinarySearch(){
    this.search = function(valor, vetor){
        return this.binary_search(vetor, valor, 0, vetor.length - 1);
    } 

    this.binary_search = function(vetor, valor, menor_indice, maior_indice) {
        if (menor_indice == maior_indice && vetor[maior_indice] != valor) return -1;

        var indice = menor_indice + parseInt((maior_indice - menor_indice) / 2);

        if (vetor[indice] == valor) return indice;
        else if (valor < vetor[indice]) {
            return this.binary_search(vetor, valor, menor_indice, indice - 1);
        }
        else {
            return this.binary_search(vetor, valor, indice + 1, maior_indice);
        }
    }
}

exports.BinarySearch = new BinarySearch();