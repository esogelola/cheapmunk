from calendar import monthrange 
import pandas as pd
import uuid

def allDaysOfMonth(year, month):
    num_days = monthrange(year, month)[1]
    rng = pd.date_range(start = str(year) + '-'+str(month) + '-1',end=str(year) + '-'+str(month) + '-' + str(num_days), freq='D')
    rng = rng.date
    date_str = []
    for dates in rng:
        date_str.append((dates.strftime("%Y/%m/%d")).replace("/","-"))
    return date_str


def dateToInt(date):
    dates = date.split("-")
    datesInt = [int(dates[0]), int(dates[1]), int(dates[2])]
    return datesInt
