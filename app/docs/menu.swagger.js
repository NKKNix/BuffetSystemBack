/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Get all menu
 *     tags:
 *       - Menu
 *     responses:
 *       200:
 *         description: A list of menu
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
 *                   name:
 *                     type: string
 *                     example: ไอติม
 *                   category:
 *                     type: integer
 *                     example: 1
 *                   description:
 *                     type: string
 *                     example: ไอติมหวานมัน
 *                   available:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-03-16T17:34:53.774Z
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-03-19T21:35:30.876Z
 *   post:
 *     summary: Create a new menu item
 *     tags:
 *       - Menu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - description
 *               - available
 *             properties:
 *               name:
 *                 type: string
 *                 example: ไอติม
 *               category:
 *                 type: integer
 *                 example: 1
 *               description:
 *                 type: string
 *                 example: ไอติมหวานมัน
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Menu created successfully
 *
 * /menu/{id}:
 *   put:
 *     summary: Update a menu item
 *     tags:
 *       - Menu
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the menu item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: ไอติมแก้ไข
 *               category:
 *                 type: integer
 *                 example: 2
 *               description:
 *                 type: string
 *                 example: ไอติมรสใหม่
 *               available:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Menu updated successfully
 *
 *   delete:
 *     summary: Delete a menu item
 *     tags:
 *       - Menu
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the menu item to delete
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 */
