from flask import Flask, jsonify
from flask_cors import CORS  # Importa la extensión Flask-CORS
import psycopg2

app = Flask(__name__)

# Configura la conexión a la base de datos PostgreSQL
try:
    conn = psycopg2.connect(
        dbname='postgres',
        user='postgres',
        password='Rafael_2000',
        host='localhost',
        port='5432'
    )
    print("Conexión establecida con la base de datos PostgreSQL")
except psycopg2.Error as e:
    print(f"Error al conectar con la base de datos: {e}")

# Configura CORS para permitir solicitudes desde tu aplicación React (ajusta la URL según sea necesario)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Ruta para obtener datos de la tabla "medicina"
@app.route('/api/conexion', methods=['GET'])
def obtener_medicinas():
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT * FROM medicina")
        medicinas = [{'nombre': row[0], 'notas': row[1]} for row in cursor.fetchall()]
    except psycopg2.Error as e:
        print(f"Error al obtener datos de la tabla 'medicina': {e}")
        medicinas = []
    cursor.close()
    return jsonify(medicinas)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
