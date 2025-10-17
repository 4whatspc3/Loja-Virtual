const requestAPI = async (urlAPI, setValue) => {
    try {
        const response = await fetch(`${urlAPI}`, {mode : 'cors'},)

        const data = await response.json();

        return setValue(data)
    } catch (err) {
        console.log("something went horribly wrong =/");
    }
}

export default requestAPI;