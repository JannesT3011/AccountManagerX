import re
import string
import random

class Password:
    @staticmethod
    def check_password(password:str) -> bool:
        """CHECKS IF THE PASSWORD IS VALID"""
        if len(password) < 8:
            return False
        elif password == "password" or password == "Password":
            return False
        elif re.search("[0-9]", password) is None:
            return False
        elif re.search("[a-zA-Z]", password) is None:
            return False

        return True
    
    def create_password(self) -> str:
        """CREATE A RANDOM PASSWORD"""
        lower = string.ascii_lowercase
        upper = string.ascii_uppercase
        punc = string.punctuation
        digits = string.digits
        char = lower + upper + punc + digits
        password = "".join(random.choice(char) for x in range(random.randint(8, 16)))

        if not self.check_password(password) is True:
            self.create_password()
        
        return password