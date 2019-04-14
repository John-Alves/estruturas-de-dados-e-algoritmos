const insertion = require('./insertion_sort');
const merge = require('./merge_sort');
const quick = require('./quick_sort');
const heap = require('./heap_sort');
const binary = require('./binary_search');
const count = require('./counting_sort');
const k_minor = require('./k_minor_search');

function Algorithm(){
    this.show_available = function(){}

    this.merge_sort = function(vetor){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return merge.MergeSort.sort(vetor_copiado);
    }
    this.quick_sort = function(vetor){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return quick.QuickSort.sort(vetor_copiado);
    }
    this.insertion_sort = function(vetor){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return insertion.InsertionSort.sort(vetor_copiado);
    }
    this.heap_sort = function(vetor){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return heap.HeapSort.sort(vetor_copiado);
    }
    this.binary_search = function(valor, vetor){
        return binary.BinarySearch.search(valor, vetor);
    }
    this.counting_sort = function(vetor, k){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return count.CountSort.sort(vetor_copiado, k);
    }
    this.k_minor_search = function(k, vetor){
        var vetor_copiado = JSON.parse(JSON.stringify(vetor));
        return k_minor.KMinorSearch.search(k, vetor_copiado);
    }
}

exports.Algorithm = new Algorithm();