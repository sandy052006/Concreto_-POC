import { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection
} from 'reactflow';
import 'reactflow/dist/style.css';

import ConceptNode from './ConceptNode';

// 1. Register our custom node type
const nodeTypes = {
  concept: ConceptNode,
};

// 2. Setup initial dummy data (Three Concerto concepts with a more complex relationship)
const initialNodes: Node[] = [
  {
    id: 'node-1',
    type: 'concept',
    position: { x: 100, y: 100 },
    data: { 
      label: 'Concept: Person',
      properties: [
        { name: 'firstName', type: 'String' },
        { name: 'lastName', type: 'String' },
        { name: 'age', type: 'Integer' },
        { name: 'employer', type: 'Organization' } 
      ]
    },
  },
  {
    id: 'node-2',
    type: 'concept',
    position: { x: 100, y: 400 },
    data: { 
      label: 'Concept: Address',
      properties: [
        { name: 'street', type: 'String' },
        { name: 'city', type: 'String' },
        { name: 'zipCode', type: 'String' }
      ]
    },
  },
  {
    id: 'node-3',
    type: 'concept',
    position: { x: 500, y: 100 }, 
    data: { 
      label: 'Concept: Organization',
      properties: [
        { name: 'name', type: 'String' },
        { name: 'taxId', type: 'String' },
        { name: 'industry', type: 'String' },
        { name: 'headquarters', type: 'Address' }
      ]
    },
  }
];

export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Handlers for dragging nodes and drawing lines
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // 3. The extraction logic: Converting visuals back to JSON data
  const handleExportData = () => {
    const exportedSchema = {
      models: nodes.map(node => ({
        id: node.id,
        name: node.data.label,
        properties: node.data.properties,
        relations: edges.filter(e => e.source === node.id).map(e => e.target)
      }))
    };
    console.log("Exported JSON:", JSON.stringify(exportedSchema, null, 2));
    alert("Data exported! Open your browser's Developer Tools (Console) to view the JSON.");
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navigation Bar */}
      <div style={{ padding: '16px', background: '#f8f9fa', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'sans-serif', fontSize: '1.2rem', color: '#333' }}>Accord Project: Concerto Editor PoC</h2>
        <button 
          onClick={handleExportData}
          style={{ padding: '10px 20px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Export to JSON
        </button>
      </div>

      {/* The Interactive Canvas */}
      <div style={{ flexGrow: 1, background: '#f4f4f4' }}>
       <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          // 1. This new block makes the lines thick, blue, and animated!
          defaultEdgeOptions={{
            animated: true,
            style: { stroke: '#0284c7', strokeWidth: 3 },
          }}
        >
          {/* 2. This changes the background to slightly larger, blue dots spaced further apart */}
          <Background color="#3b82f6" gap={24} size={2} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}