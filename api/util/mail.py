import re

class Email:
    @staticmethod
    def check_email(email:str) -> bool:
        if len(email) > 64:
            return False
        elif re.search(r"^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$", email) is None:
            return False
        
        return True