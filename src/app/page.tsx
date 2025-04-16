export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Evrika Smart</h1>
      <a href="https://cloud.mail.ru/public/QVvc/oWibZJwgk">
        <button style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
         Скачать Evrika Smart
        </button>
      </a>
    </main>
  );
}