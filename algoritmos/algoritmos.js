const insertion = require('./insertion_sort');
const merge = require('./merge_sort');
const quick = require('./quick_sort');
const heap = require('./heap_sort');
const binary = require('./binary_search');

function Algorithm(){
    this.merge_sort = function(vetor){
        let vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return merge.MergeSort.sort(vetor_copiado);
    }
    this.quick_sort = function(vetor){
        let vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return quick.QuickSort.sort(vetor_copiado);
    }
    this.insertion_sort = function(vetor){
        let vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return insertion.InsertionSort.sort(vetor_copiado);
    }
    this.heap_sort = function(vetor){
        let vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return heap.HeapSort.sort(vetor_copiado);
    }
    this.binary_search = function(valor, vetor){
        return binary.BinarySearch.search(valor, vetor);
    }
}

exports.Algorithm = new Algorithm();