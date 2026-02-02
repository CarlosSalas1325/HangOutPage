import './Download.css';

const Download = () => {
  return (
    <section className="download" id="descargar">
      <div className="download-container">
        <div className="download-content">
          <h2 className="download-title">
            ¿Listo para hacer <span className="highlight">planes increíbles</span>?
          </h2>
          <p className="download-subtitle">
            Descarga HANG OUT gratis y comienza a conectar con personas 
            que comparten tus intereses.
          </p>
          
          <div className="download-buttons">
            <button className="store-button">
              <div className="store-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-label">Descargar en</span>
                <span className="store-name">App Store</span>
              </div>
            </button>
            
            <button className="store-button">
              <div className="store-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
              </div>
              <div className="store-text">
                <span className="store-label">Descargar en</span>
                <span className="store-name">Google Play</span>
              </div>
            </button>
          </div>
          
          <div className="download-qr">
            <div className="qr-code">
              <div className="qr-placeholder">
                <span>📱</span>
              </div>
            </div>
            <span className="qr-text">Escanea para descargar</span>
          </div>
        </div>
        
        <div className="download-decoration">
          <div className="floating-emoji emoji-1">🎉</div>
          <div className="floating-emoji emoji-2">🎸</div>
          <div className="floating-emoji emoji-3">☕</div>
          <div className="floating-emoji emoji-4">🎨</div>
          <div className="floating-emoji emoji-5">⚽</div>
        </div>
      </div>
    </section>
  );
};

export default Download;
