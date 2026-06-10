import React from 'react';

function DematAMC() {
    const rows = [
        { holdings: 'Up to ₹4 lakh', amc: 'FREE' },
        { holdings: '₹4 lakh – ₹10 lakh', amc: '₹100 per year + 18% GST, charged quarterly' },
        { holdings: 'Above ₹10 lakh', amc: '₹300 per year + 18% GST, charged quarterly' },
    ];

    return (
        <div className='container 'style={{marginLeft:"200px", paddingRight:"200px", paddingTop:"90px"}}>
            <h4 style={{ fontWeight: '600', fontSize: '25px', color: '#444', marginBottom: '30px'  }}>
                Demat AMC (Annual Maintenance Charge)
            </h4>
            <div style={{ borderLeft: '4px solid #387ed1', paddingLeft: '16px', marginBottom: '20px', backgroundColor: '#f8f9fa', padding: '12px 16px' }}>
                <span style={{ fontSize: '15px', color: '#444' }}>Free for first year *</span>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                From second year onwards, for BSDA accounts:
            </p>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>Value of holdings</th>
                            <th style={{ fontWeight: '600', padding: '16px 20px', color: '#333', textAlign: 'left', border: 'none' }}>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} style={{ borderTop: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                                <td style={{ padding: '20px', color: '#444', fontSize: '14px', border: 'none' }}>{row.holdings}</td>
                                <td style={{ padding: '20px', border: 'none' }}>
                                    {row.amc === 'FREE' ? (
                                        <span style={{ backgroundColor: '#5cb85c', color: '#fff', padding: '3px 10px', borderRadius: '3px', fontSize: '13px', fontWeight: '600' }}>FREE</span>
                                    ) : (
                                        <span style={{ color: '#444', fontSize: '14px' }}>{row.amc}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '16px' }}>
                For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
            </p>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>
                To learn more about BSDA, <a href='#' style={{ color: '#387ed1' }}>click here</a>. To learn more about AMC, <a href='#' style={{ color: '#387ed1' }}>click here</a>.
            </p>
        </div>
    );
}

export default DematAMC;