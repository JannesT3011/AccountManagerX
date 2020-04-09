from flask import Flask
from .blueprint.api import api
from .blueprint.error import error

app = Flask(__name__)
app.config["SECRET_KEY"] = ""
app.register_blueprint(api)
app.register_blueprint(error)