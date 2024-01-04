# Sistema (Backend e Frontend) CRUD de cursos

Este projeto é um Sistema (Backend e Frontend) CRUD de cursos desenvolvido utilizando TypeScript, Node.js, Express e Vite (React) para a interface do usuário.

## Banco de Dados

O banco de dados utilizado é o PostgreSQL, que pode ser configurado localmente usando Docker ou instalado diretamente na máquina. Ele foi escolhido devido à sua confiabilidade, recursos avançados e escalabilidade.

### Configuração do Banco de Dados PostgreSQL com Docker

1. **Instale o Docker**: Se você ainda não tiver o Docker instalado, siga as instruções de instalação para seu sistema operacional no [site oficial do Docker](https://www.docker.com/get-started).

2. **Execute o Contêiner do PostgreSQL**: Abra um terminal ou prompt de comando e execute o seguinte comando para criar um contêiner do PostgreSQL:

    ```bash
    docker run --name meu-postgres -e POSTGRES_PASSWORD=minhasenha -p 5432:5432 -d postgres
    ```

    Certifique-se de substituir `minhasenha` pela senha desejada para o usuário `postgres`. O PostgreSQL será executado no contêiner Docker com o nome `meu-postgres`, escutando na porta `5432`.

3. **Verifique se o PostgreSQL está em execução**: Use o seguinte comando para verificar se o contêiner do PostgreSQL está em execução:

    ```bash
    docker ps
    ```

    Isso mostrará uma lista dos contêineres Docker em execução. Você deverá ver o contêiner PostgreSQL listado.

## Tecnologias Utilizadas

- **TypeScript**: Escolhido devido ao seu suporte a tipos estáticos, o que ajuda na detecção de erros em tempo de compilação.
- **Node.js**: Utilizado para o ambiente de execução do servidor, proporcionando um ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web do Node.js utilizado para criar APIs RESTful de forma simples e eficiente.
- **Vite (React)**: Escolhido por ser uma ferramenta de construção de aplicações React extremamente rápida, não necessitando do uso do Next.js para renderização do lado do servidor (SSR).
- **Docker**: Utilizado para facilitar a configuração e execução do banco de dados PostgreSQL de forma local.

## Configuração do Ambiente de Desenvolvimento

    1. Clone o repositório: `git clone https://github.com/denzelws/CourseHub`
    2. Instale as dependências: `npm/yarn install`
    3. Inicie o servidor de desenvolvimento: `npm   run dev / yarn dev`
    4. Certifique-se de configurar corretamente o   banco de dados para interagir com a aplicação.

## Funcionalidades

- Cadastro de novos usuários
- Login de usuários existentes
- Gerenciamento básico de usuários (CRUD)

