import Card from '../components/Card';
import TarefaForm from '../components/TarefaForm';
import { useTarefas } from '../context/TarefasContext';

const Tarefas = () => {
    const { tarefas, addTarefa, toggleDone, toggleFavorite } = useTarefas();

    return (
        <div>
            <h2>Catálogo de Tarefas</h2>
            <div>
                <TarefaForm addTarefa={addTarefa}></TarefaForm>
            </div>
            <div className="card-container">
                {tarefas.map((tarefa) => (
                    <Card
                        key={tarefa.id}
                        tarefa={tarefa}
                        onToggleDone={() => toggleDone(tarefa.id)}
                        onToggleFavorite={() => toggleFavorite(tarefa.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Tarefas;