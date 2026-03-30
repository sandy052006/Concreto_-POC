import { Handle, Position } from 'reactflow';

export default function ConceptNode({ data }: { data: any }) {
  // --- New Color Palette ---
  const headerBg = '#1e3a8a';    // Deep Blue (like TailWind blue-800)
  const headerText = '#f1f5f9';  // Off-white
  const nodeBorder = '#bfdbfe';  // Very light blue accent (like TailWind blue-200)
  const propListBg = '#f1f5f9';  // Subtle light grey/blue for the list
  const typePillBg = '#e0f2fe';  // Faint blue accent for the pill
  const typePillText = '#0ea5e9';// Strong accent blue (like TailWind cyan-500)
  const handleColor = '#06b6d4';// Brighter accent blue for connections

  return (
    <div style={{
      background: '#ffffff',
      border: `2px solid ${nodeBorder}`, // Colored border
      borderRadius: '12px',
      minWidth: '260px',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden'
    }}>
      
      {/* Target Handle (Incoming) - Colored dot with border */}
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ background: handleColor, width: '12px', height: '12px', border: '2px solid #fff' }} 
      />
      
      {/* Node Header - Solid Deep Blue */}
      <div style={{ 
        background: headerBg, 
        color: headerText, 
        padding: '14px 16px', 
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textAlign: 'center'
      }}>
        {data.label}
      </div>
      
      {/* Node Properties / Fields Container - New colored background */}
      <div style={{ 
        padding: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px', 
        background: propListBg // Applied here
      }}>
        {data.properties.map((prop: any, index: number) => (
          
          /* Individual Property Row */
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: '#ffffff', // Clean white background for rows
            padding: '8px 12px',
            borderRadius: '6px',
            border: `1px solid ${nodeBorder}`
          }}>
            <span style={{ color: '#334155', fontWeight: 500, fontSize: '13px' }}>
              {prop.name}
            </span>
            
            {/* Data Type (Pill/Badge) - New accented colors */}
            <span style={{ 
              color: typePillText, 
              background: typePillBg, 
              padding: '4px 10px', 
              borderRadius: '12px', 
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>
              {prop.type}
            </span>
          </div>
          
        ))}
      </div>

      {/* Source Handle (Outgoing) */}
      <Handle 
        type="source" 
        position={Position.Bottom} 
        style={{ background: handleColor, width: '12px', height: '12px', border: '2px solid #fff' }} 
      />
    </div>
  );
}