document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const startDateValue = startDateInput.value;
        const endDateValue = endDateInput.value;

        // Verifica se ambas as datas foram selecionadas
        if (startDateValue === "" || endDateValue === "") {
            resultDiv.textContent = "Por favor, selecione as duas datas.";
            return;
        }

        // Cria objetos Date
        const startDate = new Date(startDateValue);
        const endDate = new Date(endDateValue);

        // Verifica se a data inicial é maior que a final
        if (startDate > endDate) {
            resultDiv.textContent = "A data inicial não pode ser maior que a data final.";
            return;
        }

        // Calcula a diferença em milissegundos
        const differenceInMs = endDate.getTime() - startDate.getTime();

        // Converte milissegundos para dias
        const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

        // Exibe o resultado
        resultDiv.textContent = `A diferença entre as duas datas é de ${differenceInDays} dias.`;
    });
});