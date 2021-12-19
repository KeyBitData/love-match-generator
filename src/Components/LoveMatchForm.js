const LoveMatchForm = ({onSubmit, firstName, secondName}) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstMatchName">Your Name</label>
            <input type="text" id="firstMatchName" />

            <label htmlFor="secondMatchName">Your love</label>
            <input type="text" id="secondMatchName" />

            <button type="submit">Check Match</button>
        </form>
    )
}

export default LoveMatchForm
