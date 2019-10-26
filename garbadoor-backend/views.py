from flask import Blueprint, jsonify, request
from . import db
from .garbageData import doc_col
from .garbageData import add_item
import print

main = Blueprint('main', __name__)

@app.route("/")
def main():

@main.route('/add_data', methods=['Post'])
def add_data():
    data = request.get_json()
    dict = {'name' : data['name'], 'type': data['type']}
    add_item(dict)
    return 'Done', 201

@main.route('/data')
def data():
    docs = doc_col.stream()
    dict = {}
    for doc in docs:
        cur = doc.to_dict()
        dict[cur['id']] = {'garbageType' : cur['garbageType'], 'count' : cur['count']}
    return dict

if __name__ == "__init__":
    app.run()

