import io
import os
import cv2
import requests
import json
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from google.cloud import vision
from google.cloud.vision import types
from python_servo import operate_servo


URL = 'http://127.0.0.1:5000/data'
db = requests.get(url = URL).json()

fig2 = plt.figure()
ax2 = fig2.add_subplot(111, aspect='equal')

ax2.add_patch(
     patches.Rectangle(
        (0.1, 0.1),
        0.5,
        0.5,
        fill=False      # remove background
     ) )

def call_api():
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # The name of the image file to annotate
    file_name = os.path.abspath('resources/image.png')

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()

    image = types.Image(content=content)

    # Performs label detection on the image file
    objects = client.object_localization(
        image=image).localized_object_annotations
    response = client.label_detection(image=image)
    labels = response.label_annotations

    fig2.savefig('resources/image.png', dpi=90, bbox_inches='tight')

    return objects, labels


def sort_garbage(labels):
    rec = 0
    gbg = 0
    cmp = 0
    print(db)
    for label in labels:
        if label.description in db:
            if db[label.description]['garbageType'] == 'recycle':
                rec = rec + 1
            elif db[label.description]['garbageType'] == 'compost':
                cmp = cmp + 1
            else:
                gbg = gbg + 1
            db[label.description]['count'] += 1
    if (rec == 0 and gbg == 0 and cmp == 0):
        return 'no garbage found'
    if (gbg >= rec and gbg >= cmp):
        operate_servo('1')
        return 'garbage'
    elif (rec >= cmp):
        operate_servo('2')
        return 'recycle'
    else:
        operate_servo('3')
        return 'compost'
