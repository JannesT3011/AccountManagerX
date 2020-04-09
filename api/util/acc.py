from ..models import Account
from ..database import Database

db = Database()

class Acc:
    @staticmethod
    def create_account(account: Account):
        db.check_connection()
        query = """INSERT INTO accounts (id, username, password, email, name, link, created_at)
                   VALUES (%s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP())    
                """
        values = (account.id, account.username, account.password, account.email, account.name, account.link)
        db.execute(query, values)
        db.connector.commit()
        return

    @staticmethod
    def get_accounts() -> list:
        db.check_connection()
        query = "SELECT * FROM accounts"
        results = []
        db.execute(query)
        for result in db.cursor.fetchall():
            push_data = {"id": result[0], "username": result[1], "password": result[2], "email": result[3], "name": result[4], "link": result[5], "created_at": result[6]}
            results.append(push_data)
        
        return results
    
    @staticmethod
    def delete_accounts(id: str):
        db.check_connection()
        query = "DELETE FROM accounts WHERE id=%s"
        db.execute(query, (id))
        db.connector.commit()

    @staticmethod
    def update_account(account: Account):
        db.check_connection()
        if account.username is not None:
            db.execute("UPDATE projects SET username=%s WHERE id=%s", (account.username, account.id))
        if account.password is not None:
            db.execute("UPDATE projects SET password=%s WHERE id=%s", (account.password, account.id))
        if account.email is not None:
            db.execute("UPDATE projects SET email=%s WHERE id=%s", (account.email, account.id))
        if account.name is not None:
            db.execute("UPDATE projects SET name=%s WHERE id=%s", (account.name, account.id))
        if account.link is not None:
            db.execute("UPDATE projects SET link=%s WHERE id=%s", (account.link, account.id))
        
        db.connector.commit()
    
    @staticmethod
    def get_accountdata(id: str):
        db.check_connection()
        db.execute("SELECT * FROM accounts WHERE id=%s", (id))
        for result in db.cursor.fetchall():
            return result
    
    @staticmethod
    def init_database():
        db.check_connection()
        db.setup()
        db.connector.commit()        