from flask import Flask, render_template
from flask_caching import Cache
import json
import os
from pymongo import MongoClient

app = Flask(__name__)
cache = Cache(app,config={'CACHE_TYPE': 'simple'})
cache.init_app(app)

"""
Lists all existing courses
"""
@app.route("/courses")
@cache.cached(timeout=50)
def list_courses():
    connection_string = "mongodb+srv://t4g:bmas@cluster0-4lru4.mongodb.net/test"
    mongo_client = MongoClient(connection_string)
    t4g_database = mongo_client.t4g
    courses_collection = t4g_database.courses.find({})
    data = list()
    for cursor in courses_collection:
        data.append(cursor)
    return str(data)


"""
Lists all existing courses with a given title
"""
@app.route("/courses/<title>")
def find_courses(title):
    connection_string = "mongodb+srv://t4g:bmas@cluster0-4lru4.mongodb.net/test"
    mongo_client = MongoClient(connection_string)
    t4g_database = mongo_client.t4g
    courses_collection = t4g_database.courses.find({ "title": title })
    data = list()
    for cursor in courses_collection:
        data.append(cursor)
    return str(data)


if __name__ == "__main__":
    app.run(debug=True)

    