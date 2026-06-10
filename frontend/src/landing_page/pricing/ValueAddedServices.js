import React from 'react';

function ValueAddedServices() {
    const rows = [
        { service: 'Tickertape', billing: 'Monthly / Quarterly / Annual', charge: 'Free: 0 | Pro: 249/699/2399' },
        { service: 'Smallcase', billing: 'Per transaction', charge: 'Buy & Invest More: 100 | SIP: 10' },
        { service: 'Kite Connect', billing: 'Monthly', charge: 'Connect: 500 | Personal: Free' },
    ];

    return (
        <div className='container mt-5'style={{marginLeft:"200px", paddingRight:"200px", paddingTop:"70px"}}>
            <h4 style={{ fontWeight: '600', fontSize: '25px', color: '#444', marginBottom: '24px' }}>
                Charges for optional value added services
            </h4>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>Service</th>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>Billing Frequency</th>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                                <td style={{ padding: '20px', color: '#444', fontSize: '14px', border: 'none' }}>{row.service}</td>
                                <td style={{ padding: '20px', color: '#444', fontSize: '14px', border: 'none' }}>{row.billing}</td>
                                <td style={{ padding: '20px', color: '#444', fontSize: '14px', border: 'none' }}>{row.charge}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ValueAddedServices;