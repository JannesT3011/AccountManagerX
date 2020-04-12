from flask import Blueprint, jsonify, request
from ..models import Account
from ..util import Acc
from ..database import Database

db = Database()
api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/accounts")
def accounts():
    return jsonify(Acc.get_accounts()), 200

@api.route("/account/create", methods=["POST"])
def account_create():
    data = request.get_json()
    if data["link"] == "":
        data["link"] = None
    new_account = Account(data["username"], data["password"], data["email"], data["name"], data["link"], db.id())
    Acc.create_account(new_account)
    return jsonify(request.get_json()), 200

@api.route("/account/delete", methods=["POST"])
def account_delete():
    data = request.get_json()
    Acc.delete_accounts(data["id"]) 
    return jsonify({"message": f"Account {data['id']} deleted"}), 200

@api.route("/account/update", methods=["POST"])
def account_update():
    data = request.get_json()
    update_account = Account(data["username"], data["password"], data["email"], data["name"], data["link"], data["id"])
    Acc.update_account(update_account)
    return jsonify({"message": f"Updated id: {data['id']}"}), 200

#config  stuff
@api.route("/app/init")
def app_init():
    Acc.init_database()
    return jsonify({"message": "Init database successfully!"}), 200

@api.route("/test", methods=["GET"])
def test():
    return jsonify({"message": "Hello World"})