import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Default preset prize options
  const defaultPrizes = [
    '🎁 200 Peso Cash',
    '🎁 200 Peso Cash',
    '🎁 200 Peso Cash',
    '🎁 200 Peso Cash',
    '🎁 300 Peso Cash',
    '🎁 300 Peso Cash',
    '🎁 400 Peso Cash',
    '🎁 400 Peso Cash',
    '🎁 500 Peso Cash',
    '🎁 700 Peso Cash',
  ];

  const [prizeOptions, setPrizeOptions] = useState(defaultPrizes);
  const [envelopes, setEnvelopes] = useState([]);
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);
  const [revealedEnvelopes, setRevealedEnvelopes] = useState(new Set());
  const [showPrizeEditor, setShowPrizeEditor] = useState(false);
  const [editedPrizes, setEditedPrizes] = useState(defaultPrizes.join('\n'));
  const [envelopeCount, setEnvelopeCount] = useState(6);
  const [showDonation, setShowDonation] = useState(false);

  // Detect screen size and set envelope count
  useEffect(() => {
    const updateEnvelopeCount = () => {
      setEnvelopeCount(window.innerWidth >= 768 ? 8 : 6);
    };

    updateEnvelopeCount();
    window.addEventListener('resize', updateEnvelopeCount);
    return () => window.removeEventListener('resize', updateEnvelopeCount);
  }, []);

  // Initialize envelopes with randomized prizes
  useEffect(() => {
    const shuffled = [...prizeOptions].sort(() => Math.random() - 0.5);
    const initialEnvelopes = Array.from({ length: envelopeCount }, (_, i) => ({
      id: i + 1,
      prize: shuffled[i % shuffled.length]
    }));
    setEnvelopes(initialEnvelopes);
  }, [prizeOptions, envelopeCount]);

  const handleEnvelopeClick = (envelope) => {
    if (revealedEnvelopes.has(envelope.id)) {
      return; // Already revealed
    }

    if (selectedEnvelope?.id === envelope.id) {
      // Second click - reveal the prize
      setRevealedEnvelopes(new Set([...revealedEnvelopes, envelope.id]));
    } else {
      // First click - select the envelope
      setSelectedEnvelope(envelope);
    }
  };

  const resetGame = () => {
    const shuffled = [...prizeOptions].sort(() => Math.random() - 0.5);
    const newEnvelopes = Array.from({ length: envelopeCount }, (_, i) => ({
      id: i + 1,
      prize: shuffled[i % shuffled.length]
    }));
    setEnvelopes(newEnvelopes);
    setSelectedEnvelope(null);
    setRevealedEnvelopes(new Set());
  };

  const handleSetPrizes = () => {
    const newPrizes = editedPrizes
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);
    
    if (newPrizes.length === 0) {
      alert('Please enter at least one prize!');
      return;
    }
    
    setPrizeOptions(newPrizes);
    setShowPrizeEditor(false);
    
    // Reset the game with new prizes
    const shuffled = [...newPrizes].sort(() => Math.random() - 0.5);
    const newEnvelopes = Array.from({ length: envelopeCount }, (_, i) => ({
      id: i + 1,
      prize: shuffled[i % shuffled.length]
    }));
    setEnvelopes(newEnvelopes);
    setSelectedEnvelope(null);
    setRevealedEnvelopes(new Set());
  };

  const handleCancelEdit = () => {
    setEditedPrizes(prizeOptions.join('\n'));
    setShowPrizeEditor(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">🧧 Digital Ampao 🧧</h1>
      </header>
      
      <div className="container">
        <p className="subtitle">Pick an envelope and click again to reveal your prize!</p>
        
        <div className={`envelopes-container ${selectedEnvelope ? 'focused' : ''}`}>
          {envelopes.map((envelope) => {
            const isSelected = selectedEnvelope?.id === envelope.id;
            const isRevealed = revealedEnvelopes.has(envelope.id);
            const isHidden = selectedEnvelope && !isSelected;
            
            return (
              <div
                key={envelope.id}
                className={`envelope-wrapper ${isSelected ? 'selected' : ''} ${isRevealed ? 'revealed' : ''} ${isHidden ? 'hidden' : ''}`}
                onClick={() => handleEnvelopeClick(envelope)}
              >
                <div className="envelope">
                  <div className="envelope-number">{envelope.id}</div>
                  {!isRevealed ? (
                    <>
                      <div className="envelope-flap"></div>
                      <div className="envelope-body">
                        <div className="envelope-decoration">
                          <div className="gold-symbol">福</div>
                          <div className="gold-pattern">
                            <div className="pattern-line"></div>
                            <div className="pattern-line"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="prize-reveal">
                      <div className="prize-content">
                        <div className="prize-sparkle">✨</div>
                        <div className="prize-text">{envelope.prize}</div>
                        <div className="prize-sparkle">✨</div>
                      </div>
                    </div>
                  )}
                </div>
                {isSelected && !isRevealed && (
                  <div className="tap-hint">👆 Tap again to open!</div>
                )}
              </div>
            );
          })}
        </div>

        {revealedEnvelopes.size > 0 && (
          <button className="reset-button" onClick={resetGame}>
            🔄 Play Again
          </button>
        )}
        
        {!selectedEnvelope && (
          <button className="settings-button" onClick={() => setShowPrizeEditor(!showPrizeEditor)}>
            ⚙️ Set Prizes
          </button>
        )}

        {!selectedEnvelope && (
          <button className="donation-button" onClick={() => setShowDonation(true)}>
            ☕ Buy Me a Coffee
          </button>
        )}
      </div>

      {showPrizeEditor && (
        <div className="modal-overlay" onClick={handleCancelEdit}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCancelEdit}>✕</button>
            <h3>Edit Prize Options</h3>
            <p className="editor-hint">Enter one prize per line. Prizes will be randomly distributed.</p>
            <textarea
              className="prize-textarea"
              value={editedPrizes}
              onChange={(e) => setEditedPrizes(e.target.value)}
              rows={10}
              placeholder="Enter prizes, one per line..."
            />
            <div className="editor-buttons">
              <button className="save-button" onClick={handleSetPrizes}>
                ✓ Save & Apply
              </button>
              <button className="cancel-button" onClick={handleCancelEdit}>
                ✕ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDonation && (
        <div className="modal-overlay" onClick={() => setShowDonation(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDonation(false)}>✕</button>
            <h3>☕ Buy Me a Coffee</h3>
            <p className="editor-hint">Scan the QR code to support this project!</p>
            <div className="qr-container">
              <img src="/coffee.png" alt="Buy me a coffee QR code" className="qr-code" />
            </div>
            <p className="donation-thanks">Thank you for your support! 💖</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
