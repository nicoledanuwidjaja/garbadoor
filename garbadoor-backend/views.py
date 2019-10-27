from flask import Blueprint, jsonify, request
from . import db
from .garbageData import doc_col
from .garbageData import add_item
import pprint
import json

main = Blueprint('main', __name__)
local_db = {}

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

@main.route('/update_data_live', methods=['Post'])
def update_data_live():
    local_db = request.get_json(force=True)
    local_db = json.dumps(local_db)
    print(local_db)
    with open('./localdb.txt', 'w+') as outfile:
        outfile.write(local_db)
    return 'Done', 201

@main.route('/get_live_data')
def get_live_data():
    with open('localdb.txt', 'r') as infile:
        local_db = json.loads(infile.read())
    return local_db
