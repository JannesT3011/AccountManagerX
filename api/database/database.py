import mysql.connector as mysql

class Database:
    def __init__(self):
        try:
            self.connector = mysql.connect(
                host = "127.0.0.1",
                user = "root",
                database = "AccountManagerX"
                #password = "YOUR_PASSWORD"
            )
            self.cursor = self.connector.cursor()
            self.connector.commit()
        except Exception as error:
            print(f"<DATABASE> Error: {error}")
    
    def check_connection(self):
        return self.connector is not None and self.connector.is_connected()

    def setup(self):
        self.cursor.execute("""CREATE TABLE IF NOT EXISTS accounts (
            id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(40) NOT NULL UNIQUE,
            password VARCHAR(50) NOT NULL,
            email VARCHAR(64) NOT NULL,
            name VARCHAR(64) NOT NULL,
            link VARCHAR(255),
            created_at DATETIME NOT NULL
        );""")
        self.connector.commit()
    
    def execute(self, query, values=()):
        try:
            self.cursor.execute(query, values)
        except mysql.Error as error:
            print(f"<DATABASE> Error: {error}")