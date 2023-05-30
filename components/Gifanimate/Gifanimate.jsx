import React from 'react'
import { useDimension } from '../../src/hooks/useDimension';

export const Gifanimate = ({url}) => {
    const { width } = useDimension();

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'default', pointerEvents: 'none'}}>
            <iframe src={url} style={(width>700) ? {width: '100vw', height: '60vh', marginTop: '3em' } :  {width: '100vw', height: '30vh', marginTop: '1em' }  }  frameBorder="0" className="giphy-embed" allowFullScreen>
                </iframe>
        </div>

    )
}
