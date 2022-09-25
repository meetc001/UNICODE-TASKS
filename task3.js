const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4936cc6279mshc29d7b253abbb5fp15dae5jsn93410114fbfe',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then((apidata) => {
        return apidata.json();
    })
    .then((actualdata) => {
        console.log(actualdata);
    })
    .catch((error) => {
        console.log(error);
    })




