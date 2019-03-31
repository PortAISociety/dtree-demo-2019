import sys
import flask
from flask import request
import decisiontree as dt
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Write http function to send json {a,b,c,d} of inputs
# Then run the decisiontree function using this data and return prediction

@app.route('/api/dectree', methods=['GET', 'POST'])
def classify():
    # Run classification with sent data as json, then frontend can pick up


    data = request.data
    jsonData = json.loads(data)

    # Input Data will be in format { 'UserResults' : '[a,b,c]' }

    # results stores list [a,b,c]
    results = jsonData["UserResults"]
    result = dt.classify(results)
    
    # Output Data will be in format { 'Classification' : 'classification' }
    res = {}
    res["Classification"] = result[0]
    resj = json.dumps(res)

    return resj


if __name__ == "__main__":
    app.run(host='0.0.0.0')

    # the endpoint is http://192.168.1.147:5000/api/dectree
    # check test.py to see an example of python post sent - backend picked it up and worked