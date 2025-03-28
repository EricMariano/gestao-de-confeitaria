# CRM Confeitaria

CRM Confeitaria é uma aplicação web dedicada à gestão de confeitaria, permitindo a visualização de dashboards, gerenciamento de pedidos, ingredientes e receitas com uma interface moderna e responsiva. Por ora apenas o front

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Visão Geral

O CRM Confeitaria foi desenvolvido para facilitar a administração de uma confeitaria, reunindo informações importantes em um dashboard intuitivo e oferecendo módulos específicos para pedidos, ingredientes e receitas.  
A aplicação utiliza React para a interface do usuário, Recharts para a visualização de dados e Tailwind CSS em conjunto com DaisyUI para estilização.

## Recursos

- **Dashboard Dinâmico:** Visualização de dados com gráficos responsivos (ex: vendas mensais).
- **Gestão de Pedidos:** Monitoramento dos pedidos realizados.
- **Controle de Ingredientes:** Listagem e gerenciamento dos ingredientes utilizados.
- **Cadastro e Gestão de Receitas:** Criação e gerenciamento de receitas.
- **Alternância de Tema:** Suporte a temas claro e escuro, com preferência salva localmente.
- **Navegação Responsiva:** Um drawer (menu lateral) que se adapta ao tamanho da tela e exibe ícones e rótulos conforme o estado (expandido ou colapsado).

## Tecnologias Utilizadas

- **Framework:** React (v19.0.0)
- **Roteamento:** React Router DOM (v7.3.0)
- **Visualização de Dados:** Recharts (v2.15.1)
- **Estilização:** Tailwind CSS (v4.0.12) e DaisyUI
- **Build Tool:** Vite (v6.2.0)
- **Linting:** ESLint com plugins específicos para React e hooks

## Instalação e Execução

### Pré-requisitos

- Node.js (v16 ou superior)
- Yarn ou npm

### Passos para Instalar e Executar

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd gestao-de-confeitaria
2. **Instale as dependências**
    ```bash
    npm install
# ou, se estiver utilizando Yarn:
# yarn install
3. **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    # ou, com Yarn:
    # yarn dev