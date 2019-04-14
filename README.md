# Algoritmos

Repositório criado para estudar e implementar algoritmos e estruturas de dados. Lista dos algoritmos implementados até o momento:

- [x] Insertion-Sort
- [x] Merge-Sort
- [x] Quick-Sort
- [x] Heap-Sort
- [x] Counting-Sort (usando apenas um vetor auxiliar em tempo Θ(n + k))
- [ ] Radix-Sort
- [x] Busca Binária
- [x] Encontrar K-ésimo menor elemento (baseado no quick-sort)

# Executando os arquivos

Obs1: Para executar os arquivos instale o node.js em sua máquina.

```node problemas/problema_X/solution.js```

Obs2: Troque o `X` pelo numero do problema que deseja executar.

Para usar os algoritmos diretamente do console do node
ou de seu proprio arquivo JS, dê um require no arquivo 
`algoritmos/algoritmos.js`:

```
const algorithms = require('./algoritmos/algoritmos.js');

var arr = [0, 4, 1, 2, 3];
var sort_arr = algorithms.Algorithm.merge_sort(arr);
```

### Lista de Problemas e Desáfios

_Dentro da pasta `problemas` há alguns desafios envolvendo os algoritmos implementados._
