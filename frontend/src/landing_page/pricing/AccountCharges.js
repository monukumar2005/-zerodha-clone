import React from 'react';

function AccountCharges() {
    const rows = [
        { account: 'Individual account', charge: 'FREE' },
        { account: 'Minor account', charge: 'FREE' },
        { account: 'NRI account', charge: '₹ 500' },
        { account: 'HUF account', charge: 'HUF_FREE' },
        { account: 'Partnership, LLP, and Corporate accounts (offline only)', charge: '₹ 500' },
    ];

    return (
        <div className='container ' style={{marginLeft:"200px", paddingRight:"200px", paddingTop:"100px"}}>
            <h4 className='text-muted' style={{ fontWeight: '600', fontSize: '25px', color: '#444', marginBottom: '24px' }}>
                Charges for account opening
            </h4>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>Type of account</th>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none', width: '300px' }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                                <td style={{ padding: '20px', color: '#444', fontSize: '14px', border: 'none' }}>{row.account}</td>
                                <td style={{ padding: '20px', border: 'none' }}>
                                    {row.charge === 'FREE' && (
                                        <span style={{ backgroundColor: '#5cb85c', color: '#fff', padding: '3px 10px', borderRadius: '3px', fontSize: '13px', fontWeight: '600' }}>FREE</span>
                                    )}
                                    {row.charge === 'HUF_FREE' && (
                                        <>
                                            <span style={{ backgroundColor: '#5cb85c', color: '#fff', padding: '3px 10px', borderRadius: '3px', fontSize: '13px', fontWeight: '600', marginRight: '8px' }}>FREE</span>
                                            <span style={{ color: '#444', fontSize: '14px' }}>(online) / ₹ 500 (offline)</span>
                                        </>
                                    )}
                                    {row.charge !== 'FREE' && row.charge !== 'HUF_FREE' && (
                                        <span style={{ color: '#444', fontSize: '14px' }}>{row.charge}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountCharges;