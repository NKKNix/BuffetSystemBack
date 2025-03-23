/**
 * @swagger
 * /table:
 *   get:
 *     summary: Get all tables
 *     tags:
 *       - Table
 *     responses:
 *       200:
 *         description: A list of tables
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   TableNumber:
 *                     type: string
 *                     example: "4"
 *                   capacity:
 *                     type: string
 *                     example: "4"
 *                   status:
 *                     type: string
 *                     example: Available
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-03-23T14:00:00.000Z
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-03-23T15:30:00.000Z
 *
 *   post:
 *     summary: Create a new table
 *     tags:
 *       - Table
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - TableNumber
 *               - capacity
 *               - status
 *             properties:
 *               TableNumber:
 *                 type: string
 *                 example: "4"
 *               capacity:
 *                 type: string
 *                 example: "4"
 *               status:
 *                 type: string
 *                 example: Available
 *     responses:
 *       201:
 *         description: Table created successfully
 *
 * /table/{id}:
 *   put:
 *     summary: Update a table
 *     tags:
 *       - Table
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the table to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TableNumber:
 *                 type: string
 *                 example: "5"
 *               capacity:
 *                 type: string
 *                 example: "6"
 *               status:
 *                 type: string
 *                 example: Unavailable
 *     responses:
 *       200:
 *         description: Table updated successfully
 *
 *   delete:
 *     summary: Delete a table
 *     tags:
 *       - Table
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the table to delete
 *     responses:
 *       200:
 *         description: Table deleted successfully
 * 
 * 
 * /qrcode/table/{id}:
 *   get:
 *     summary: Generate QR code for a table
 *     tags:
 *       - Table
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the table to generate QR code for
 *     responses:
 *       200:
 *         description: QR code generated successfully
 */
