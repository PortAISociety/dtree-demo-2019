import json
import random as rand
from time import gmtime, strftime


def generate_data(min, max):
    # Create dictionary object
    data = {'testDataList': [], 'testDataResults': []}

    # Create list of results
    results = ["programming", "operating systems", "networking", "artificial intelligence", "user experience",
               "computer graphics"]

    # Create test data
    for i in range(rand.randint(min, max)):
        data_list = []
        data['testDataResults'].append(results[rand.randint(0, len(results) - 1)])
        for _ in range(3):
            data_list.append(rand.randint(0, 1))
        data['testDataList'].append(data_list)

    return data


def write_data(data, file_name):
    with open(file_name, 'w') as outFile:
        json.dump(data, outFile)


if __name__ == "__main__":
    minData = rand.randint(2, 5)
    maxData = minData + rand.randint(2, 5)
    write_data(generate_data(minData, maxData), "datagen-" + strftime("%Y-%m-%d-%H:%M:%S", gmtime()) + ".json")
