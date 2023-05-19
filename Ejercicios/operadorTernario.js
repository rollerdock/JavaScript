const boleto = 'vip';

const codigodeAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR-456-789';

// ! Si quiero poner solo un valor y no quiero poner segundo valor (else)
// ! tengo que poner los dos puntos y dejar las comillas asi : 
// * const codigodeAcceso = (boleto === 'vip') ? 'VIP-123-456' : '';

console.log(codigodeAcceso);

boleto === 'vip' ? console.log('Tu voleto es Vip') : console.log('Tu voleto es regular');

