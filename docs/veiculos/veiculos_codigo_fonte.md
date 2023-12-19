---
sidebar_position: 7
---

# Código Fonte

## Código Fonte de Gestão do Módulo de Viaturas

---
> Este módulo contém as rotinas e funções de controle do módulo de Gestão de Viaturas

> Clicando nas Funções acede-se à página indicada
---

**Código**

***Importar as bibliotecas e relações com outros módulos:***
```
from io_terminal import imprime_lista
```
***Gravação dos dados:***
```
nome_ficheiro_lista_de_veiculos = "lista_de_veiculos.pk"
```
***Função: [Novo Veículo:](/docs/veiculos/veiculo_novo)***
```
def cria_novo_veiculo():
    """
    Pede ao utilizador para introduzir um novo veiculo

    :return: dicionario com um veiculo na forma
        {"marca": <<marca>>, "matricula": <<matricula>>, ...}

    """

    marca = input("marca? ")
    matricula = input("matricula? ").upper()


    veiculo = {"marca": marca,
               "matricula": matricula}

    return veiculo
```

***Função: [Imprime Veículo:](/docs/veiculo/veiculos_imprime)***
```
def imprime_lista_de_veiculos(lista_de_veiculos):
    """Imprime a Lista de Veículos"""

    imprime_lista(cabecalho="Lista de Veiculos", lista=lista_de_veiculos)
```