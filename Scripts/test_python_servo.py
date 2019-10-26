from python_servo import operate_servo
while(True):
  var = input("Enter 1, 2, 3, or q\n")
  if var == 'q':
  	print("exiting \n")
  	break;
  else:
  	operate_servo(var)
