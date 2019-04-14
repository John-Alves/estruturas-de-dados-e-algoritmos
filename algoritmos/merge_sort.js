function MergeSort(){
    this.sort = function(vetor){
        return this.merge_sort(vetor, 0, vetor.length - 1);
    }  

    this.merge_sort = function(vetor, menor_indice, maior_indice){
        if (menor_indice >= maior_indice) return vetor;

        var indice = parseInt(menor_indice + ((maior_indice - menor_indice) / 2));
        
        vetor = this.merge_sort(vetor, menor_indice, indice);
        vetor = this.merge_sort(vetor, indice + 1, maior_indice);

        return this.intercala(vetor, menor_indice, indice, maior_indice);
    }

    this.intercala = function(vetor, menor_indice, indice, maior_indice){
        // Cria vetores auxiliares
        var vetor_L = [];
        for (var i = menor_indice; i <= indice; i++) { vetor_L.push(vetor[i]); }

        var vetor_R = []
        for (var i = indice + 1; i <= maior_indice; i++) { vetor_R.push(vetor[i]); }

        var ind_L = 0; 
        var ind_R = 0;

        for (var i = menor_indice; i <= maior_indice; i++) {
            if (this.left_is_smaller(vetor_L[ind_L], vetor_R[ind_R])) {
                vetor[i] = vetor_L[ind_L];
                ind_L++;
            }
            else {
                vetor[i] = vetor_R[ind_R];
                ind_R++;
            }
        }

        return vetor;
    }

    this.left_is_smaller = function(elem1 = undefined, elem2 = undefined){
        if (elem1 !== undefined && elem2 !== undefined){
            return (elem1 <= elem2) ? true : false;
        }
        else {
            return (elem1 == undefined) ? false : true;
        }
    }

}

exports.MergeSort = new MergeSort();