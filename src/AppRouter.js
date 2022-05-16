import React from "react"
import "./index.css"
import App from "./App"
import Login from "./pages/Login"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Box from "@mui/material/Box"
import Typograpy from "@mui/material/Typography"

function Copyright() {
    return (
        <Typograpy variant="body2" color="textSecondary" align="center">
            {"Copyrighy "}
                fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typograpy>
    )
}

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/login" element={ <Login />} />
                        <Route path="/" element={<App/>} />
                    </Routes>
                </Router>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        )
    }
}

export default AppRouter;