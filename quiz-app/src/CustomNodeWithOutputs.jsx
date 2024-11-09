import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomNodeWithOutputs = ({ data }) => {
  return (
    <div
      style={{
        width: 170,
        height: 70,
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
        {data.label || 'Custom Node'}
      </p>

      {/* Source Handles (Bottom) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: '-2px' }}>
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={{ left: '10%', background: 'black' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          style={{ left: '30%', background: 'black' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="c"
          style={{ left: '70%', background: 'black' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="d"
          style={{ left: '90%', background: 'black' }}
        />
      </div>
    </div>
  );
};

export default CustomNodeWithOutputs;
