let calculate=localStorage.getItem('calculate') || '';
calculation();
function pickNumber(number) {
    calculate+=number;
    localStorage.setItem('calculate',calculate);
    calculation();
}
function calculation() {
    document.querySelector('.watch')
        .innerHTML = `${calculate}`;
}

