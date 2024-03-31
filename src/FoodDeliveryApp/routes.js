
/**
 * @swagger
 * components:
 *   schemas:
 *     DeliveryRequest:
 *       type: object
 *       properties:
 *         zone:
 *           type: string
 *           description: The delivery zone (e.g., 'central', 'suburb').
 *         organization_id:
 *           type: integer
 *           description: The ID of the organization.
 *         total_distance:
 *           type: integer
 *           description: The total distance for delivery in kilometers.
 *         item_type:
 *           type: string
 *           enum: [perishable, non-perishable]
 *           description: The type of item ('perishable' or 'non-perishable').
 *       required:
 *         - zone
 *         - organization_id
 *         - total_distance
 *         - item_type
 *
 *     DeliveryResponse:
 *       type: object
 *       properties:
 *         total_price:
 *           type: number
 *           description: The total delivery cost in euros.
 * 
 *     PricingInfo:
 *       type: object
 *       properties:
 *         organization_id:
 *           type: integer
 *           description: The Delivery organization ID.
 *         item_id:
 *           type: integer
 *           description: The ID of the item.
 *         zone:
 *           type: string
 *           description: The delivery zone.
 *         base_distance_in_km:
 *           type: integer
 *           description: The base distance for pricing calculations (in kilometers).
 *         km_price:
 *           type: number
 *           description: The price per kilometer for deliveries within this zone.
 *         fix_price:
 *           type: number
 *           description: The fixed price for deliveries within this zone.
 */

const { Router } = require("express");
const controller = require("./controller");

const router = Router();


/**
 * @swagger
 * /api/v1/fooddeliveryapp/calculate-cost:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculate the total delivery cost based on various factors such as zone, organization, distance, and item type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeliveryRequest'
 *     responses:
 *       200:
 *         description: Successful response with the total delivery cost
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeliveryResponse'
 */
router.post("/calculate-cost", controller.calculateDeliveryCost);



/**
 * @swagger
 * /api/v1/fooddeliveryapp/:
 *   get:
 *     summary: Get price details
 *     description: Retrieve details of pricing for food delivery.
 *     responses:
 *       200:
 *         description: Successful response with pricing details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PricingInfo'
 */
router.get("/", controller.getPriceDetails);

module.exports = router;