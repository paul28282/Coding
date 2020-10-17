import datetime
import calendar


def has_friday_13(month, year):
    daysInMonth = calendar.monthrange(year,month)[1]
    for day in range(daysInMonth):
       currentDate = datetime.datetime(year,month,day+1)
       if currentDate.strftime("%A") == "Friday":
           if(day+1 == 13):
               print('friday 13 found!')



has_friday_13(3, 2020)