from flask import Blueprint, jsonify
from ..database import Database
from ..models import Account

api = Blueprint("api", __name__, url_prefix="/api")
db = Database()

@api.route("/accounts")
def accounts():
    return

@api.route("/account/create")
def account_create():
    new_account = Account("username", "password", "email", "name", "link")
    return

@api.route("/account/delete")
def account_delete():
    return

@api.route("/account/update")
def account_update():
    return

#config  stuff
@api.route("/app/init")
def app_init():
    db.check_connection()
    db.setup()
    return jsonify({"message": "Init database"})