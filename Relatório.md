# Relatório

## Introdução

O Trabalho 1 tinha como objetivo principal realizar uma análise aprofundada do código de um projeto já existente e, posteriormente, implementar melhorias utilizando as técnicas abordadas na disciplina de qualidade de software. O projeto em questão foi originalmente desenvolvido por estudantes anteriores, utilizando as linguagens HTML, CSS e JavaScript. Tratava-se de uma solução web para um sistema de gestão de reparações de componentes eletrónicos.

## Capítulo 1: Configuração Do Ambiente E Extração De Requisitos

O primeiro capítulo deste trabalho, concentra-se na configuração do ambiente do aluno para o projeto "Reparação de componentes eletrónicos" e nas etapas preliminares para compreender e aprimorar o sistema existente.

<br>

### Configuração Do Ambiente E Criação Do Repositório

Inicialmente, para ter o ambiente a funcionar corretamente era pedido que se  fizesse a configuração das ferramentas Visual Studio e NodeJS. Como essa configuração já estava previamente feita, começou-se por fazer a intalação do MySQL para a gestão da base de dados. 

Para estabelecer a estrutura necessária para o projeto, acedeu-se ao MySQL Workbench onde, posteriormente foram executados os scripts presentes no arquivo database-queries.sql, localizado dentro da pasta de scripts.

Depois de executar os scripts de criação da base de dados, foi necessário atualizar as informações de conexão presentes no ficheiro connection-options.json, também localizado na pasta de scripts, de forma a que fosse possível conectar a base de dados com o site.

<br>

### Documentação Das Funcionalidades 

Nesta secção, foi ralizada uma análise concisa do projeto através do "reverse engineering". O objetivo era documentar as funcionalidades existentes de forma clara, e por sua vez sugerir e fundamentar sobre requisitos que deveriam ou poderiam estar desenvolvidos. As funcionalidades documentadas são as seguintes:

#### Autenticação
- **Login:** Autenticar-se no sistema.

#### Gestão de Serviços
- **Criar Novo Serviço:** Adicionar um novo serviço ao sistema.
- **Procurar Serviço por Texto:** Pesquisar serviços com base em texto.
- **Filtrar Serviço por Categoria:** Filtrar serviços por categoria.
- **Editar Serviço:** Modificar informações de um serviço existente.

#### Gestão de Clientes
- **Criar Novo Cliente:** Adicionar um novo cliente ao sistema.
- **Editar Dados dos Clientes:** Modificar informações dos clientes.
- **Apagar Cliente:** Remover um cliente do sistema.

#### Gestão de Utilizadores
- **Criar Novos Utilizadores:** Adicionar novos utilizadores (admin ou operador).
- **Editar Utilizadores:** Modificar informações dos utilizadores.
- **Procurar Utilizadores por Texto:** Pesquisar utilizadores com base em texto.
- **Apagar Utilizador:** Remover um utilizador do sistema.

#### Mensagens
- **Enviar e Receber Mensagens:** Comunicação entre utilizadores.
- **Escolher Utilizador para Conversa:** Selecionar o utilizador com quem deseja conversar.
- **Filtrar por Paginação:** Organizar mensagens por páginas.

#### Personalização nos Serviços
- **Escolher Tipo de Equipamento:** Selecionar o tipo de equipamento em serviços.
- **Escolher Marca do Equipamento:** Selecionar a marca do equipamento em serviços.
- **Escolher Tipo de Reparação:** Selecionar o tipo de reparação em serviços.
- **Escolher Estado de Progresso:** Selecionar o estado de progresso em serviços.
- **Escolher Tipo de Prioridade:** Selecionar o tipo de prioridade em serviços.

#### Personalização nos Utilizadores
- **Escolher Tipo de Utilizador:** Definir se um utilizador é administrador ou operador.

#### Ordenação
- **Ordenar Clientes por Nome ou Email:** Organizar clientes com base em nome ou email.
- **Ordenar Serviços por ID:** Organizar serviços com base no ID.
- **Ordenar Utilizadores por Nome ou Nome de Utilizador:** Organizar utilizadores com base no nome ou nome de utilizador.

<br>

### Sugestão De Funcionalidades Que Poderiam Ser Desenvolvidas

#### Editar Dados do Utilizador Atual e Sua Password
Esta funcionalidade é essencial para permitir que os utilizadores atualizem as suas informações pessoais de forma autónoma. A possibilidade de editar dados do utilizador, como por exemplo o endereço de e-mail, oferece uma experiência personalizada. Além disso, a capacidade de alterar a palavra-passe aumenta a segurança, permitindo que os utilizadores mantenham as suas contas protegidas e atualizadas.

#### Seleção de Vários Tipos de Reparação ao Criar um Serviço

Introduzir a capacidade de selecionar vários tipos de reparação ao criar um serviço proporciona uma flexibilidade significativa. Diferentes componentes ou aspetos de um equipamento podem requerer reparações distintas. Ao permitir a seleção de vários tipos de reparação para um único serviço, o sistema torna-se mais adaptável a situações em que diferentes intervenções são necessárias.

#### Registo da Data e Hora de Visualização das Mensagens

A inclusão da data e hora em que uma mensagem foi vista proporciona transparência e contexto temporal nas comunicações. Isso é especialmente útil em ambientes colaborativos ou quando é crucial entender quando uma mensagem foi lida. Esta funcionalidade contribui para uma comunicação mais informada e uma experiência de utilizador mais completa.



## Capítulo 2:

The findings of the study are presented in this chapter, followed by a discussion of the results. Any trends, patterns, or noteworthy observations are analyzed and interpreted.

## Capítulo 3:

The findings of the study are presented in this chapter, followed by a discussion of the results. Any trends, patterns, or noteworthy observations are analyzed and interpreted.

