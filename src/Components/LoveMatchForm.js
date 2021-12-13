function LoveMatchForm() {
    const generateMatchPercentage = (event) => {
        event.preventDefault();

        console.log(event.target[0].value);
        console.log(event.target[1].value);

        //Reset values
        event.target[0].value = "";
        event.target[1].value = "";
    }

    return (
        <form onSubmit={generateMatchPercentage}>
            <label htmlFor="firstMatchName">Your Name</label>
            <input type="text" id="firstMatchName" />

            <label htmlFor="secondMatchName">Your love</label>
            <input type="text" id="secondMatchName" />

            <button type="submit">Check Match</button>
        </form>
    )
}

export default LoveMatchForm
