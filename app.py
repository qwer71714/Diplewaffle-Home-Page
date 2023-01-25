from flask import Flask, render_template
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('몽고DB 주소')
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/lecture')
def lecture():
   return render_template('lecture-index.html')

@app.route('/login-page')
def aw():
   return render_template('logun-page.html')

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)