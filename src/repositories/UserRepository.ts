import db from "../config/config-db";
import User from "../Dto/UserDto";
import Auth from "../Dto/authDto";

class UserRepository {

  static async add(user: User) {
    
    const sql =
      "INSERT INTO cliente (email, nombres, apellidos, direccion, telefono, password) VALUES (?, ?, ?, ?, ?, ?)";

    const values = [
      user.email,
      user.nombres,
      user.apellidos,
      user.direccion,
      user.telefono,
      user.password,
    ];

    return db.execute(sql, values);
  }

  static async login(auth: Auth) {
    const sql = "SELECT password FROM cliente WHERE email=?";
    const values = [auth.email];
    return db.execute(sql, values);
  }
}

export default UserRepository;
