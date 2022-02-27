import json
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'client.test',
    'host': 'mongodb+srv://joss:TYOe8irAYM7BT2UE@cluster0.clvch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
db = MongoEngine()
db.init_app(app)

class Transaction(db.Document):
    category = db.StringField()
    description = db.StringField()
    amount = db.IntField()
    date = db.StringField()


@app.route('/get_transaction_by_category', methods=['GET'])
def get_transaction_category():
    
    transaction_json = request.get_json()
    
    requestedDate = transaction_json['date']

    transaction_from_db = Transaction.objects(date=requestedDate)
    
    ret_transactions = []

    for transactions in transaction_from_db:
        ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})

    return jsonify({'transactions' : ret_transactions}) , 201


@app.route('/transaction', methods=['PUT'])
def put_transaction():
    transaction_json = request.get_json()

    new_transaction = Transaction(category=transaction_json['category'], description=transaction_json['description'], amount=transaction_json['amount'],date=transaction_json['date'])
    new_transaction.save()
    return 'Done', 201

@app.route('/get_transaction_by_date', methods=['GET'])
def get_transaction_date():
    
    transaction_json = request.get_json()
    
    requestedDate = transaction_json['date']

    transaction_from_db = Transaction.objects(date=requestedDate)
    
    ret_transactions = []

    for transactions in transaction_from_db:
        ret_transactions.append({'category': transactions.category, 'description' : transactions.description, 'amount': transactions.amount, 'date' : transactions.date})

    return jsonify({'transactions' : ret_transactions}) , 201

if __name__ == "__main__":
    app.run(debug=True)