import cv2
import time
import sort

video = cv2.VideoCapture(0, cv2.CAP_DSHOW)

a = 0


while(True):

    check, frame = video.read()
    cv2.imshow("Capturing", frame)
    a = a + 1
    key = cv2.waitKey(1)

    if (a == 1000):
        a = 0
        cv2.imwrite('D:/Dev/YHack/Scripts/resources/image.png', frame)
        print("")
        print("")
        print("---------------------------")
        print("Calling api!")
        objects, labels = sort.call_api()

        for object_ in objects:
            if(object_.score > 0.6):
                leftX = object_.bounding_poly.normalized_vertices[0].x
                leftY = object_.bounding_poly.normalized_vertices[0].y
                rightX = object_.bounding_poly.normalized_vertices[2].x
                rightY = object_.bounding_poly.normalized_vertices[2].y
                leftX = int(640 * leftX )
                leftY = int(480 * leftY )
                rightX = int(640 * rightX )
                rightY = int(480 * rightY )
                cv2.rectangle(frame, (leftX, leftY), (rightX, rightY), (0, 255, 0), 2)
        y = 20
        for label in labels:
            labelDescrip = label.description + "  " + str(round(label.score * 100, 2)) + "%"
            cv2.putText(frame, labelDescrip, (10, y),
                cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 255, 0),  lineType=cv2.LINE_AA)
            y = y + 15
            labelDescrip = labelDescrip + ('\n{} (confidence: {})'.format(label.description, label.score))
        cv2.imwrite('D:/Dev/YHack/Scripts/resources/imageBounded.png', frame)

        print(sort.sort_garbage(labels))

    print(a)


    if key == ord('q'):
        break

# print(a)

video.release()
cv2.destroyAllWindows()
