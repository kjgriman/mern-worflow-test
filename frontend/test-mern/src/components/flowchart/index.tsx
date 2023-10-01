import { Canvas, Edge, Node, hasLink, NodeData, removeAndUpsertNodes } from 'reaflow';
import './flowchart.css'
import { useFlowChart } from '../../hooks/flowchart';

interface typeProps {
    init?: string,
    end?: string,
    conditions?: string[],
    action?: string[],
}

export function FlowChartView(props: typeProps) {
    const { init, end, conditions, action } = props;
    const { 
        nodos, 
        edges, 
        selections, 
        setSelections, 
        setEdges, 
        setNodos 
    } = useFlowChart({ init, end, conditions,action })

    return (
        <div className="overflow-scroll bg-gray-100">
            <Canvas
                maxWidth={500}
                maxHeight={500}
                selections={selections}
                nodes={nodos}
                edges={edges}
                onNodeLinkCheck={(_event, from: NodeData, to: NodeData) => {
                    return !hasLink(edges, from, to);
                }}
                onNodeLink={(_event, from, to) => {
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
                node={<Node onClick={(event, node) => {
                    setSelections([node.id]);
                }} onRemove={(_event, node) => {
                    const result = removeAndUpsertNodes(nodos, edges, node);
                    setEdges(result.edges);
                    setNodos(result.nodes);
                    setSelections([]);
                }} />}
                edge={<Edge onClick={(_event, edge) => {
                    setSelections([edge.id]);
                }} onRemove={(_event, edge) => {
                    setEdges(edges.filter(e => e.id !== edge.id));
                    setSelections([]);
                }} />} onCanvasClick={_event => {
                    setSelections([]);
                }}
            />
        </div>
    );
}