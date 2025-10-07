import React from "react";
import type { TarefaItem } from "../types";
import './Card.css';

interface CardProps {
    tarefa: TarefaItem;
    onToggleDone: () => void;
    onToggleFavorite: () => void;
}

const Card: React.FC<CardProps> = ({ tarefa, onToggleDone, onToggleFavorite }) => {
    return (
        <div className="card">
            <h3
                style={{
                    textDecoration: tarefa.isDone ? "line-through" : "none",
                    color: tarefa.isDone ? "gray" : "inherit"
                }}
            >
                {tarefa.text}
            </h3>
            <button onClick={onToggleDone}>
                {tarefa.isDone ? 'Desmarcar como feito' : 'Marcar como feito'}
            </button>
            <button onClick={onToggleFavorite}>
                {tarefa.isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        </div>
    )
}

export default Card;