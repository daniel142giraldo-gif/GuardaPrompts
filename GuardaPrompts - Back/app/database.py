
import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

def conectar_bd():
    conexion = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        port=int(os.getenv("DB_PORT", "3306"))
    )

    return conexion


def probar_conexion():
    conexion = conectar_bd()

    if conexion.is_connected():
        print("Conexion a guardaprompts exitosa")

    conexion.close()
