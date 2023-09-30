import { useEffect, useState } from 'react';
import { Canvas,hasLink,NodeData } from 'reaflow';

import './flowchart.css'

interface typeProps {
    init?: string,
    end?: string,
    conditions?: string[],
}
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

export function FlowChartView(props: typeProps) {
    const { init, end, conditions } = props;

    const [nodos, setNodos] = useState<typeNodos[]>([])
    const [edges, setEdges] = useState<typeEdges[]>([])

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
                            console.log('xxxx', condition);
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
        console.log(nodos);
        nodos.find(nodo => {
            if (nodos.length == 2 && nodo.id == 'end') setEdges([{ id: 'init-conditional', from: 'init', to: 'end' }])
        })
    }, [nodos])

    return (
        <div className="overflow-scroll bg-gray-100">

            <Canvas
                maxWidth={500}
                maxHeight={500}
                nodes={nodos}
                edges={edges}
                onNodeLinkCheck={(event, from: NodeData, to: NodeData) => {
                    return !hasLink(edges, from, to);
                }} 
                onNodeLink={(event, from, to) => {
                    const id = `${from.id}-${to.id}`;
            
                    setEdges([
                      ...edges,
                      {
                        id,
                        from: from.id,
                        to: to.id
                      }
                    ]);
                  }}
                />
        </div>
    );
}