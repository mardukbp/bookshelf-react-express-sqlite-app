// Import deps
import React from 'react'
import ReactDOM from "react-dom/client";

// Import components
import { Bookshelf } from './components/bookshelf'

// Import styles
import './styles/styles.css'

// Find div container
const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Render Bookshelf component in the DOM
rootElement.render(<Bookshelf />)
