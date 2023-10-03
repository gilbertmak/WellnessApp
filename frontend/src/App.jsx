import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {WebAppProvider} from '@vkruglikov/react-telegram-web-app';
import LandingPage from "./pages/landing-page.jsx";
import GetTested from "./pages/get-tested.jsx";
import DoctorSelection from "./pages/doctor-selection.jsx";
import About from "./pages/doctor-about.jsx";
import PatientInformation from "./pages/patient-info-form.jsx";
import Resume from "./pages/booking-resume.jsx";
import AppointmentBooking from "./pages/appointment-booking.jsx";
import RegistrationConfirmation from "./pages/successful-booking.jsx";
import ClinicSelection from "./pages/clinic-selection.jsx";

const App = () => {
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            // Alternatively to what can be set with react-telegram-web-app, you can directly set the following properties:
            window.Telegram.WebApp.expand();
        }
    }, []);

    return (

        <WebAppProvider
            options={{
                smoothButtonsTransition: true,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/see_a_doctor" element={<DoctorSelection/>}/>
                    <Route path="/get_tested" element={<GetTested/>}/>
                    <Route path="/doctor/:doctor_id" element={<About/>}/>
                    <Route path="/booking/appointment/:doctor_id" element={<AppointmentBooking/>}/>
                    <Route path="/booking/diagnostics/:diagnostic_id" element={<ClinicSelection/>}/>
                    <Route path="/booking/patient-info-form" element={<PatientInformation/>}/>
                    <Route path="/booking/confirmation" element={<Resume/>}/>
                    <Route path="/successful_booking" element={<RegistrationConfirmation/>}/>
                </Routes>
            </BrowserRouter>
        </WebAppProvider>
    );
};

export default App;
