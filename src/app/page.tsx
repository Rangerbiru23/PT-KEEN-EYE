'use client'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '2rem',
      padding: '1rem',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        position: 'relative',
        width: '6rem',
        height: '6rem'
      }}>
        <img
          src="/logo.svg"
          alt="PT KEEN EYE Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333'
      }}>
        PT KEEN EYE
      </h1>
      <p style={{
        fontSize: '1rem',
        color: '#666'
      }}>
        Website sedang dalam pengembangan
      </p>
    </div>
  )
}