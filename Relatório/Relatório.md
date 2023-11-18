# Relatório

## Introdução

O Trabalho 1 tinha como objetivo principal realizar uma análise aprofundada do código de um projeto já existente e, posteriormente, implementar melhorias utilizando as técnicas abordadas na disciplina de qualidade de software. O projeto em questão foi originalmente desenvolvido por estudantes anteriores, utilizando as linguagens HTML, CSS e JavaScript. Tratava-se de uma solução web para um sistema de gestão de reparações de componentes eletrónicos.

<br>
<br>

## Capítulo 1: Configuração Do Ambiente E Extração De Requisitos

O primeiro capítulo deste trabalho, concentra-se na configuração do ambiente do aluno para o projeto "Reparação de componentes eletrónicos" e nas etapas preliminares para compreender e aprimorar o sistema existente.

### Configuração Do Ambiente E Criação Do Repositório

Inicialmente, para ter o ambiente a funcionar corretamente era pedido que se fizesse a configuração das ferramentas Visual Studio e NodeJS. Como essa configuração já estava previamente feita, começou-se por fazer a intalação do MySQL para a gestão da base de dados.

Para estabelecer a estrutura necessária para o projeto, acedeu-se ao MySQL Workbench onde, posteriormente foram executados os scripts presentes no arquivo database-queries.sql, localizado dentro da pasta de scripts.

Depois de executar os scripts de criação da base de dados, foi necessário atualizar as informações de conexão presentes no ficheiro connection-options.json, também localizado na pasta de scripts, de forma a que fosse possível conectar a base de dados com o site.

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

### Sugestão De Funcionalidades Que Poderiam Ser Desenvolvidas

#### Editar Dados do Utilizador Atual e Sua Password

Esta funcionalidade é essencial para permitir que os utilizadores atualizem as suas informações pessoais de forma autónoma. A possibilidade de editar dados do utilizador, como por exemplo o endereço de e-mail, oferece uma experiência personalizada. Além disso, a capacidade de alterar a palavra-passe aumenta a segurança, permitindo que os utilizadores mantenham as suas contas protegidas e atualizadas.

#### Seleção de Vários Tipos de Reparação ao Criar um Serviço

Introduzir a capacidade de selecionar vários tipos de reparação ao criar um serviço proporciona uma flexibilidade significativa. Diferentes componentes ou aspetos de um equipamento podem requerer reparações distintas. Ao permitir a seleção de vários tipos de reparação para um único serviço, o sistema torna-se mais adaptável a situações em que diferentes intervenções são necessárias.

#### Registo da Data e Hora de Visualização das Mensagens

A inclusão da data e hora em que uma mensagem foi vista proporciona transparência e contexto temporal nas comunicações. Isso é especialmente útil em ambientes colaborativos ou quando é crucial entender quando uma mensagem foi lida. Esta funcionalidade contribui para uma comunicação mais informada e uma experiência de utilizador mais completa.

<br>
<br>

## Capítulo 2: Ferramentas Para Melhoria Da Qualidade De Código E Análise De Código Sobre O Projeto

Neste capítulo, foram exploradas várias tecnologias desenvolvidas para melhorar a qualidade do código JavaScript no projeto. A escolha duma boa ferramenta é crucial para garantir a robustez, a manutenibilidade e a eficiência do código-fonte.
Para além disso, foram também estudadas algumas normas ISO (International Organization for Standardization) aplicáveis na qualidade de software. É aprentada uma análise de cada uma e a escolha duma delas e por fim é dada uma crítica do ponto de vista dessa ISO.

### Análise de 5 Tecnolgias

#### JSHint

O JSHint é uma escolha sólida para a análise de qualidade de código JavaScript, fornecendo uma abordagem configurável e fácil de integrar ao processo de desenvolvimento. Abaixo estão cinco pontos fortes do JSHint:

- **Personalização de Regras:** Permite a configuração flexível de regras, adaptando-se às preferências e padrões específicos do projeto.
- **Fácil Integração:** Pode ser integrado facilmente em diferentes ambientes de desenvolvimento e fluxos de trabalho.
- **Identificação de Problemas de Qualidade de Código:** Destaca potenciais problemas de qualidade, como variáveis não utilizadas e erros de sintaxe, contribuindo para a prevenção de bugs.
- **Suporte à Compatibilidade ECMAScript:** Oferece suporte à especificação ECMAScript, garantindo que o código esteja alinhado com os padrões JavaScript mais recentes.
- **Feedback Rápido durante o Desenvolvimento:** Fornece feedback imediato no ambiente de desenvolvimento, permitindo correções rápidas e eficientes enquanto o código está sendo escrito.

#### SonarLint

O SonarLint é uma ferramenta valiosa para equipas de desenvolvimento que procuram manter altos padrões de qualidade de código e prevenir a introdução de problemas durante o desenvolvimento.

- **Análise Abrangente:** Faz uma análise abrangente do código-fonte, identificando não apenas erros de sintaxe, mas também vulnerabilidades, bugs e más práticas de codificação.
- **Integração com IDEs:** Integra-se diretamente aos ambientes de desenvolvimento (IDEs), como IntelliJ IDEA, Eclipse e Visual Studio, proporcionando feedback em tempo real durante o desenvolvimento.
- **Regras Configuráveis:** Permite a configuração de regras e parâmetros para se adequar aos padrões e requisitos específicos do projeto.
- **Análise Contínua:** Suporta a análise contínua do código, identificando e alertando sobre problemas à medida que o código é alterado ou adicionado.
- **Relatórios Detalhados:** Gera relatórios detalhados, oferecendo insights visuais e estatísticas sobre a qualidade do código, facilitando a compreensão e correção de problemas.

#### ESLint

O ESLint é uma ferramenta de análise estática de código para JavaScript, destacando e corrigindo padrões inconsistentes. Seus pontos fortes incluem:

- **Identificação de Padrões Inconsistentes:** Destaca e corrige inconsistências no código.
- **Configuração Flexível:** Permite personalização de regras conforme necessário.
- **Ampla Comunidade e Ecossistema:** Suporte abrangente e ativo para diferentes frameworks e bibliotecas JavaScript.
- **Integração Contínua:** Pode ser facilmente incorporado em fluxos de trabalho CI/CD.
- **Identificação de Problemas em Tempo Real:** Fornece feedback imediato durante o desenvolvimento para prevenir erros.

#### StandardJS

O StandardJS é uma ferramenta de linting para JavaScript que enfatiza uma abordagem de "zero configuração" e aderência estrita a um conjunto consistente de regras. Aqui estão cinco pontos fortes do StandardJS:

- **Zero Configuração Necessária:** Implementa um conjunto predefinido de regras, eliminando a necessidade de configurações extensivas.
- **Padronização Rígida:** Promove um estilo de codificação consistente e padronizado em projetos JavaScript.
- **Fácil Adoção:** A simplicidade do StandardJS facilita a adoção rápida em projetos existentes sem configurações complexas.
- **Comunidade Ativa:** Mantida por uma comunidade ativa que apoia e contribui para o desenvolvimento contínuo.
- **Integração Suave:** Pode ser integrado facilmente em processos de integração contínua para garantir a qualidade do código ao longo do desenvolvimento.

#### PMD

O PMD é uma ferramenta de análise estática de código que se destaca em várias linguagens de programação, incluindo Java. Abaixo estão cinco pontos fortes do PMD:

- **Multi-Linguagem:** Suporta várias linguagens, incluindo Java, XML, e outros, tornando-o versátil para diferentes ambientes de desenvolvimento.
- **Diversidade de Regras:** Oferece uma ampla variedade de regras de análise, permitindo a detecção de potenciais problemas de código e padrões de codificação inconsistentes.
- **Personalização das Regras:** Permite a personalização das regras de acordo com as necessidades específicas do projeto, garantindo flexibilidade na aplicação.
- **Integração com Ferramentas de Build:** Pode ser facilmente integrado a ferramentas de construção (build tools) como Maven e Ant, tornando a análise parte do processo de construção do projeto.
- **Relatórios Detalhados:** Gera relatórios detalhados sobre as violações encontradas, facilitando a compreensão e a correção dos problemas identificados no código.

### A Minha Escolha

Escolhi implementar o ESLint devido à sua flexibilidade e ampla utilização pela comunidade. Esta tecnologia destaca-se por oferecer regras configuráveis que identificam e corrigem padrões inconsistentes no código JavaScript. A robustez, suporte da comunidade e a capacidade de personalização foram fatores decisivos na escolha do ESLint para aprimorar a qualidade do código no projeto.

### Análise Do Código - ESLint

Após fazer a instalação da biblioteca através do comando `npm init @eslint/config` e posteriormente fazer a sua configuração, foram criados os relatórios ao correr a ferramenta sobre o projeto. Estes resultados estão documentado no ficheiro [esLint_report](esLint_report.pdf), presente no repositório.
Nos pontos abaixo podemos ver a resolução para alguns dos erros que foram reportados pela framework ESLint.

#### Unused variable ( variável não utilizada )

Para este tipo de erros deveremos fazer a seguinte análise:

- Rever as linhas mencionadas em cada ficheiro e determinar se as variáveis são necessárias ou se podem ser removidas com segurança.
- Se as variáveis forem deixadas intencionalmente para uso futuro, adicionar comentários para explicar o seu propósito.
- Certificar-se de que todas as variáveis são utilizadas adequadamente para melhorar a manutenção e legibilidade do código.

#### Undefined variable ( variável não definida )

Verificar se a variável está definida:

- Antes de usar uma variável, você pode verificar se ela está definida para evitar erros. Em muitas linguagens de programação, você pode fazer isso usando uma declaração condicional, como um if.
- Em algumas situações, pode ser apropriado usar tratamento de exceções para lidar com variáveis indefinidas.

#### Undefined function ( função não definida )

Defina as Funções Ausentes:

- Implementar as funções ausentes no código.

Verifique o Uso das Funções:

- Depois de definir as funções ausentes, certificar-se de que elas sejam chamadas nos lugares corretos do código.

#### Mixed spaces and tabs ( espaços e tabs misturados )

Escolher um Estilo de Indentação:

- Decidir se utiliza espaços ou tabulações para a indentação.
- Certificar-se de que o editor de código está configurado para usar o estilo de indentação escolhido. Procurar por configurações relacionadas a tabulações e espaços nas preferências ou configurações do editor.

### 3 ISO's Estudadas

#### ISO/IEC 25010

Esta norma aborda características de qualidade de software, incluindo usabilidade, desempenho, segurança e manutenibilidade.

#### ISO/IEC 9126

Embora tenha sido substituída pela ISO/IEC 25010, a ISO/IEC 9126 estabeleceu um modelo para avaliação da qualidade do software com foco em características como funcionalidade, confiabilidade e eficiência.

#### ISO 9001

Embora seja uma norma de gestão de qualidade ampla, a ISO 9001 também é aplicável ao desenvolvimento de software, fornecendo diretrizes para processos de qualidade em uma organização.

### A Minha Escolha E Crítica Ao Projeto

A escolha da ISO/IEC 25010 é baseada na necessidade de avaliar e aprimorar a qualidade do software no projeto. Esta norma estabelece um conjunto abrangente de características, tais como usabilidade, desempenho e manutenibilidade, proporcionando uma estrutura sólida para a análise crítica do código JavaScript. Ao adotar a ISO/IEC 25010, procura-se garantir não apenas a funcionalidade, mas também aspectos cruciais para a satisfação do utilizador, eficiência operacional e sustentabilidade a longo prazo do software desenvolvido.

Ao analisar o projeto com base na ISO/IEC 25010, identificamos áreas para melhorias. Essas críticas apontam oportunidades específicas para aprimorar usabilidade, manutenibilidade, desempenho, segurança e eficiência operacional.

#### Usabilidade
A usabilidade do projeto poderia ser melhorada, especialmente no aspeto estético da interface do utilizador. A parte visual carece de uma abordagem mais atrativa e coerente, o que pode afetar a experiência do utilizador. Além disso, a acessibilidade do sistema revela-se bastante frágil, representando um desafio significativo para utilizadores com necessidades específicas. Melhorias nestes aspetos são cruciais para garantir uma experiência de utilizador mais envolvente e inclusiva, alinhando-se aos princípios de usabilidade preconizados pela ISO/IEC 25010.

#### Manutenibilidade
- Observa-se a falta de documentação apropriada no código JavaScript, o que dificulta a futura manutenção. A ausência de comentários e explicações sobre o funcionamento do código pode aumentar a complexidade, tornando as modificações mais suscetíveis a erros.
- A escolha de utilizar jQuery no projeto dificulta a implementação eficaz de testes automatizados para diversos elementos. A dependência intensiva do jQuery complica a configuração de testes unitários e de integração, tornando mais desafiador garantir a robustez e confiabilidade do código em diferentes cenários.

#### Segurança
Identificam-se vulnerabilidades de segurança, como falta o armazenamento da password do utilizador de forma encriptada. Estas falhas comprometem a integridade e confidencialidade do sistema.

<br>
<br>

## Capítulo 3: Análise E Codificação De Test Cases

Os Test Cases são essenciais para descrever de maneira clara e compreensível como um sistema se comporta em situações específicas. Neste capítulo, exploraram-se várias tecnologias para melhorar a qualidade do código JavaScript com a criação de Test Cases.

### Análise de 3 Tecnolgias

#### Mocha

Mocha é uma framework de teste para JavaScript, ideal para testes em Node.js. Com sintaxe clara, suporta testes síncronos e assíncronos, oferecendo modularidade e integração com bibliotecas como Chai. Destaca-se pela execução sequencial, relatórios detalhados e é amplamente utilizado devido à sua robustez e facilidade de uso.

#### Chai

A framework Chai, é frequentemente combinada com frameworks como Mocha. Com sintaxe expressiva e opções como `should`, `expect` e `assert`, simplifica a criação de testes claros e versáteis, sendo uma escolha popular para programadores pela sua integração suave e clareza nos test cases.

#### Jest

O Jest é uma framework de teste ágil e perfeito para projetos React e Javascript. É sem dúvida a tecnologia mais utilizada pelos programadores. Fácil configuração, execução rápida e suporte eficiente para testes e snapshots.

### A Minha Escolha

Após análise, escolhi o Jest como framework de teste devido à sua configuração simples e desempenho ágil. Para além disso, como já como tinha utilizado a tecnologia em questão, isso ajudou-me a tomar a decisão. É a escolha ideal para otimizar o processo de teste no projeto.

### Test Cases - Jest

Após instalar e configurar com sucesso o framework de testes Jest, foram criados testes unitários para as funções críticas presentes nos seguintes ficheiros:

#### authentication-handlers.js 
Este ficheiro contém funções responsáveis pela autenticação de utilizadores, sendo testadas em dois cenários distintos: um para uma autenticação bem-sucedida e outro para lidar com falhas de autenticação.

#### clients-handlers.js
Aqui, as funções relacionadas com a manipulação de clientes foram testadas em quatro contextos distintos: obtenção bem-sucedida de clientes, edição de clientes com sucesso, exclusão de clientes com sucesso e criação bem-sucedida de novos clientes.

#### users-handlers.js 
O conjunto de funções relacionadas à gestão de utilizadores foi abordado em três tipos de testes: obtenção bem-sucedida de utilizadores, criação de novos utilizadores com sucesso e edição bem-sucedida de informações de utilizador existente.

No total, foram desenvolvidos e executados 18 testes unitários, todos bem-sucedidos. Esses testes abrangem diferentes cenários para garantir a robustez e confiabilidade das funções críticas do sistema. A execução bem-sucedida de todos os testes valida a implementação correta das funcionalidades, garantindo que o código atenda aos requisitos especificados.
