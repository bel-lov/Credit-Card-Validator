export default function validCards(value) {
    if (/(^4)\d{16}/.test(value)) {
        return '.visa';
    } if (/(^5[1-5])\d{16}/.test(value)) {
        return '.master';
    } if (/(^3[47])\d{16}/.test(value)) {
        return '.amex';
    } if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
        return '.jcb';
    } if (/(^2||6)\d{16}/.test(value)) {
        return '.mir';
    } if (/^6(?:011|5)/.test(value)) {
        return '.discover';
    }
    return null;
}