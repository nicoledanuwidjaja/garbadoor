import serial

ser1 = serial.Serial('COM5', 9600)

def operate_servo(servo):

  if servo == '1':
    print("activating servo 1\n")
    ser1.write('1'.encode())
  elif servo == '2':
    print("activating servo 2\n")
    ser1.write('2'.encode())
  elif servo == '3':
    print("activating servo 3\n")
    ser1.write('3'.encode())
  else:
    print("not a valid option\n")
