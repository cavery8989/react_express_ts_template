import * as React from 'react';

import './hello.css'

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1 className="hello">Hello {props.compiler} from {props.framework}!</h1> 