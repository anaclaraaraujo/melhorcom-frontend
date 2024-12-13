# MelhorCom - Frontend

## Proposta

Uma empresa está prestes a lançar um novo aplicativo para venda de celulares e deseja um website para gerenciar o cadastro de novos celulares. A aplicação será desenvolvida em ReactJS.

### Funcionais
- Cadastro de novos celulares com os seguintes campos:
  - Modelo, Preço, Marca, Cor, Código, Data de início das vendas, Data de fim das vendas
- Edição, exclusão e listagem de celulares cadastrados.
- Validação de entradas de formulário, com mensagens de erro apropriadas.
- Responsividade para adaptação a diferentes dispositivos (opcional, mas um adicional).

🔗 **Experimente agora mesmo:** [shopcell.vercel.app](https://shopcell.vercel.app/)

## Tecnologias

<p>
  <img alt="react" src="https://img.shields.io/static/v1?label=react&message=18.3.1&color=20232A&labelColor=61DAFB">
  <img alt="react-hook-form" src="https://img.shields.io/static/v1?label=react-hook-form&message=7.54.0&color=20232A&labelColor=EC5990">
  <img alt="zod" src="https://img.shields.io/static/v1?label=zod&message=3.24.1&color=20232A&labelColor=FF7043">
  <img alt="material-ui" src="https://img.shields.io/static/v1?label=material-ui&message=6.2.0&color=20232A&labelColor=1976D2">
  <img alt="axios" src="https://img.shields.io/static/v1?label=axios&message=1.7.9&color=20232A&labelColor=5A29E5">
  <img alt="styled-components" src="https://img.shields.io/static/v1?label=styled-components&message=6.1.13&color=20232A&labelColor=DB7093">
  <img src="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/018dd345-536d-4b3c-b738-104a3ce0a81c.svg" alt="wakatime"></a>
</p>

<img src="public/mockup.png" alt="MelhorCom - Mockup"/>

## Bibliotecas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **Next.js**: Framework React para criação de aplicações web com funcionalidades como renderização do lado do servidor e geração de páginas estáticas.
- **Material UI**: Biblioteca de componentes de interface de usuário com foco em design responsivo e interativo.
- **React Router DOM**: Gerencia as rotas da aplicação, permitindo a navegação entre diferentes páginas.
- **Axios**: Biblioteca para realizar requisições HTTP para comunicação com APIs externas.
- **React Hook Form**: Biblioteca para gestão de formulários com validação de dados.
- **Zod**: Biblioteca para validação de esquemas de dados, utilizada para garantir a consistência nas entradas do usuário.


## Funcionalidades Implementadas

### Cadastro de Celulares
- A página de cadastro permite inserir detalhes sobre o celular (modelo, preço, marca, cor, etc).
- As entradas são validadas em tempo real, com mensagens de erro caso algo esteja incorreto.
  
### Listagem de Celulares
- Exibição de uma tabela com todos os celulares cadastrados.
- Cada item da tabela possui botões para editar ou excluir o celular.
  
### Responsividade
- A interface foi projetada para ser responsiva e se adaptar a diferentes dispositivos, incluindo desktops e dispositivos móveis.

## Ações Futuras
- Adicionar integração com uma API para persistência de dados.
- Melhorias na usabilidade e acessibilidade.

## Como usar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/anaclaraaraujo/melhorcom-frontend.git
    cd melhorcom-frontend
    ```
    
2. Instale as dependências:
    ```bash
    npm install
    ```
    
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    
4. Abra no navegador:
    - Acesse [http://localhost:5173/](http://localhost:5173/)

## Licença 
[![Licença](https://img.shields.io/github/license/anaclaraaraujo/melhorcom-frontend)](https://github.com/anaclaraaraujo/melhorcom-frontend/blob/main/LICENSE)
