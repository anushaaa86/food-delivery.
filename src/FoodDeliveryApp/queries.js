
const getPricingDetailsForCalculation = "SELECT base_distance_in_km, km_price, fix_price FROM pricinginfo WHERE organization_id = $1 AND zone = $2";
const getPriceDetails = "SELECT * FROM pricinginfo";

module.exports = {
    getPricingDetailsForCalculation,
    getPriceDetails,
}