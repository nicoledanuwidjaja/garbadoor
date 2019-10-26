from flask import Flask
app = Flask(__name__)


@app.route("/")
def test():
    return "placeholder"


if __name__ == "__main__":
    app.run()