import requests
dictToSend = {'UserResults': [[0,0,0]]}
res = requests.post('http://192.168.1.147:5000/api/dectree', json=dictToSend)
print("response from server: " + res.text)
dictFromServer = res.json()