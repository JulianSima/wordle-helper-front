import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Login from './Login';
import Dictionary from './Dictionary';
import Signup from './Signup';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from "./theme";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={customTheme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/dictionary" element={<PrivateRoute><Dictionary /></PrivateRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    )