import { useTarefas } from '../context/TarefasContext';
import Card from '../components/Card';

const Favoritos = () => {
    const { tarefas, favoritos, toggleDone, toggleFavorite } = useTarefas();
    const tarefasFavoritas = tarefas.filter(tarefa => favoritos.includes(tarefa.id));

    return (
        <div>
            <h2>Meus Favoritos</h2>
            {tarefasFavoritas.length === 0 ? (
                <p>Você ainda não adicionou nenhum item aos favoritos.</p>
            ) : (
                <div className="card-container">
                    {tarefasFavoritas.map((tarefa) => (
                        <Card key={tarefa.id}
                        tarefa={tarefa}
                        onToggleDone={() => toggleDone(tarefa.id)}
                        onToggleFavorite={() => toggleFavorite(tarefa.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favoritos;