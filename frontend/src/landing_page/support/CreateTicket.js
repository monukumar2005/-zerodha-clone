import React, { useState } from 'react';

function CreateTicket() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        alert('Ticket submitted!');
    }

    return (
        <div className='container mt-5 mb-5'>
            <h4 style={{ fontWeight: '400', fontSize: '24px', color: '#444', marginBottom: '8px' }}>
                Create a ticket
            </h4>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '32px' }}>
                Can't find what you are looking for? Submit a support request.
            </p>

            <div style={{ maxWidth: '600px' }}>

                {/* Name */}
                <div className='mb-4'>
                    <label style={{ fontSize: '14px', color: '#555', marginBottom: '6px', display: 'block' }}>Full name</label>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Enter your full name'
                        style={{
                            width: '100%', padding: '10px 14px', fontSize: '14px',
                            border: '1px solid #ddd', borderRadius: '4px', outline: 'none', color: '#444',
                        }}
                    />
                </div>

                {/* Email */}
                <div className='mb-4'>
                    <label style={{ fontSize: '14px', color: '#555', marginBottom: '6px', display: 'block' }}>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        style={{
                            width: '100%', padding: '10px 14px', fontSize: '14px',
                            border: '1px solid #ddd', borderRadius: '4px', outline: 'none', color: '#444',
                        }}
                    />
                </div>

                {/* Phone */}
                <div className='mb-4'>
                    <label style={{ fontSize: '14px', color: '#555', marginBottom: '6px', display: 'block' }}>Phone number</label>
                    <input
                        type='text'
                        name='phone'
                        value={form.phone}
                        onChange={handleChange}
                        placeholder='Enter your phone number'
                        style={{
                            width: '100%', padding: '10px 14px', fontSize: '14px',
                            border: '1px solid #ddd', borderRadius: '4px', outline: 'none', color: '#444',
                        }}
                    />
                </div>

                {/* Subject */}
                <div className='mb-4'>
                    <label style={{ fontSize: '14px', color: '#555', marginBottom: '6px', display: 'block' }}>Subject</label>
                    <input
                        type='text'
                        name='subject'
                        value={form.subject}
                        onChange={handleChange}
                        placeholder='Brief description of your issue'
                        style={{
                            width: '100%', padding: '10px 14px', fontSize: '14px',
                            border: '1px solid #ddd', borderRadius: '4px', outline: 'none', color: '#444',
                        }}
                    />
                </div>

                {/* Description */}
                <div className='mb-4'>
                    <label style={{ fontSize: '14px', color: '#555', marginBottom: '6px', display: 'block' }}>Description</label>
                    <textarea
                        name='description'
                        value={form.description}
                        onChange={handleChange}
                        placeholder='Describe your issue in detail...'
                        rows={5}
                        style={{
                            width: '100%', padding: '10px 14px', fontSize: '14px',
                            border: '1px solid #ddd', borderRadius: '4px', outline: 'none',
                            color: '#444', resize: 'vertical',
                        }}
                    />
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: '#387ed1',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '11px 28px',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                    }}
                >
                    Submit ticket
                </button>
            </div>
        </div>
    );
}

export default CreateTicket;