const pool = require('../../dataBase');
const queries = require('./queries');


const getPriceDetails = (req, res) => {
    pool.query(queries.getPriceDetails, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};


const calculateDeliveryCost = (req, res) => {
    let { zone, organization_id, total_distance, item_type } = req.body;

    pool.query(queries.getPricingDetailsForCalculation, [organization_id, zone], (error, results) => {
        if (error) throw error;
        let totalPrice = 0;

        if (results.rows.length > 0) {
            let { base_distance_in_km, fix_price } = results.rows[0];

            let fixPrice = parseFloat(fix_price);
            let totalDistance = total_distance; 
            let baseDistance = parseInt(base_distance_in_km); 

            if (totalDistance <= baseDistance) {
                totalPrice = fixPrice;
            } else {
                const additionalDistance = totalDistance - baseDistance;
                if (item_type === 'perishable') {
                    totalPrice = fixPrice + additionalDistance * 1.5;
                } else {
                    totalPrice = fixPrice + additionalDistance * 1;
                }
            }
        }
        res.json({ total_price: totalPrice });
    })
}

module.exports = {
    calculateDeliveryCost,
    getPriceDetails,
}