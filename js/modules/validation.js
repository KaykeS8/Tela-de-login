export default function initValidationLogin() {
    const email = document.querySelector('#email')
    function handleChangeEmail(event) {
        const email = event.target.value
        const target = event.target
        console.log(email)
        if (target.checkValidity()) {
            target.setAttribute('data-check', 'valido')
        } else {
            target.setAttribute('data-check', 'invalido')
        }
    }

    email.addEventListener('change', handleChangeEmail)

}

