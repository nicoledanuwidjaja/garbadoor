import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('garbadoor-88843b8c25cf.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

doc_col = db.collection(u'Items')


def add_item(item_dict):
    if doc_col.doc(item_dict['name']).get().exists:
        doc_col.doc(item_dict['name']).set({
            u'garbageType': item_dict['type'],
            u'count': doc_col.doc(item_dict['name']).to_dict()['count'] + 1
        })
    else:
        doc_col.doc(item_dict['name']).set({
            u'garbageType': item_dict['type'],
            u'count': 1
        })

