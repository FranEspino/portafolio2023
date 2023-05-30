import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { useDimension } from '../../src/hooks/useDimension';
import styles from '../../styles/Home.module.css'
import theme from "prism-react-renderer/themes/nightOwl";

export const Codepost = ({children}) => {
    const { width } = useDimension();

    return (
        <Highlight {...defaultProps} theme={theme} code={children} language="javascript" >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.Pre} style={style} >
            {tokens.map((line, i) => (
              <div className={styles.Line} key={i} {...getLineProps({ line, key: i })} >
                <span className={styles.LineNo}>{i + 1}</span>
                <span  className={styles.LineContent} style={(width > 700) ? { fontSize: 18, fontWeight: 'bold' } : { fontSize: 12, fontWeight: 'bold' }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
}
