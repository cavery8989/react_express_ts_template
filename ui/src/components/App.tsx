import * as React from "react";
import { Hello } from './Hello/Hello';

// 'AppProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <Hello compiler="typescript" framework="React"/>
        )
    }
}