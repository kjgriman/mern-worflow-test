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




export function useFlowChart({ init, end, conditions, actions,arrEdges }) {
    const [nodos, setNodos] = useState<typeNodos[]>([])
    const [edges, setEdges] = useState<typeEdges[]>([])
    const [newEdges, setNewEdges] = useState<typeEdges[]>([])
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
        actions?.map((action) => {
            const resultAction = nodos.find(data => data.id === action.id);
            if (conditions) {
                if (resultAction) {
                    setNodos(nodos.map(nodo => {
                        if (nodo.id === action.id) {
                            return { ...nodo, text: action.value };
                        }
                        else {
                            return nodo;
                        }
                    }));
                } else setNodos([...nodos, { id: action.id, text: action.value, className: 'fill-action' }])
            }
        })
    }, [actions])


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

    const createWorflow = ()=>{
        const init = nodos.find((nodo) => nodo.id == 'init')
        const end = nodos.find((nodo) => nodo.id == 'end')
        const condition = nodos.filter((nodo) => nodo.id.startsWith('condition') )
        const action = nodos.filter((nodo) => nodo.id.startsWith('action') )
        
        console.log('createWorflowinit',init?.text);
        console.log('createWorflowend',end?.text);
        console.log('createWorflowcondition',condition);
        console.log('createWorflowaction',action);
        console.log('createWorflowEdges',edges);
        console.log('createWorflownewEdges',arrEdges);
    }
    const handlerEdge = (data) =>{
        data = [...newEdges, data];
        setNewEdges(data)
        
        // setNewEdges([
        //     ...newEdges, {id: 'action_0-action_2', from: 'action_0', to: 'action_2'}
            
        // ])
    }

    return { nodos, edges, selections, setSelections, handlerEdge, setEdges, setNodos, createWorflow }
}