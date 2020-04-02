from flask import Blueprint, jsonify
from ..models import Account
from ..util import Acc
from ..database import Database

db = Database()
api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/accounts")
def accounts():
    return jsonify({"accounts": Acc.get_accounts()}), 200

@api.route("/account/create")
def account_create():
    new_account = Account("username", "password", "email", "name", "link", db.id())
    Acc.create_account(new_account)
    return {"message": new_account}, 200

@api.route("/account/delete")
def account_delete():
    Acc.delete_accounts("id")
    return jsonify({"message": "Account deleted"}), 200

@api.route("/account/update")
def account_update():
    # TODO if field not updated => None 
    update_account = Account("new_username", "new_password", "new_email", "new_name", "new_link", "new_id")
    Acc.update_account(update_account)
    return jsonify({"Account": Acc.get_accountdata("id")}), 200

#config  stuff
@api.route("/app/init")
def app_init():
    Acc.init_database()
    return jsonify({"message": "Init database successfully!"}), 200