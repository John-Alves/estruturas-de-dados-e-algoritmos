function find_vector_median(vetor, n){
    return  (n % 2 == 1)  ? 
            vetor[parseInt(n/2)] : 
            (vetor[parseInt(n/2)] + vetor[parseInt(n/2)]) / 2;
}

function find_median(vetor_1, vetor_2, n){
    if (n <= 1) return ((vetor_1[0] + vetor_2[0]) / 2) // condição de parada

    var med_1 = find_vector_median(vetor_1, n);
    var med_2 = find_vector_median(vetor_2, n);

    if (med_1 == med_2){
        return med_1;
    }
    else {
        var median_index = parseInt(n/2);

        if (med_1 > med_2){
            var new_vetor_1 = []
            for(var i = 0; i <= median_index; i++) new_vetor_1.push(vetor_1[i]);

            var new_vetor_2 = []
            for(var i = median_index; i <= n; i++) new_vetor_2.push(vetor_2[i]);

            return find_median(new_vetor_1, new_vetor_2, median_index);
        }
        else {
            var new_vetor_1 = []
            for(var i = median_index; i <= n; i++) new_vetor_1.push(vetor_1[i]);

            var new_vetor_2 = []
            for(var i = 0; i <= median_index; i++) new_vetor_2.push(vetor_2[i]);

            return find_median(new_vetor_1, new_vetor_2, median_index);
        }
    }
}

function test(){
    var vetor_1 = [0, 2, 4, 6];
    var vetor_2 = [1, 3, 5, 7];
    var n = vetor_1.length;
    console.log(`vetor_1: [${vetor_1}] | mediana: ${find_vector_median(vetor_1, n)}`);
    console.log(`vetor_2: [${vetor_2}] | mediana: ${find_vector_median(vetor_2, n)}`);
    console.log(`Mediana geral: ${find_median(vetor_1, vetor_2, n)}`);
}

test();