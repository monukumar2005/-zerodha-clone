import React from 'react';

function Hero() {
    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '40px 0 36px', }}>
            <div className='container '>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '38px', fontWeight: '660', color: '#333', margin: 0 ,marginLeft:"50px"}}>Support Portal</h1>
                    <button style={{
                        backgroundColor: '#387ed1',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 24px',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                    }}>
                        My tickets
                    </button>
                </div>

                {/* Search bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    marginLeft:"50px"
                }}>
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#999' strokeWidth='2' style={{ marginRight: '10px', flexShrink: 0 }}>
                        <circle cx='11' cy='11' r='7' />
                        <line x1='16.5' y1='16.5' x2='22' y2='22' />
                    </svg>
                    <input
                        type='text'
                        placeholder='Eg: How do I open my account, How do i activate F&O...'
                        style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: '#555', backgroundColor: 'transparent' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;