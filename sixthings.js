document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const emoji = question.querySelector('.emoji');

        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                emoji.classList.remove('bg-red', 'bg-yellow', 'bg-green');
                if (radio.value === 'today') {
                    emoji.classList.add('bg-red');
                } else if (radio.value === 'in_my_life') {
                    emoji.classList.add('bg-yellow');
                } else if (radio.value === 'never') {
                    emoji.classList.add('bg-green');
                }
            });
        });
    });
});