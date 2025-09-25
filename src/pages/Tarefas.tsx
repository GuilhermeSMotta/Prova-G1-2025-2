import Card from '../components/Card';
import TarefaForm from '../components/TarefaForm';
import type { Tarefa } from '../types';
import { useState } from 'react';

const Tarefas = () => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    
    const addTarefa = (text: string) => {
        const newTarefa: Tarefa = {
        id: Date.now().toString(),
        text,
        isDone: false,
        isFavorite: false,
        };
        setTarefas([...tarefas, newTarefa]);
    };

    return (
        <div>
            <h2>Catálogo de Tarefas</h2>
            <div>
                <TarefaForm addTarefa={addTarefa}></TarefaForm>
            </div>
            <div className="card-container">
                {tarefas.map((tarefa) => (
                <Card key={tarefa.id} item={tarefa} />
                ))}
            </div>
        </div>
    )
}

export default Tarefas;