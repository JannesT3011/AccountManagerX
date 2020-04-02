from flask import Flask
from blueprint.api import api
from blueprint.error import error

app = Flask(__name__)
app.register_blueprint(api)
app.register_blueprint(error)

if __name__ == "__main__":
    app.run(threaded=True, port=8080)