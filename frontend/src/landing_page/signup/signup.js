import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSignup() {
    axios.post('http://localhost:3002/register', { name, email, password })
      .then((res) => {
        alert(res.data.message);
        window.location.href = 'http://localhost:3000/login';
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Something went wrong!');
      });
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.12)', width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src='https://zerodha.com/static/images/logo.svg' alt='Zerodha' style={{ height: '40px', marginBottom: '16px' }} />
          <h2 style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: '#1a1a2e' }}>Create an account</h2>
          <p style={{ margin: '8px 0 0', color: '#666', fontSize: '14px' }}>Start your investment journey today</p>
        </div>
        {error && (
          <div style={{ background: '#fff0f0', border: '1px solid #ffcccc', color: '#cc0000', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
            {error}
          </div>
        )}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Full Name</label>
          <input
            type='text'
            placeholder='John Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            onFocus={(e) => e.target.style.border = '1.5px solid #387ed1'}
            onBlur={(e) => e.target.style.border = '1.5px solid #e0e0e0'}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Email Address</label>
          <input
            type='email'
            placeholder='john@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            onFocus={(e) => e.target.style.border = '1.5px solid #387ed1'}
            onBlur={(e) => e.target.style.border = '1.5px solid #e0e0e0'}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>Password</label>
          <input
            type='password'
            placeholder='Min. 8 characters'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
            onFocus={(e) => e.target.style.border = '1.5px solid #387ed1'}
            onBlur={(e) => e.target.style.border = '1.5px solid #e0e0e0'}
          />
        </div>
        <button
          onClick={handleSignup}
          style={{ width: '100%', padding: '13px', backgroundColor: '#387ed1', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2d6ab8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#387ed1'}
        >
          Create Account
        </button>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
          Already have an account?{' '}
          <a href='/login' style={{ color: '#387ed1', fontWeight: '600', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
