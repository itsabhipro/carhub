function calculateCarRent(city_mpg:number,year:number){
    const basePricePerDay = 50;
    const milageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg*milageFactor;
    const ageRage = (new Date().getFullYear()-year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRage;
    return rentalRatePerDay.toFixed(0);
}
export default calculateCarRent;