import React, {useEffect, useState} from 'react'
import "./Loader.css";

function Loader() {

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(0);
    
    
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, [state])
    

  return (
    <div className='container'>
        {loading ? (
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        ) : (
            <div className="main-content">
                <h1>Hello World!</h1>
                <p>
                    This is a demo Project to show how to add animated loading with React.
                </p>
                <div className="button">
                    <button className="btn get-quote" onClick={() => setState(state+1)}>
                        Generate Quote
                    </button>
                </div>
                <div className="quote-section">
                    <blockquote className='quote'>{}</blockquote> -{' '}
                    <span className='author'>{}</span>
                </div>
            </div>
        )}
      
    </div>
  )
}

export default Loader;
