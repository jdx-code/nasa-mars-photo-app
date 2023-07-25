// Validating against blank value for Sol input
const validateForm = () => {    
    const sol = document.getElementById('sol')
    const regexPattern = /[0-9]/ig
    if(sol.value === ''){
        alert('You need to provide a Sol value')
        return false
    }    
    return true
}