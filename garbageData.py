import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('garbadoor-88843b8c25cf.json')
firebase_admin.intialize_app(cred)

db = firestore.client()