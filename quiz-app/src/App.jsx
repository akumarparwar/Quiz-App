import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from '@xyflow/react';
import CustomNodeWithOutputs from './CustomNodeWithOutputs'; // Import the custom node
import '@xyflow/react/dist/style.css';
import CustomNodeWithInputOutputs from './CustomNodeWithInputOutputs';

const rfStyle = {
  backgroundColor: '#B8CEFF',
  height: '50vh', // Adjust height to fit below the heading
};
const initialNodes = [
  {
    id: 'root',
    type: 'input',
    position: { x: window.innerWidth / 2 - 100, y: 20 }, // Center top
    data: { label: 'Start' },
    hidden: false,
  },
  {
    id: 'R2',
    type: 'customNode',
    position: { x: window.innerWidth / 2 - 100, y: 120 }, // Adjusted for more space
    data: { label: 'Which method is used to update the state in a class component?' },
    hidden: true,
  },
  // Creative branch
  {
    id: 'R31',
    type: 'customNodeWithInputOutputs',
    position: { x: 150, y: 250 }, // Increased vertical space
    data: { label: 'setState' },
    hidden: true,
  },
  {
    id: 'R41',
    type: 'customNodeWithInputOutputs',
    position: { x: 50, y: 400 },
    data: { label: 'Correct Option' },
    hidden: true,
  },
  {
    id: 'R51',
    type: 'customNode',
    position: { x: 10, y: 500 },
    data: { label: 'What is the correct way to initialize state in a functional component?' },
    hidden: true,
  },
  {
    id: 'R61',
    type: 'customNodeWithInputOutputs',
    position: { x: -100, y: 700 },
    data: { label: 'const [state, setState] = useState(initialValue);' },
    hidden: true,
  },
  {
    id: 'R71',
    type: 'customNodeWithInputOutputs',
    position: { x: -100, y: 900 },
    data: { label: 'Correct' },
    hidden: true,
  },
  {
    id: 'R32',
    type: 'customNodeWithInputOutputs',
    position: { x: 400, y: 250 }, // Increased vertical space
    data: { label: 'updateState' },
    hidden: true,
  },
  {
    id: 'R42',
    type: 'customNodeWithInputOutputs',
    position: { x: 400, y: 400 },
    data: { label: 'Wrong' },
    hidden: true,
  },
  {
    id: 'R62',
    type: 'customNodeWithInputOutputs',
    position: { x: 60, y: 700 },
    data: { label: 'const state = useReducer(initialValue);' },
    hidden: true,
  },
  {
    id: 'R72',
    type: 'customNodeWithInputOutputs',
    position: { x: 60, y: 900 },
    data: { label: 'Wrong' },
    hidden: true,
  },
  
  {
    id: 'R33',
    type: 'customNodeWithInputOutputs',
    position: { x: 650, y: 250 }, // Increased vertical space
    data: { label: 'changeState' },
    hidden: true,
  },
  {
    id: 'R43',
    type: 'customNode',
    position: { x: 650, y: 400 },
    data: { label: 'Wrong' },
    hidden: true,
  },
  {
    id: 'R63',
    type: 'customNodeWithInputOutputs',
    position: { x: 220, y: 700 },
    data: { label: 'const setState(initialValue) = useState;' },
    hidden: true,
  },
  {
    id: 'R73',
    type: 'customNodeWithInputOutputs',
    position: { x: 220, y: 900 },
    data: { label: 'Wrong' },
    hidden: true,
  },
  {
    id: 'R34',
    type: 'customNodeWithInputOutputs',
    position: { x: 900, y: 250 }, // Increased vertical space
    data: { label: 'modifyState' },
    hidden: true,
  },
  {
    id: 'R44',
    type: 'customNodeWithInputOutputs',
    position: { x: 1000, y: 400 },
    data: { label: 'Wrong' },
    hidden: true,
  },
  {
    id: 'R64',
    type: 'customNodeWithInputOutputs',
    position: { x: 400, y: 700 },
    data: { label: 'useReducer(state, initialValue);' },
    hidden: true,
  },
  {
    id: 'R74',
    type: 'customNodeWithInputOutputs',
    position: { x: 400, y: 900},
    data: { label: 'Wrong' },
    hidden: true,
  },

];


const initialEdges = [
  
  //Start
  { id: 'e0', source: 'root', target: 'R2'},
  
  //R1 TO R3
  { id: 'e1', source: 'R2', target: 'R31',sourceHandle: 'a' },
  { id: 'e2', source: 'R2', target: 'R32',sourceHandle: 'b' },
  { id: 'e3', source: 'R2', target: 'R33',sourceHandle: 'c' },
  { id: 'e4', source: 'R2', target: 'R34',sourceHandle: 'd' },
  
  { id: 'e5', source: 'R31', target: 'R41',sourceHandle: 'output' },
  { id: 'e6', source: 'R32', target: 'R42',sourceHandle: 'output' },
  { id: 'e7', source: 'R33', target: 'R43',sourceHandle: 'output' },
  { id: 'e8', source: 'R34', target: 'R44',sourceHandle: 'output' },
  

  { id: 'e9', source: 'R41', target:  'R51',sourceHandle: 'output' },
  { id: 'e10', source: 'R41', target: 'R52',sourceHandle: 'output' },
  { id: 'e11', source: 'R41', target: 'R53',sourceHandle: 'output' },
  { id: 'e12', source: 'R41', target: 'R54',sourceHandle: 'output' },
  

  { id: 'e13', source: 'R51', target: 'R61',sourceHandle: 'a' },
  { id: 'e14', source: 'R51', target: 'R62',sourceHandle: 'b' },
  { id: 'e15', source: 'R51', target: 'R63',sourceHandle: 'c' },
  { id: 'e16', source: 'R51', target: 'R64',sourceHandle: 'd' },

  { id: 'e17', source: 'R61', target: 'R71',sourceHandle: 'output' },
  { id: 'e18', source: 'R62', target: 'R72',sourceHandle: 'output' },
  { id: 'e19', source: 'R63', target: 'R73',sourceHandle: 'output' },
  { id: 'e20', source: 'R64', target: 'R74',sourceHandle: 'output' },
];


function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodeClick = useCallback((event, node) => {
    setNodes((nds) =>
      nds.map((n) => {
        const isConnected = edges.some(
          (edge) => edge.source === node.id && edge.target === n.id
        );
        return isConnected ? { ...n, hidden: false } : n;
      })
    );
  }, [edges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: '#B8CEFF' }}>
      <h1 style={{ textAlign: 'center', margin: '0px 0', color: '#333' }}>
         Quiz App
      </h1>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        nodeTypes={{
          customNode: CustomNodeWithOutputs, // Register CustomNodeWithOutputs
          customNodeWithInputOutputs: CustomNodeWithInputOutputs, // Register CustomNodeWithInputOutputs
        }}
        onNodeClick={onNodeClick}
      />
    </div>
  );
}

export default Flow;