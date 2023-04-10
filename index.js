document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#currencies').addEventListener('submit', function (event) {
        event.preventDefault()

        const base = document.getElementById('icurrency').value;
        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then(response => response.json())
            .then(data => {
                const amount = document.getElementById('amount-input').value;
                const currencies = data.rates;
                const result = amount * currencies[document.getElementById('ocurrency').value];
                document.getElementById('result').value = result.toFixed(2);
            })
            .catch(error => console.log(error))
    });
});      

