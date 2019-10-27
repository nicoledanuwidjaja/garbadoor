import serial

ser1 = serial.Serial('COM5', 9600)

def operate_servo(choice):
  global ser1
  try:
    print("writing " + choice + " to serial.")
    ser1.write(choice.encode())
  except:
    print("Reconnecting to serial.")
    ser1 = serial.Serial('COM5', 9600)
    try:
  	  print("writing " + choice + " to serial trial 2")
  	  ser1.write(choice.encode())
    except:
  	  print("cannot connect to serial")

def choose_servo(servo):
  if servo == '1' or servo == '2' or servo == '3':
    print("activating servo " + servo + "\n")
    operate_servo(servo)
  else:
    print("not a valid option\n")
