import { useState } from 'react';
import LoveMatchForm from '../Components/LoveMatchForm';

function HomeView() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const generateMatchPercentage = (event) => {
        event.preventDefault();

        // set name states from the values in the input fields
        setFirstName(event.target[0].value);
        setSecondName(event.target[1].value);

        //Reset input field values
        event.target[0].value = "";
        event.target[1].value = "";
    }

    return (
        <div>
            <h1>Love Match generator</h1>
            <p>Get the percentual match of the love of your life. Type in the names of yourself and your potential crush.</p>

            <LoveMatchForm onSubmit={generateMatchPercentage} firstName={firstName} secondName={secondName} />

            {firstName} + {secondName}
        </div>
    )
}

export default HomeView
