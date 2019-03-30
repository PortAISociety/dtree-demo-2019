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
    print(data)
    

    # data contains the input data
    # pass input json to dt.classify
    # or change json to list
    # output classification

    # classification = dt.classify("a")
    res = {}
    res['Result'] = "classification"
    resj = json.dumps(res)

    return resj


if __name__ == "__main__":
    app.run(host='0.0.0.0')

    # check test.py to see an example of python post sent - backend picked it up and worked
