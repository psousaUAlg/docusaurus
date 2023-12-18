---
sidebar_position: 6
---

# Código Fonte

---
> Este módulo contém as rotinas e funções de controle do módulo de Gestão de Clientes

> Clicando nas Funções acede-se à página indicada
---

**Código**

***Importar as bibliotecas e relações com outros módulos:***
```
from io_terminal import imprime_lista
```
***Gravação dos dados:***
```
nome_ficheiro_lista_de_clientes = "lista_de_clientes.pk"
```
***Função: [Novo Cliente:](/docs/clientes/clientes_novo.md)***
```
def cria_novo_cliente():
    """Função para registar os dados de um novo cliente

    :return: dicionario com o novo cliente, {"nome": <<nome>>, "nif": <<nif>>, ...}
    """
    
    nome = input("nome? ")
    nif = input("nif? ").upper()
    ...
    cliente = {"nome": nome,
               "nif": nif}

    return cliente
```

***Função: [Imprime Cliente:](/docs/clientes/clientes_imprime.md)***
```
def imprime_lista_de_clientes(lista_de_clientes):
    """Imprime a lista de Clientes"""

imprime_lista(cabecalho="Lista de Clientes", lista=lista_de_clientes)
```
