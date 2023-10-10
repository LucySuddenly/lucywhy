
import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import App from "./App.mdx";
import words from './words/words'
import styles from './styles'
const history = createBrowserHistory();


export default () => {
        return (
            <>
                <MDXProvider components={styles}>
                    <BrowserRouter history={history}>
                        <Routes>
                            <Route exact path="/*" element={<App/>} key="app"/>
                            {Object.keys(words).map((word) =>{
                                const Element = words[word]
                                return <Route path={"/" + word + "*"} element={<Element/>} key={word}/>
                            })}
                        </Routes>
                    </BrowserRouter>
                </MDXProvider>
            </>
        );
}

