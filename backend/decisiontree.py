# Write decisiontree functions
# Pull test data from decisiontreedata
# Use this to make model
# Return classificaiton
import sklearn as sk


# Get test data and turn into list of lists, ie [[0,1],[1,3]]
# Get test data and get results and turn into list, ie [Something, Something else]
# Must match number with test data questions
# finally predict using list of inputs

# clf = tree.DecisionTreeClassifier()
# clffit = clf.fit(TestDataList, TestDataResults)
# return clf.predict(User Data)


def classify(results):
    
    testDataList, testDataResults = getTestData()
    clf = sk.tree.DecisionTreeClassifier()
    clf = clf.fit(testDataList, testDataResults)
    clfres = clf.predict(results)

    return results

def getTestData():
    return "a", "b"
    # get data from decisiontreedata, turn into list and pass to classify