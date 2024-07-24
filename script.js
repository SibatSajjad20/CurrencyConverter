let out = document.getElementById('out');
        let output = document.getElementById('output');
        let btn = document.getElementById('btn');
        let input = document.getElementById('input');
        let option1 = document.getElementById('option1');
        let option2 = document.getElementById('option2');

        function checkInput() {
            if (input.value === '') {
                out.innerHTML = "Please enter a Value";
                out.style.color = 'red';
                return false;
            }
            if (option1.value === "default" || option2.value === 'default') {
                out.innerHTML = 'Please select a currency';
                out.style.color = 'red';
                return false;
            }
            return true;
        }

        function CalCurrency() {
            const rates = {
                'PKR': { 'PKR': 1, 'INR': 0.13, 'AED': 0.013, 'USD': 0.0036 },
                'INR': { 'PKR': 3.33, 'INR': 1, 'AED': 0.044, 'USD': 0.012 },
                'AED': { 'PKR': 75.84, 'INR': 22.79, 'AED': 1, 'USD': 0.27 },
                'USD': { 'PKR': 278.57, 'INR': 83.72, 'AED': 3.67, 'USD': 1 }
            };

            const fromCurrency = option1.value.trim();
            const toCurrency = option2.value.trim();
            const amount = parseFloat(input.value.trim());

            if (!isNaN(amount) && rates[fromCurrency] && rates[fromCurrency][toCurrency] !== undefined) {
                const convertedAmount = amount * rates[fromCurrency][toCurrency];
                out.innerHTML = "Converted Amount";
                output.innerHTML = convertedAmount.toFixed(2);
                out.style.color = 'black';
            } else {
                out.innerHTML = "Invalid Conversion";
                out.style.color = 'red';
            }
        }

        btn.addEventListener('click', function() {
            if (checkInput()) {
                CalCurrency();
            }
        });