import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomNodeWithInputOutputs = ({ data }) => {
  return (
    <div
      style={{
        width: 180,
        height: 60, // Increased height for more space
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        borderRadius: 4,
        background: 'white',
        position: 'relative',
      }}
    >
      {/* Input Handle (Top) */}
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: 'red', top: '-4px' }}
      />

      {/* Centered Text */}
      <p style={{ margin: 0, textAlign: 'center' }}>
        {data.label || 'Custom Nodes'}
      </p>

      {/* Output Handle (Bottom) */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="output"
        style={{ background: 'black', bottom: '-4px' }}
      />
      
    </div>
  );
};

export default CustomNodeWithInputOutputs;
