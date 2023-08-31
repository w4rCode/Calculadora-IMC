





// Selecionando o elemento 

const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */

    event.preventDefault();

    // Selecionando os elementos 

    const weight = document.getElementById('weight').value;

    const height = document.getElementById('height').value;

    // Calcula o Índice de Massa Corporal (IMC) dividindo o peso pela altura ao quadrado
    // O método toFixed(2) é usado para arredondar o resultado para 2 casas decimais

    const bmi = (weight / (height * height)).toFixed(2);

    // Verifica se o valor de BMI é um número válido (não é NaN)
    // E depois obtém a referência ao elemento HTML com o ID 'value'
    // Por ultimo iniciliza  uma variável vazia para armazenar a descrição do estado do peso

    if(!isNaN(bmi)){
        const value = document.getElementById('value');
        let description = '';

        // Adiciona a classe CSS 'attention' ao elemento referenciado pela variável 'value'

        value.classList.add('attention');

        // Remove a classe CSS 'hidden' do elemento referenciado pelo ID 'infos'

        document.getElementById('infos').classList.remove('hidden');
    
    // Verifica em qual faixa o IMC se encontra e atribui uma descrição apropriada

        if(bmi < 18.5){
            description = 'Cuidado! voce está abaixo do peso'
        }

        // Se o IMC estiver na faixa de 18.5 a 25 (inclusive), exibe a descrição de peso ideal

        else if(bmi >= 18.5 && bmi <= 25){
            description = 'Você esta no peso ideal'
            
            // Remove a classe 'attention' e adiciona a classe 'normal' ao elemento referenciado pela variável 'value'

            value.classList.remove ('attention');
            value.classList.add ('normal');
        }

            // Se o IMC estiver na faixa de 25.1 a 30 (inclusive), exibe a descrição de sobrepeso
            // Segue a mesma condição 

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        }

           // Se o IMC estiver na faixa de 30.1 a 35 (inclusive), exibe a descrição de obesidade moderada

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        }

          // Se o IMC estiver na faixa de 35.1 a 40 (inclusive), exibe a descrição de obesidade severa

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
        }

        // Se o IMC for maior do que 40, exibe a descrição de obesidade mórbida

        else {
            description = "Cuidado! Você está com obesidade morbida!";
        }

        // Atualiza o elemento visual com o IMC calculado, substituindo "." por ","

        value.textContent = bmi.replace('.', ',');

        // Atualiza o elemento com o ID 'description' com a descrição correspondente

        document.getElementById('description').textContent = description;
    }
    
});


// Adiciona evento de pressionar tecla ao elemento "form", depois verifica se a tecla pressionada é igual a "press"
//  Se a tecla "press" for pressionada, simula um clique no elemento com o ID "calculate"

form.addEventListener('keypress', function(event){
    if (event.key === 'press'){
        document.getElementById('#calculate').click();
    }
})



















