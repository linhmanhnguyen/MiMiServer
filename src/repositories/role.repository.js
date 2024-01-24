const connection =  require('../configs/MySQLConnect');
const roleModel = require('../models/role.model')

class RoleRepository {

    static async getAllRoles() {
        const query = `
            SELECT * FROM Roles;
        `
        const params = [];
        const result = await connection.query(query, params);

        const roles = [];

        for (const row of result) {
            const role = new roleModel(row.id, row.role_name);
            roles.push(role);
        }

        return roles;
    }

    static async getRolesByID(id) {
        const query = `
            SELECT * FORM Roles WHERE id = ?
        `
        const params = [id];
        const result = await connection.query(query, params);

        if (result === 0) {
            return null;
        }

        const role = new roleModel(result[0].id, result[0].role_name);
    }

}

module.exports = RoleRepository