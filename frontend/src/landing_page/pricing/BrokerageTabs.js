import React, { useState } from 'react';
import Table from './Table';

const data = {
    Equity: {
        columns: ['Equity delivery', 'Equity intraday', 'F&O - Futures', 'F&O - Options'],
        rows: [
            {
                label: 'Brokerage',
                values: [
                    'Zero Brokerage',
                    '0.03% or ₹20/executed order whichever is lower',
                    '0.03% or ₹20/executed order whichever is lower',
                    'Flat ₹20 per executed order',
                ],
            },
            {
                label: 'STT/CTT',
                values: [
                    '0.1% on buy & sell',
                    '0.025% on the sell side',
                    '0.05% on the sell side',
                    '• 0.15% of the intrinsic value on options that are bought and exercised\n• 0.15% on sell side (on premium)',
                ],
            },
            {
                label: 'Transaction charges',
                values: [
                    'NSE: 0.00307%\nBSE: 0.00375%',
                    'NSE: 0.00307%\nBSE: 0.00375%',
                    'NSE: 0.00183%\nBSE: 0',
                    'NSE: 0.03553% (on premium)\nBSE: 0.0325% (on premium)',
                ],
            },
            {
                label: 'GST',
                values: [
                    '18% on (brokerage + SEBI charges + transaction charges)',
                    '18% on (brokerage + SEBI charges + transaction charges)',
                    '18% on (brokerage + SEBI charges + transaction charges)',
                    '18% on (brokerage + SEBI charges + transaction charges)',
                ],
            },
            {
                label: 'SEBI charges',
                values: ['₹10 / crore', '₹10 / crore', '₹10 / crore', '₹10 / crore'],
            },
            {
                label: 'Stamp charges',
                values: [
                    '0.015% or ₹1500 / crore on buy side',
                    '0.003% or ₹300 / crore on buy side',
                    '0.002% or ₹200 / crore on buy side',
                    '0.003% or ₹300 / crore on buy side',
                ],
            },
        ],
    },
    Currency: {
        columns: ['Currency futures', 'Currency options'],
        rows: [
            { label: 'Brokerage', values: ['0.03% or ₹20/executed order whichever is lower', '₹20/executed order'] },
            { label: 'STT/CTT', values: ['No STT', 'No STT'] },
            { label: 'Transaction charges', values: ['NSE: 0.00035%\nBSE: 0.00045%', 'NSE: 0.0311%\nBSE: 0.001%'] },
            { label: 'GST', values: ['18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)'] },
            { label: 'SEBI charges', values: ['₹10 / crore', '₹10 / crore'] },
            { label: 'Stamp charges', values: ['0.0001% or ₹10 / crore on buy side', '0.0001% or ₹10 / crore on buy side'] },
        ],
    },
    Commodity: {
        columns: ['Commodity futures', 'Commodity options'],
        rows: [
            { label: 'Brokerage', values: ['0.03% or ₹20/executed order whichever is lower', '₹20/executed order'] },
            { label: 'STT/CTT', values: ['0.01% on sell side (Non-Agri)', '0.05% on sell side'] },
            { label: 'Transaction charges', values: ['MCX: 0.0021%\nNSE: 0.0001%', 'MCX: 0.0418%\nNSE: 0.001%'] },
            { label: 'GST', values: ['18% on (brokerage + SEBI charges + transaction charges)', '18% on (brokerage + SEBI charges + transaction charges)'] },
            { label: 'SEBI charges', values: ['Agri: ₹1 / crore\nNon-agri: ₹10 / crore', '₹10 / crore'] },
            { label: 'Stamp charges', values: ['0.002% or ₹200 / crore on buy side', '0.003% or ₹300 / crore on buy side'] },
        ],
    },
};

const TABS = ['Equity', 'Currency', 'Commodity'];

function BrokerageTabs() {
    const [activeTab, setActiveTab] = useState('Equity');
    const [hoveredTab, setHoveredTab] = useState(null);
    const current = data[activeTab];

    const getTabStyle = (tab) => ({
        fontSize: '25px',
        fontWeight: '400',           
        padding: '10px 28px',
        background: hoveredTab === tab && activeTab !== tab ? '#f0f0f0' : 'none',
        border: 'none',
        borderBottom: activeTab === tab ? '3px solid #387ed1' : '3px solid transparent',
        color: activeTab === tab ? '#333' : '#387ed1',
        cursor: 'pointer',
       
        transition: 'all 0.2s ease',
    });

    return (
        <div className='container mt-0   ' style={{marginLeft:"200px", paddingRight:"200px"}}>
            <div style={{ display: 'flex', borderBottom: '1px solid #dee2e6' }}>
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        onMouseEnter={() => setHoveredTab(tab)}
                        onMouseLeave={() => setHoveredTab(null)}
                        style={getTabStyle(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='mt-3' >
                <Table columns={current.columns} rows={current.rows} />
            </div>
            <p className='text-center fs-4 mt-4 '><a href='Calculate your costs upfront' style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</p>
        </div>
    );
}

export default BrokerageTabs;