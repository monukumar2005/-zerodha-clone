import React, { useState } from 'react';
import Hero from './Hero';

const categories = [
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='12' r='10' />
                <line x1='12' y1='8' x2='12' y2='16' />
                <line x1='8' y1='12' x2='16' y2='12' />
            </svg>
        ),
        title: 'Account Opening',
        items: ['Resident individual', 'Minor', 'Non Resident Indian (NRI)', 'Company, Partnership, HUF and LLP', 'Glossary'],
    },
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='8' r='4' />
                <circle cx='12' cy='12' r='10' />
            </svg>
        ),
        title: 'Your Zerodha Account',
        items: ['Your Profile', 'Account modification', 'Client Master Report (CMR) and Depository Participant (DP)', 'Nomination', 'Transfer and conversion of securities'],
    },
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='12' r='10' />
                <polyline points='15,9 9,12 15,15' />
            </svg>
        ),
        title: 'Kite',
        items: ['IPO', 'Trading FAQs', 'Margin Trading Facility (MTF) and Margins', 'Charts and orders', 'Alerts and Nudges', 'General'],
    },
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='12' r='10' />
                <text x='12' y='16' textAnchor='middle' fontSize='11' fill='#387ed1' stroke='none'>₹</text>
            </svg>
        ),
        title: 'Funds',
        items: ['Add money', 'Withdraw money', 'Add bank accounts', 'eMandates'],
    },
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='12' r='10' />
                <circle cx='12' cy='12' r='3' />
                <circle cx='12' cy='12' r='6' />
            </svg>
        ),
        title: 'Console',
        items: ['Portfolio', 'Corporate actions', 'Funds statement', 'Reports', 'Profile', 'Segments'],
    },
    {
        icon: (
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#387ed1' strokeWidth='1.5'>
                <circle cx='12' cy='12' r='10' />
                <circle cx='12' cy='12' r='4' strokeDasharray='2 2' />
            </svg>
        ),
        title: 'Coin',
        items: ['Mutual funds', 'National Pension Scheme (NPS)', 'Fixed Deposit (FD)', 'Features on Coin', 'Payments and Orders', 'General'],
    },
];

const quickLinks = [
    'Track account opening',
    'Track segment activation',
    'Intraday margins',
    'Kite user manual',
    'Learn how to create a ticket',
];

const announcements = [
    'Current Takeovers and Delisting – June 2026',
    'Surveillance measure on scrips - June 2026',
];

function AccordionItem({ icon, title, items }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            border: '1px solid #dde3ea',
            borderRadius: '4px',
            marginBottom: '10px',
            backgroundColor: '#fff',
            boxShadow: 'none',
            marginLeft:"50px"
        }}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                    borderBottom: open ? '1px solid #dde3ea' : 'none',
                }}
            >
                <div style={{
                    backgroundColor: '#eef3fb',
                    padding: '16px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    borderRadius: '3px 0 0 3px',
                }}>
                    {icon}
                </div>
                <span style={{ fontSize: '18px', color: '#333', fontWeight: '500', flex: 1, padding: '18px 20px' }}>
                    {title}
                </span>
                <span style={{ paddingRight: '20px', color: '#387ed1', fontSize: '18px'  }}>
                    {open ? '∧' : '∨'}
                </span>
            </div>

            {open && (
                <div style={{ padding: '12px 20px 20px 70px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {items.map((item, i) => (
                            <li key={i} style={{ padding: '9px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: '#387ed1', fontSize: '20px', lineHeight: 1,  }}>•</span>
                                <a href='#' style={{ color: '#387ed1', fontSize: '17px', textDecoration: 'none' }}
                                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                                    onMouseLeave={e => e.target.style.textDecoration = 'none'}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function SupportPage() {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Hero />

            <div className='container mt-5 mb-5'>
                <div className='row'>

                    {/* Left: accordion only */}
                    <div className='col-8'>
                        {categories.map((cat, i) => (
                            <AccordionItem key={i} icon={cat.icon} title={cat.title} items={cat.items} />
                        ))}
                    </div>

                    {/* Right: sidebar */}
                    <div className='col-4' style={{ paddingLeft: '28px' }}>

                        {/* Announcement box */}
                        <div style={{
                            borderLeft: '5px solid #f5a623',
                            backgroundColor: '#fdf6ec',
                            padding: '18px 20px',
                            marginBottom: '20px',
                        }}>
                            <ul style={{ listStyle: 'disc', paddingLeft: '16px', margin: 0 }}>
                                {announcements.map((item, i) => (
                                    <li key={i} style={{ marginBottom: i < announcements.length - 1 ? '14px' : 0 }}>
                                        <a href='#' style={{ color: '#387ed1', fontSize: '14px', lineHeight: '1.5', textDecoration: 'none' }}
                                            onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                                            onMouseLeave={e => e.target.style.textDecoration = 'none'}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick links */}
                        <div style={{ border: '1px solid #e4e4e4', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ backgroundColor: '#f0f0f0', padding: '13px 18px' }}>
                                <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>Quick links</span>
                            </div>
                            {quickLinks.map((link, i) => (
                                <div key={i} style={{ padding: '13px 18px', borderTop: '1px solid #eee' }}>
                                    <a href='#' style={{ color: '#387ed1', fontSize: '14px', textDecoration: 'none' }}
                                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                                        onMouseLeave={e => e.target.style.textDecoration = 'none'}
                                    >
                                        {i + 1}. {link}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SupportPage;