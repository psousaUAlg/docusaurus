"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4922],{9041:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"metodologia-trabalho","metadata":{"permalink":"/docusaurus/blog/metodologia-trabalho","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-20-metodologia-trabalho.mdx","source":"@site/blog/2023-12-20-metodologia-trabalho.mdx","title":"Metodologia Trabalho","description":"Reposit\xf3rio","date":"2023-12-20T00:00:00.000Z","formattedDate":"20 de dezembro de 2023","tags":[{"label":"tp3","permalink":"/docusaurus/blog/tags/tp-3"}],"readingTime":0.63,"hasTruncateMarker":false,"authors":[{"name":"a74558@ualg.pt","title":"Web App Owner","url":"https://github.com/psousaUAlg","imageURL":"https://github.com/psousaUAlg.png","key":"psousa"},{"name":"blequim76@gmail.com","title":"Web App Contributor","url":"https://github.com/blequim76","imageURL":"https://github.com/blequim76.png","key":"blequim76"}],"frontMatter":{"slug":"metodologia-trabalho","title":"Metodologia Trabalho","authors":["psousa","blequim76"],"tags":["tp3"]},"unlisted":false,"nextItem":{"title":"C\xf3digo Fonte","permalink":"/docusaurus/blog/codigo-fonte"}},"content":"## Reposit\xf3rio\\r\\nO trabalho foi totalmente desenvolvido em Reposit\xf3rio pr\xf3prio: [***docusaurus***](https://github.com/psousaUAlg/docusaurus) \\r\\n\\r\\n:::note\\r\\nPor tentativa/erro foi conseguido o ***deploy*** do projeto na branch apropriada - ***gh-pages*** -\\r\\n\\r\\nFoi gerado o ficheiro [***gitLog***](https://github.com/psousaUAlg/docusaurus/blob/732e0511a297044e3ccac3a5ae433f8788e19764/gitLog.md), que cont\xe9m todos os ***commits*** \\r\\n:::\\r\\n\\r\\n:::warning\\r\\nSalvo melhor observa\xe7\xe3o, para executar o **deploy** para a **gh-pages**, no ficheiro **focusaurus.config.js**, \\r\\nal\xe9m das orienta\xe7\xf5es do diapositivo, h\xe1 lugar \xe0 seguinte altera\xe7\xe3o:\\r\\n\\r\\n``\\r\\n onBrokenLinks: \'ignore\',\\r\\n``\\r\\n\\r\\n:::\\r\\n\\r\\n### Menu\\r\\n> A barra de Menu cont\xe9m liga\xe7\xf5es \xe0s p\xe1ginas criadas.\\r\\n\\r\\n### Blog\\r\\n> O blog contem uma entrada que \xe9 a simula\xe7\xe3o do ***c\xf3digo fonte*** para as gest\xe3o da aplica\xe7\xe3o\\r\\n\\r\\n### Doxygen\\r\\n> O reposit\xf3rio cont\xe9m a pasta [***Doxygen***](https://github.com/psousaUAlg/docusaurus/blob/732e0511a297044e3ccac3a5ae433f8788e19764/Doxygen/html/index.html)  onde foi reproduzido a documenta\xe7\xe3o via ***docstrings*** gerado pelas rotinas Python, id\xeantico ao TP2.\\r\\n\\r\\n:::tip\\r\\n[***Alea jacta est***](https://pt.wikipedia.org/wiki/Alea_jacta_est)\\r\\n:::"},{"id":"codigo-fonte","metadata":{"permalink":"/docusaurus/blog/codigo-fonte","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-18-codigo-fonte.mdx","source":"@site/blog/2023-12-18-codigo-fonte.mdx","title":"C\xf3digo Fonte","description":"C\xf3digo Fonte de Gest\xe3o do M\xf3dulo de Clientes","date":"2023-12-18T00:00:00.000Z","formattedDate":"18 de dezembro de 2023","tags":[{"label":"codigo-fonte","permalink":"/docusaurus/blog/tags/codigo-fonte"}],"readingTime":1.89,"hasTruncateMarker":false,"authors":[{"name":"a74558@ualg.pt","title":"Web App Owner","url":"https://github.com/psousaUAlg","imageURL":"https://github.com/psousaUAlg.png","key":"psousa"},{"name":"blequim76@gmail.com","title":"Web App Contributor","url":"https://github.com/blequim76","imageURL":"https://github.com/blequim76.png","key":"blequim76"}],"frontMatter":{"slug":"codigo-fonte","title":"C\xf3digo Fonte","authors":["psousa","blequim76"],"tags":["codigo-fonte"]},"unlisted":false,"prevItem":{"title":"Metodologia Trabalho","permalink":"/docusaurus/blog/metodologia-trabalho"},"nextItem":{"title":"Welcome","permalink":"/docusaurus/blog/welcome"}},"content":"### C\xf3digo Fonte de Gest\xe3o do M\xf3dulo de Clientes\\r\\n\\r\\n:::tip\\r\\n\\r\\nClicando no nome das Fun\xe7\xf5es acede-se \xe0 p\xe1gina indicada\\r\\n\\r\\n:::\\r\\n\\r\\n**C\xf3digo:**\\r\\n\\r\\n***Importar as bibliotecas e rela\xe7\xf5es com outros m\xf3dulos:***\\r\\n```\\r\\nfrom io_terminal import imprime_lista\\r\\n```\\r\\n***Grava\xe7\xe3o dos dados:***\\r\\n```\\r\\nnome_ficheiro_lista_de_clientes = \\"lista_de_clientes.pk\\"\\r\\n```\\r\\n***Fun\xe7\xe3o: [Novo Cliente:](/docs/clientes/clientes_novo)***\\r\\n```\\r\\ndef cria_novo_cliente():\\r\\n    \\"\\"\\"\\r\\n    Fun\xe7\xe3o para registar os dados de um novo cliente\\r\\n\\r\\n    :return: dicionario com o novo cliente, \\r\\n    {\\"nome\\": <<nome>>, \\"nif\\": <<nif>>, ...}\\r\\n\\r\\n    \\"\\"\\"\\r\\n    \\r\\n    nome = input(\\"nome? \\")\\r\\n    nif = input(\\"nif? \\").upper()\\r\\n    ...\\r\\n    cliente = {\\"nome\\": nome,\\r\\n               \\"nif\\": nif}\\r\\n\\r\\n    return cliente\\r\\n```\\r\\n\\r\\n***Fun\xe7\xe3o: [Imprime Cliente:](/docs/clientes/clientes_imprime)***\\r\\n```\\r\\ndef imprime_lista_de_clientes(lista_de_clientes):\\r\\n    \\"\\"\\"Imprime a lista de Clientes\\"\\"\\"\\r\\n\\r\\nimprime_lista(cabecalho=\\"Lista de Clientes\\", lista=lista_de_clientes)\\r\\n```\\r\\n---\\r\\n\\r\\n### C\xf3digo Fonte de Gest\xe3o do M\xf3dulo de Viaturas\\r\\n\\r\\n:::tip\\r\\n\\r\\nClicando no nome das Fun\xe7\xf5es acede-se \xe0 p\xe1gina indicada\\r\\n\\r\\n:::\\r\\n\\r\\n\\r\\n**C\xf3digo**\\r\\n\\r\\n***Importar as bibliotecas e rela\xe7\xf5es com outros m\xf3dulos:***\\r\\n```\\r\\nfrom io_terminal import imprime_lista\\r\\n```\\r\\n***Grava\xe7\xe3o dos dados:***\\r\\n```\\r\\nnome_ficheiro_lista_de_veiculos = \\"lista_de_veiculos.pk\\"\\r\\n```\\r\\n\\r\\n***Fun\xe7\xe3o: [Novo Ve\xedculo:](/docs/veiculos/veiculo_novo)***\\r\\n```\\r\\ndef cria_novo_veiculo():\\r\\n    \\"\\"\\"\\r\\n    Pede ao utilizador para introduzir um novo veiculo\\r\\n\\r\\n    :return: dicionario com um veiculo na forma\\r\\n        {\\"marca\\": <<marca>>, \\"matricula\\": <<matricula>>, ...}\\r\\n\\r\\n    \\"\\"\\"\\r\\n\\r\\n    marca = input(\\"marca? \\")\\r\\n    matricula = input(\\"matricula? \\").upper()\\r\\n\\r\\n\\r\\n    veiculo = {\\"marca\\": marca,\\r\\n               \\"matricula\\": matricula}\\r\\n\\r\\n    return veiculo\\r\\n```\\r\\n\\r\\n***Fun\xe7\xe3o: [Imprime Ve\xedculo:](/docs/veiculos/veiculos_imprime)***\\r\\n```\\r\\ndef imprime_lista_de_veiculos(lista_de_veiculos):\\r\\n    \\"\\"\\"Imprime a Lista de Ve\xedculos\\"\\"\\"\\r\\n\\r\\n    imprime_lista(cabecalho=\\"Lista de Veiculos\\", lista=lista_de_veiculos)\\r\\n```\\r\\n---\\r\\n\\r\\n### C\xf3digo Fonte de Gest\xe3o do M\xf3dulo de Factura\xe7\xe3o\\r\\n\\r\\n:::tip\\r\\n\\r\\nClicando no nome das Fun\xe7\xf5es acede-se \xe0 p\xe1gina indicada\\r\\n\\r\\n:::\\r\\n\\r\\n**C\xf3digo**\\r\\n\\r\\n***Importar as bibliotecas e rela\xe7\xf5es com outros m\xf3dulos:***\\r\\n```\\r\\nfrom datetime import date\\r\\nfrom io_terminal import imprime_lista, pergunta_id\\r\\n```\\r\\n***Grava\xe7\xe3o dos dados:***\\r\\n```\\r\\nnome_ficheiro_lista_de_faturas = \\"lista_de_faturas.pk\\"\\r\\n```\\r\\n\\r\\n***Fun\xe7\xe3o: [Faturar Ve\xedculo Pronto:](/docs/faturacao/veiculos_prontos_faturar)***\\r\\n```\\r\\ndef cria_nova_fatura(lista_de_clientes, lista_de_veiculos):\\r\\n    \\"\\"\\"Pede ao utilizador para introduzir os dados de uma nova fatura\\r\\n\\r\\n    :return: dicionario com uma fatura, na forma\\r\\n        {\\"cliente\\": <<id_cliente>>, \\"veiculo\\": <<id_veiculo>>, \\"data\\": <<data>>, ...}\\r\\n    \\"\\"\\"\\r\\n\\r\\n    id_cliente = pergunta_id(questao=\\"Qual o id do cliente?\\", lista=lista_de_clientes, mostra_lista=True)\\r\\n    id_veiculo = pergunta_id(questao=\\"Qual o id do veiculo?\\", lista=lista_de_veiculos, mostra_lista=True)\\r\\n\\r\\n    # TODO: Pedir o resto dos dados da fatura, e n\xe3o esquecer de os guardar no dicionario\\r\\n    # ...\\r\\n\\r\\n    fatura = {\\"cliente\\": id_cliente,\\r\\n              \\"veiculo\\": id_veiculo,\\r\\n              \\"data\\": date.today()}\\r\\n\\r\\n    return fatura\\r\\n```\\r\\n\\r\\n***Fun\xe7\xe3o: [Imprime Factura:](/docs/faturacao/fatura_veiculo_pronto)***\\r\\n```\\r\\ndef imprime_fatura(veiculos_prontos):\\r\\n    \\"\\"\\"Imprime a Lista de Ve\xedculos prontos a faturar \\"\\"\\"\\r\\n\\r\\n    imprime_lista(cabecalho=\\"Lista de Veiculos\\", lista=lista_de_veiculos)\\r\\n```\\r\\n\\r\\n\\r\\n***Fun\xe7\xe3o: [Imprime Facturas:](/docs/faturacao/faturacao_imprime)***\\r\\n```\\r\\ndef imprime_lista_de_veiculos(lista_de_veiculos):\\r\\n    \\"\\"\\"Imprime a Lista de Ve\xedculos\\"\\"\\"\\r\\n\\r\\n    imprime_lista(cabecalho=\\"Lista de Veiculos\\", lista=lista_de_veiculos)\\r\\n```\\r\\n---"},{"id":"welcome","metadata":{"permalink":"/docusaurus/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"26 de agosto de 2021","tags":[{"label":"facebook","permalink":"/docusaurus/blog/tags/facebook"},{"label":"hello","permalink":"/docusaurus/blog/tags/hello"},{"label":"docusaurus","permalink":"/docusaurus/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"C\xf3digo Fonte","permalink":"/docusaurus/blog/codigo-fonte"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);