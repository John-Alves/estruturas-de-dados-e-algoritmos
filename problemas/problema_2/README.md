## Resolução

1. Ordena-se o vetor e coloca em um vetor auxiliar V1 para que não
seja perdida as informações dos indices.

2. Cria-se mais dois vetores auxiliares X e Y. X irá conter os elementos 
ordenados porém sem repetição. Já Y[i] irá conter a quantidade de repetições
que o elemento X[i] possui no vetor original.

3. Percorre o vetor original e faz uma busca binária procurando pelo elemento
em X, retornando a quantidade associada em Y.

4. Thats all folks. 