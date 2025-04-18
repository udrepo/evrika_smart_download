export default function Sales() {
    return (
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
      }}>
          <img src="/sales.svg" alt="Logo" className="w-30 h-30" />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '18px' }}>Evrika Sales</h1>
        <a href="http://oms.evrika.services/storage/eg_sales_v1.1.13.apk" target="_blank" rel="noopener noreferrer">
          <button style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
           Скачать Evrika Sales v.1.1.3
          </button>
        </a>
      </main>
    );
  }