from sklearn import tree
import json


def classify(results):
    # Just need getTestData to returns tuff from decisiontreedata
    print(results)

    testDataList, testDataResults = getTestData()
    clf = tree.DecisionTreeClassifier()
    clf = clf.fit(testDataList, testDataResults)
    clfres = clf.predict(results)

    return clfres

def getTestData():
    with open('decisiontreedata.JSON', 'r') as dtfile:
        data=dtfile.read()
    dtreeobj = json.loads(data)
    dataList = dtreeobj["testDataList"]
    dataRes = dtreeobj["testDataResults"]

    return dataList, dataRes

    # get data from decisiontreedata, turn into list and pass to classify

