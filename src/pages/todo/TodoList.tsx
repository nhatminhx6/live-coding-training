// src/components/TodoList.tsx
import { useCallback, useMemo, useState, ChangeEvent } from 'react';
import TodoItem, { Todo } from './TodoItem';

type FilterMode = 'all' | 'open' | 'done';

const initialTodos: Todo[] = [
    { id: '1', title: 'Write tests', done: false },
    { id: '2', title: 'Ship feature', done: false },
    { id: '3', title: 'Refactor utils', done: true },
];

export default function TodoList(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [query, setQuery] = useState<string>('');
    const [mode, setMode] = useState<FilterMode>('all');

    // NOTE: Stable handler identity for memoized children
    const onToggle = useCallback((id: string) => {
        // Use functional update to avoid stale state
        setTodos(prev =>
            prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)),
        );
    }, []);

    // NOTE: Derive filtered/sorted view using useMemo (expensive ops here)
    const visibleTodos = useMemo(() => {
        const q = query.trim().toLowerCase();

        // Filter by text + mode
        let result = todos.filter(t =>
            q.length ? t.title.toLowerCase().includes(q) : true,
        );
        if (mode === 'open') result = result.filter(t => !t.done);
        if (mode === 'done') result = result.filter(t => t.done);

        // Example sort: unfinished first, then alphabetical
        return result.slice().sort((a, b) => {
            if (a.done !== b.done) return a.done ? 1 : -1;
            return a.title.localeCompare(b.title);
        });
    }, [todos, query, mode]);

    // NOTE: Derive stats from source list only once per change
    const stats = useMemo(() => {
        const total = todos.length;
        const done = todos.filter(t => t.done).length;
        const open = total - done;
        return { total, done, open };
    }, [todos]);

    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
            <h2>Todos</h2>

            <div style={{ display: 'flex', gap: 8 }}>
                <input
                    value={query}
                    placeholder="Search..."
                    onChange={onChangeQuery}
                    style={{ flex: 1 }}
                />
                <select
                    value={mode}
                    onChange={e => setMode(e.target.value as FilterMode)}
                >
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="done">Done</option>
                </select>
            </div>

            <small>
                Total: {stats.total} • Open: {stats.open} • Done: {stats.done}
            </small>

            <div style={{ display: 'grid', gap: 8 }}>
                {visibleTodos.map(t => (
                    <TodoItem key={t.id} item={t} onToggle={onToggle} />
                ))}
            </div>
        </div>
    );
}
