import { useEffect, useState } from "react";

interface typeNodos {
    id: string,
    text: string,
    className: string,
}
interface typeEdges {
    id?: string,
    from?: string,
    to?: string
}

export function useFlowChart({ init, end, conditions, action }) {
    const [nodos, setNodos] = useState<typeNodos[]>([])
    const [edges, setEdges] = useState<typeEdges[]>([])
    const [selections, setSelections] = useState<string[]>(['1', '1-2']);

    useEffect(() => {
        conditions?.map((condition) => {
            const resultCondition = nodos.find(data => data.id === condition.id);
            if (conditions) {
                if (resultCondition) {
                    setNodos(nodos.map(nodo => {
                        if (nodo.id === condition.id) {
                            return { ...nodo, text: condition.value };
                        }
                        else {
                            return nodo;
                        }
                    }));
                } else setNodos([...nodos, { id: condition.id, text: condition.value, className: 'fill-condition' }])
            }
        })
    }, [conditions])

    useEffect(() => {
        let data
        const resultInit = nodos.find(data => data.id === "init");
        if (init) {
            if (resultInit) {
                setNodos(nodos.map(nodo => {
                    if (nodo.id === 'init') return { ...nodo, text: init };
                    else return nodo;
                }));
            } else {
                data = [...nodos, { id: 'init', text: init, className: 'fill-init' }];
                setNodos(data)
            }
        }
    }, [init])

    useEffect(() => {
        let data
        const resultEnd = nodos.find(data => data.id === "end");
        if (end) {
            if (resultEnd) {
                setNodos(nodos.map(nodo => {
                    if (nodo.id === 'end')
                        return { ...nodo, text: end }
                    else return nodo
                }));
            } else {
                data = [...nodos, { id: 'end', text: end, className: 'fill-end' }];
                setNodos(data)
            }
        }
    }, [end])

    useEffect(() => {
        nodos.find(nodo => {
            if (nodos.length == 2 && nodo.id == 'end') setEdges([{ id: 'init-conditional', from: 'init', to: 'end' }])
        })
    }, [nodos])

    return { nodos, edges, selections, setSelections, setEdges, setNodos }
}