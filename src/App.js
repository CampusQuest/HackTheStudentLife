// Filename - App.js

import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import HomePage from './components/homepage';
import ARPage from './components/camera';
import SignIn1Screen from './components/signin/SignIn1';
import SignIn2Screen from './components/signin/SignIn2';
import SignIn3Screen from './components/signin/SignIn3';
import Registration from "./components/signin/Registration";
import DashBoard from "./DashBoard";
import Events from "./components/events";
import Quiz from "./components/quiz/quiz";
import Result from "./components/result/result";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<SignIn1Screen />}
                    />
                    <Route
                        path="/signin2"
                        element={<SignIn2Screen />}
                    />
                    <Route
                        path="/signin3"
                        element={<SignIn3Screen />}
                    />
                    <Route
                        path="/registration"
                        element={<Registration />}
                    />
                    <Route
                        path="/dashboard"
                        element={<DashBoard />}
                    />
                    <Route
                        path="/camera"
                        element={<ARPage />}
                    />
                    <Route
                        path="/events"
                        element={<Events />}
                    />
                    <Route
                        path="/quiz"
                        element={<Quiz />}
                    />
                    <Route
                        path="/result"
                        element={<Result />}
                    />
                    

                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
