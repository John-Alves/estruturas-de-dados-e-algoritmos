# Algoritmos

Repositório criado para estudar e implementar algoritmos e estruturas de dados
estudados na disciplina de `Construção e Analise de Algorimos`.

# Executando os arquivos

Obs1: Para executar os arquivos instale o node.js em sua máquina.

<code>node problemas/problema_X/solution.js</code> 

Obs2: Troque o `X` pelo numero do problema que deseja executar.

Para usar os algoritmos diretamente do console do node
ou de seu proprio arquivo JS, dê um require no arquivo 
`algoritmos/algoritmos.js`:

<code>
const algorithms = require('./algoritmos/algoritmos.js');

var arr = [0, 4, 1, 2, 3];
var sort_arr = algorithms.Algorithm.merge_sort(arr);
</code> 

# Lista de Problemas e Desáfios

> _Obs: as resoluções estão dentro da pasta `problemas`._

1. Sejam X[1...n] e Y[1...n] dois vetores ordenados. Escreva um algoritmo em Θ(logn) para encontrar a mediana de todos os 2n elementos dos vetores X e Y. 

2. Elabore um algoritmo em Θ(nlogn) que, dado um vetor S com n > 0 elementos,
retorna um vetor V de tamanho n com a seguinte propriedade: V[i] é o número de ocorrências de S[i] em S.