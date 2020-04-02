from api.models import Account
from api.database import Database

db = Database()

class Acc:
    @staticmethod
    def create_account(account: Account):
        db.check_connection()
        query = ""
    
    @staticmethod
    def get_accounts() -> list:
        db.check_connection()
        query = ""
    
    @staticmethod
    def delete_accounts():
        db.check_connection()
        query = ""

    @staticmethod
    def update_account():
        db.check_connection()
        query = ""
        