import requests
dictToSend = {'question':'what is the answer?'}
res = requests.post('http://192.168.1.147:5000/api/dectree', json=dictToSend)
print("response from server: " + res.text)
dictFromServer = res.json()