import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('garbadoor-backend/garbadoor.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_col = db.collection(u'Items')


def add_item(item_dict):
    if doc_col.document(item_dict['name']).get().exists:
        doc_col.document(item_dict['name']).set({
            u'id': item_dict['name'],
            u'garbageType': item_dict['type'],
            u'count': doc_col.document(item_dict['name']).get().to_dict()['count'] + 1
        })
    else:
        doc_col.document(item_dict['name']).set({
            u'id': item_dict['name'],
            u'garbageType': item_dict['type'],
            u'count': 1
        })
