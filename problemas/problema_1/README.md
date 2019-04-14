## Foi usada uma abordagem de divisão e conquista para resolver o problema.

Primeiro encontra-se a mediana de cada um dos vetores. Três situações 
podem ocorrer:

1. mediana do 1° == mediana do 2°
> Nesse caso, ao juntar os dois vetores perceberiamos que os valores centrais 
> do array total seriam justamente as medianas encontradas (pois elas possuem
> a mesma quantidade de elementos anteriores e posteriores). 

2. mediana do 1° > mediana do 2°
> Chama a função recursivamente passando apenas os elementos menores que a 
> mediana no lugar do 1° vetor e os elementos maiores que a mediana no 2°
> vetor.

3. mediana do 1° < mediana do 2°
> Inverso do caso acima.

### Critério de parada

_Uma vez que o os dois vetores terão tamanho N, a quantidade de elementos que_
_o vetor hipotetico X + Y seria 2n. Ou seja, sempre será um número par._

_O critério de parada portanto será atingido quando os vetores possuirem tamanho_
_igual a 1. E retornará a média aritimética desses dois elementos._