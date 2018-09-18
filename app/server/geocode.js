const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

 const geocode = (address) => {
    return fetch(URL + address).then(res => res.json());
}
export default geocode;