// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

// Importa o arquivo de estilo CSS para a lista de tarefas
import './TodoList.css';

// Importa um ícone de imagens para ser usado quando a lista estiver vazia
import Icone from './assets/icons.webp';

function TodoList() {
    // Recupera a lista de tarefas do localStorage, se houver, caso contrário, inicia com uma lista vazia
    const listaStorage = localStorage.getItem('Lista');

    // Estado 'lista' para armazenar as tarefas e 'novoItem' para armazenar o novo item que o usuário está digitando
    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState("");

    // Efeito colateral que salva a lista de tarefas no localStorage toda vez que a lista é alterada
    useEffect(() => {
        localStorage.setItem('Lista', JSON.stringify(lista));
    }, [lista])

    // Função chamada quando o formulário é enviado para adicionar um novo item à lista
    function adicionaItem(form) {
        // Impede o comportamento padrão do formulário (não recarregar a página)
        form.preventDefault();
        
        // Se o campo de texto estiver vazio, não adiciona nada
        if (!novoItem) {
            return;
        }
        
        // Adiciona o novo item à lista e limpa o campo de texto
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        
        // Foca no campo de entrada novamente após adicionar o item
        document.getElementById('input-entrada').focus();
    }

    // Função chamada ao clicar em um item para alternar seu estado de concluído (isCompleted)
    function clicou(index) {
        // Cria uma cópia da lista para modificar sem afetar diretamente o estado
        const listaAux = [...lista];
        
        // Alterna o estado de 'isCompleted' do item clicado
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        
        // Atualiza o estado com a lista modificada
        setLista(listaAux);
    }

    // Função chamada para deletar um item da lista com base no índice
    function deleta(index) {
        // Cria uma cópia da lista para modificar sem afetar diretamente o estado
        const listaAux = [...lista];
        
        // Remove o item da lista utilizando o índice
        listaAux.splice(index, 1);
        
        // Atualiza o estado com a lista modificada
        setLista(listaAux);
    }

    // Função chamada para deletar todos os itens da lista
    function deletaTudo() {
        // Limpa a lista de tarefas, definindo-a como um array vazio
        setLista([]);
    }

    return (
        <div>
            {/* Título da página */}
            <h1>Lista de Tarefas</h1>

            {/* Formulário para adicionar novas tarefas */}
            <form onSubmit={adicionaItem}>
                {/* Campo de texto para o novo item */}
                <input
                    id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value) }} // Atualiza o estado com o novo valor digitado
                    placeholder="Adicione uma tarefa"
                />
                {/* Botão para adicionar a tarefa */}
                <button className="add" type="submit">Adicionar</button>
            </form>

            {/* Exibição da lista de tarefas */}
            <div className="listaTarefas">
                <div style={{ textAlign: 'center' }}>
                    {/* Se a lista estiver vazia, exibe o ícone importado */}
                    {
                        lista.length < 1
                            ?
                            <img className="icone-central" src={Icone} />
                            :
                            // Se houver tarefas, mapeia a lista e exibe cada item
                            lista.map((item, index) => (
                                <div
                                    key={index}
                                    className={item.isCompleted ? "item completo" : "item"}
                                >
                                    {/* Exibe o texto da tarefa e altera seu estado de 'completo' ao clicar */}
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>

                                    {/* Botão para deletar o item */}
                                    <button onClick={() => { deleta(index) }} className="del">Deletar</button>
                                </div>
                            ))
                    }
                    {/* Se houver itens na lista, exibe o botão para deletar todos */}
                    {
                        lista.length > 0 &&
                        <button onClick={() => { deletaTudo() }} className="deleteAll">Deletar Todas</button>
                    }
                </div>
            </div>
        </div>
    )
}

// Exporta o componente TodoList para ser usado em outros lugares do projeto
export default TodoList;
