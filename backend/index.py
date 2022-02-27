import json
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine
from .scripts.dates  import *
import uuid
from mongoengine.queryset.visitor import Q
app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'client.test',
    'host': 'mongodb+srv://joss:TYOe8irAYM7BT2UE@cluster0.clvch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
db = MongoEngine()
db.init_app(app)

class User(db.Document):
    UUID = db.StringField()
    userName = db.StringField()
    userPassword = db.StringField()
    email = db.StringField()
    budgetFood = db.IntField()
    budgetHome = db.IntField()
    budgetSport = db.IntField()
    budgetTravel = db.IntField()
    budgetLeisure = db.IntField()
    budgetVehicle = db.IntField()
    budgetSubs = db.IntField()
    budgetClothes = db.IntField()
    budgetMisc = db.IntField()
    budgetTotal = db.IntField()

class Group(db.Document):
    groupName = db.StringField()
    groupMembers = db.ListField(db.StringField())
    budgetFood = db.IntField()
    budgetHome = db.IntField()
    budgetSport = db.IntField()
    budgetTravel = db.IntField()
    budgetLeisure = db.IntField()
    budgetVehicle = db.IntField()
    budgetSubs = db.IntField()
    budgetClothes = db.IntField()
    budgetMisc = db.IntField()
    budgetTotal = db.IntField()


class Transaction(db.Document):

    userId = db.StringField()
    category = db.StringField()
    description = db.StringField()
    amount = db.IntField()
    date = db.StringField()





## Requires JSON: groupName, userId
@app.route('/makeGroup', methods=['PUT'])
def makeGroup():
    groupJson = request.get_json()
    new_group = Group(groupName=groupJson['groupName'], groupMembers=[groupJson['userId']], budgetFood=0, budgetHome=0, budgetSport=0, budgetTravel=0, budgetLeisure=0, budgetVehicle=0, 
    budgetSubs=0, budgetClothes=0, budgetMisc=0, budgetTotal =0)
    new_group.save()
    return 'Done', 201


##Requires JSON: groupName, userId, friendEmail
@app.route('/addMembers', methods=['PUT'])
def addMembers():
    groupJson = request.get_json()
    group_from_db = Group.objects(Q(groupMembers__exists=groupJson['userId']) & Q(groupName__exact=groupJson['groupName'])).get()

    userdb = User.objects(email=groupJson['friendEmail'])
    for friendId in userdb:
        group_from_db.groupMembers.append(friendId.UUID)
        group_from_db.save()
        return friendId.UUID, 201


## Requires JSON: groupName
@app.route('/getGroup', methods=['GET'])
def getGroup():
    groupJson = request.get_json()
    group_from_db = Group.objects(groupName__exact=groupJson['groupName']).get()
    return jsonify({'groupName': group_from_db.groupName, 'groupMembers': group_from_db.groupMembers, 
        'budgetFood': group_from_db.budgetFood, 'budgetHome': group_from_db.budgetHome, 'budgetSport': group_from_db.budgetSport, 'budgetTravel': group_from_db.budgetTravel,
        'budgetLeisure': group_from_db.budgetLeisure, 'budgetVehicle': group_from_db.budgetVehicle, 'budgetSubs': group_from_db.budgetSubs, 'budgetClothes': group_from_db.budgetClothes,
        'budgetMisc': group_from_db.budgetMisc, 'budgetTotal': group_from_db.budgetTotal})


##Requires JSON: email, password
@app.route('/login', methods=['GET'])
def login():
    login_json = request.get_json()
    userdb = User.objects(email=login_json['email'])
    for user_from_db in userdb:
        return user_from_db.UUID




## Requires JSON: userId
## returns everythign about the user
@app.route('/userInfo', methods=['GET'])
def getUser():
    set_json = request.get_json()
    user_fromdb = User.objects(UUID=set_json['userId'])
    for user_from_db in user_fromdb:
        return jsonify({'name': user_from_db.userName, 'password': user_from_db.userPassword, 'email': user_from_db.email, 
        'budgetFood': user_from_db.budgetFood, 'budgetHome': user_from_db.budgetHome, 'budgetSport': user_from_db.budgetSport, 'budgetTravel': user_from_db.budgetTravel,
        'budgetLeisure': user_from_db.budgetLeisure, 'budgetVehicle': user_from_db.budgetVehicle, 'budgetSubs': user_from_db.budgetSubs, 'budgetClothes': user_from_db.budgetClothes,
        'budgetMisc': user_from_db.budgetMisc, 'budgetTotal': user_from_db.budgetTotal})
    

## Requires JSON: email, name, password
@app.route('/register', methods=['PUT'])
def register():
    user_json = request.get_json()
    genID = uuid.uuid4()
    new_user = User(UUID=str(genID),  email = user_json['email'], userName = user_json['name'], userPassword = user_json['password'], 
    budgetFood=0, budgetHome=0, budgetSport=0, budgetTravel=0, budgetLeisure=0, budgetVehicle=0, 
    budgetSubs=0, budgetClothes=0, budgetMisc=0, budgetTotal =0)
   
    new_user.save()
    return str(genID)



## Requires JSON: userId, date (YYYY-MM-DD)
@app.route('/get_transaction_by_month', methods=['GET'])
def get_transaction_month():
    
    transaction_json = request.get_json()
    requestedMonth = transaction_json['date']
    dates = allDaysOfMonth(dateToInt(requestedMonth)[0], dateToInt(requestedMonth)[1])

    transaction_from_db = Transaction.objects(Q(date__in=dates) & Q(userId__exact=transaction_json['userId']))
    ret_transactions = []

    monthlyExpense = 0
    for transactions in transaction_from_db:
        ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
        monthlyExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'monthlyExpense' : monthlyExpense}) , 201



## Requires JSON: groupName, date (YYYY-MM-DD)
@app.route('/get_group_transaction_by_month', methods=['GET'])
def get_group_transaction_month():
    groupJson = request.get_json()
    group_from_db = Group.objects(groupName__exact=groupJson['groupName']).get()
    
    requestedMonth = groupJson['date']
    dates = allDaysOfMonth(dateToInt(requestedMonth)[0], dateToInt(requestedMonth)[1])
    ret_transactions = []

    monthlyExpense = 0
    userIds = group_from_db.groupMembers
    for user in userIds:
        transaction_from_db = Transaction.objects(Q(date__in=dates) & Q(userId__exact=user))
        for transactions in transaction_from_db:
            ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
            monthlyExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'monthlyExpense' : monthlyExpense}) , 201
    






## requires JSON: category, userId
@app.route('/get_transaction_by_category', methods=['GET'])
def get_transaction_category():
    
    transaction_json = request.get_json()
    
    requestedCategory = transaction_json['category']

    transaction_from_db = Transaction.objects(Q(category__exact=requestedCategory) & Q(userId__exact=transaction_json['userId']))
    
    ret_transactions = []

    categoryExpense = 0
    for transactions in transaction_from_db:
        ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
        categoryExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'categoryExpense' : categoryExpense}) , 201







## requires JSON: category, groupName
@app.route('/get_group_transaction_by_category', methods=['GET'])
def get_group_transaction_category():
    groupJson = request.get_json()
    group_from_db = Group.objects(groupName__exact=groupJson['groupName']).get()
    
    requestedCategory = groupJson['category']

    userIds = group_from_db.groupMembers
    categoryExpense=0
    ret_transactions = []
    for user in userIds:
        transaction_from_db = Transaction.objects(Q(category__exact=requestedCategory) & Q(userId__exact=user))
        
        for transactions in transaction_from_db:
            ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
            categoryExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'categoryExpense' : categoryExpense}) , 201







##  requires JSON: userId, category, description, amount, date(YYYY-MM-DD)
@app.route('/transaction', methods=['PUT'])
def put_transaction():
    transaction_json = request.get_json()

    new_transaction = Transaction(userId=transaction_json['userId'],category=transaction_json['category'], description=transaction_json['description'], amount=transaction_json['amount'],date=transaction_json['date'])
    new_transaction.save()
    return 'Done', 201


##  requires JSON: date(YYYY-MM-DD), userId
@app.route('/get_transaction_by_date', methods=['GET'])
def get_transaction_date():
    
    transaction_json = request.get_json()
    
    requestedDate = transaction_json['date']

    transaction_from_db = Transaction.objects(Q(date=requestedDate) & Q(userId__exact=transaction_json['userId']))
    
    ret_transactions = []
    dateExpense=0

    for transactions in transaction_from_db:
        ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
        dateExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'dateExpense' : dateExpense}) , 201





##  requires JSON: date(YYYY-MM-DD), groupName
@app.route('/get_group_transaction_by_date', methods=['GET'])
def get_group_transaction_date():
    groupJson = request.get_json()
    group_from_db = Group.objects(groupName__exact=groupJson['groupName']).get()
    
    requestedDate = groupJson['date']

    userIds = group_from_db.groupMembers
    dateExpense=0
    ret_transactions = []
    for user in userIds:
        transaction_from_db = Transaction.objects(Q(date=requestedDate) & Q(userId__exact=user))
        for transactions in transaction_from_db:
            ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})
            dateExpense += transactions.amount

    return jsonify({'transactions' : ret_transactions, 'dateExpense' : dateExpense}) , 201






## Requires JSON: userId, foodBudget
@app.route('/budgetFood', methods=['PUT'])
def setbudgetFood():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetFood=set_json['budgetFood']
    user_from_db.save()
    return 'Done', 201

## Requires JSON: userId, homeBudget
@app.route('/budgetHome', methods=['PUT'])
def setbudgetHome():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetHome=set_json['budgetHome']
    user_from_db.save()
    return 'Done', 201

## Requires JSON: userId, budgetSport
@app.route('/budgetSport', methods=['PUT'])
def setbudgetSport():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetSport=set_json['budgetSport']
    user_from_db.save()
    return 'Done', 201

## you get the point
@app.route('/budgetTravel', methods=['PUT'])
def setbudgetTravel():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetTravel=set_json['budgetTravel']
    user_from_db.save()
    return 'Done', 201

@app.route('/budgetLeisure', methods=['PUT'])
def setbudgetLeisure():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetLeisure=set_json['budgetLeisure']
    user_from_db.save()
    return 'Done', 201

@app.route('/budgetVehicle', methods=['PUT'])
def setbudgetVehicle():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetVehicle=set_json['budgetVehicle']
    user_from_db.save()
    return 'Done', 201

@app.route('/budgetSubs', methods=['PUT'])
def setbudgetSubs():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetSubs=set_json['budgetSubs']
    user_from_db.save()
    return 'Done', 201

@app.route('/budgetClothes', methods=['PUT'])
def setbudgetClothes():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetClothes=set_json['budgetClothes']
    user_from_db.save()
    return 'Done', 201

@app.route('/budgetMisc', methods=['PUT'])
def setbudgetMisc():
    set_json = request.get_json()
    user_from_db = User.objects(UUID=set_json['userId']).get()
    user_from_db.budgetMisc=set_json['budgetMisc']
    user_from_db.save()
    return 'Done', 201



###################





## Requires JSON: groupName, foodBudget
@app.route('/groupbudgetFood', methods=['PUT'])
def setgroupbudgetFood():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetFood=set_json['budgetFood']
    user_from_db.save()
    return 'Done', 201

## Requires JSON: groupName, homeBudget
@app.route('/groupbudgetHome', methods=['PUT'])
def setgroupbudgetHome():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetHome=set_json['budgetHome']
    user_from_db.save()
    return 'Done', 201

## Requires JSON: groupName, budgetSport
@app.route('/groupbudgetSport', methods=['PUT'])
def setgroupbudgetSport():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetSport=set_json['budgetSport']
    user_from_db.save()
    return 'Done', 201

## you get the point
@app.route('/groupbudgetTravel', methods=['PUT'])
def setgroupbudgetTravel():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetTravel=set_json['budgetTravel']
    user_from_db.save()
    return 'Done', 201

@app.route('/groupbudgetLeisure', methods=['PUT'])
def setgroupbudgetLeisure():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetLeisure=set_json['budgetLeisure']
    user_from_db.save()
    return 'Done', 201

@app.route('/groupbudgetVehicle', methods=['PUT'])
def setgroupbudgetVehicle():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetVehicle=set_json['budgetVehicle']
    user_from_db.save()
    return 'Done', 201

@app.route('/groupbudgetSubs', methods=['PUT'])
def setgroupbudgetSubs():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetSubs=set_json['budgetSubs']
    user_from_db.save()
    return 'Done', 201

@app.route('/groupbudgetClothes', methods=['PUT'])
def setgroupbudgetClothes():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetClothes=set_json['budgetClothes']
    user_from_db.save()
    return 'Done', 201

@app.route('/groupbudgetMisc', methods=['PUT'])
def setgroupbudgetMisc():
    set_json = request.get_json()
    user_from_db = Group.objects(groupName=set_json['groupName']).get()
    user_from_db.budgetMisc=set_json['budgetMisc']
    user_from_db.save()
    return 'Done', 201


if __name__ == "__main__":
    app.run(debug=True)