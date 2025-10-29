// src/components/TodoItem.tsx
import { memo } from 'react';

export type Todo = { id: string; title: string; done: boolean };

type Props = {
    item: Todo;
    onToggle: (id: string) => void;
};

// NOTE: Use memo (not React.memo) to avoid unnecessary re-renders
const TodoItem = memo(function TodoItem({ item, onToggle }: Props) {
    // console.count(`Render <TodoItem ${item.id}>`);
    return (
        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={() => onToggle(item.id)}
            />
            <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.title}
      </span>
        </label>
    );
});

export default TodoItem;
