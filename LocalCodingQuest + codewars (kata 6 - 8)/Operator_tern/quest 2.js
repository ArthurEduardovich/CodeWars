const describeAge = (age) => {
    let status = '';
    age <= 12?status='kid':age<=17?status='teenager':age<=64?status='adult':status ='elderly'
    return`You're a(n) ${status}`
}