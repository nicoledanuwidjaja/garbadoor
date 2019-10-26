from flask import Flask

app = Flask(__name__)


# TODO: two routes
# - dashboard route
# - camera route

@app.route("/")
def test():
    return "I AM A garbAge"


if __name__ == "__main__":
    app.run()
