import React from 'react';

function Table({ columns, rows }) {
    return (
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                        <th style={{ fontWeight: '600', fontSize: '14px', padding: '16px 20px', width: '160px', border: 'none', color: '#333', textAlign: 'left' }}></th>
                        {columns.map((col) => (
                            <th key={col} style={{ fontWeight: '600', fontSize: '14px', padding: '16px 20px', border: 'none', color: '#333', textAlign: 'left' }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.label} style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#ffffff' }}>
                            <td style={{ border: 'none', padding: '24px 20px', fontSize: '14px', color: '#888', verticalAlign: 'top' }}>
                                {row.label}
                            </td>
                            {row.values.map((val, i) => (
                                <td key={i} style={{ border: 'none', padding: '24px 20px', fontSize: '14px', color: '#444', verticalAlign: 'top', lineHeight: '1.6' }}>
                                    {val.split('\n').map((line, j) => (
                                        <span key={j}>
                                            {line}
                                            {j < val.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;