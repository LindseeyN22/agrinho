function visita() {
    const width = 800;
    const heigth = 600;
    const left = (screen.width / 2) - (width / 2)
    const top = (screen.height / 2) - (heigth / 2)
    window.open ('visita.html', 'pagamento', 'width = ${width}, heigth = ${heigth}, top = ${top}, left = ${left}')
}