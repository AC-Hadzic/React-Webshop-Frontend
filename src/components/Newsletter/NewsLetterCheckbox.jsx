function NewsLetterCheckbox({ dataCollectText, acceptText }) {
    return (
        <>
            <input type="checkbox" name="obrada_podataka" id="obrada_podataka" />
            <label htmlFor="obrada_podataka">
                {dataCollectText}
            </label>
            <br />
            <input type="checkbox" name="check_newsletter" id="check_newsletter" required />
            <label htmlFor="check_newsletter">
                {acceptText}
            </label>
        </>
    )


}

export { NewsLetterCheckbox };