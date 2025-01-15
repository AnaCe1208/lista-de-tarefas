# Lista de Tarefas

Este projeto é uma aplicação de lista de tarefas desenvolvida com **React**, que permite adicionar, marcar como concluídas, deletar tarefas individuais e limpar toda a lista. Os dados são persistidos utilizando o **localStorage**.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas (e alternar o estado entre concluído e não concluído).
- Deletar tarefas específicas.
- Deletar todas as tarefas da lista.
- Persistência de dados com localStorage.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **CSS**: Estilização personalizada da aplicação.
- **localStorage**: Persistência local dos dados.

## Estrutura de Arquivos

```plaintext
src/
├── assets/
│   └── icons.webp         # Ícone exibido quando a lista está vazia.
├── TodoList.css           # Estilos da aplicação.
├── TodoList.js            # Componente principal da lista de tarefas.
└── index.js               # Arquivo de entrada da aplicação.
```

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/AnaCe1208/lista-de-tarefas.git
```

2. Navegue até o diretório do projeto:

```bash
cd lista-de-tarefas
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

5. Acesse a aplicação no navegador em:

```
http://localhost:3000
```

## Funcionalidades em Detalhe

### Adicionar Tarefa
- Preencha o campo de entrada com a descrição da tarefa e clique no botão "Adicionar" ou pressione **Enter**.

### Marcar Como Concluído
- Clique no texto de uma tarefa para alternar entre os estados "concluído" e "não concluído".

### Deletar Tarefa
- Clique no botão "Deletar" ao lado da tarefa para removê-la da lista.

### Deletar Todas as Tarefas
- Clique no botão "Deletar Todas" para limpar a lista completamente.

## Demonstração Visual

![Interface da Lista de Tarefas](src/assets/icons.webp)

## Autor

Desenvolvido por Cecília.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).