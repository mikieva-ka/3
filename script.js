const input1 = document.getElementById('1')
const input2 = document.getElementById('2')
const btn = document.getElementById('sum')
const output = document.getElementById('output')

btn.addEventListener('click', (e) => {e.preventDefault()
    const numberOrNan1 = Number(input1.value)
    const numberOrNan2 = Number(input2.value)
    let result =''

    if (isNaN(numberOrNan1) && isNaN(numberOrNan2)){
        result='Невалидные значения в обоих полях'
    }

    if (isNaN(numberOrNan1) && !isNaN(numberOrNan2)){
        result='Невалидные значения в 1 поле'
    }

    if (!isNaN(numberOrNan1) && isNaN(numberOrNan2)){
        result='Невалидные значения во 2 поле'
    }

    if (!isNaN(numberOrNan1) && !isNaN(numberOrNan2)){
        result=`Результат=${numberOrNan1 + numberOrNan2}`
    }

    output.innerText=result
})