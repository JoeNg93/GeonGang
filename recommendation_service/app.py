from flask import Flask, jsonify, request, abort
from sqlalchemy import create_engine
from sqlalchemy.sql import text
from recommendation_model import RecommendationModel

app = Flask(__name__)

model = RecommendationModel.load_model('geongang.model')

db_engine = create_engine('mysql+mysqlconnector://root:root@joehub.fi:1206/geongang')


@app.route('/', methods=['GET'])
def index():
    return 'OK!'


@app.route('/api/get-tag', methods=['POST'])
def recommended_products():
    if not request.json:
        return abort(400)
    data = request.get_json()
    chosen_data = {}
    for attr in ['age', 'climate', 'skin_type']:
        val = data.get(attr)
        if val is None:
            return jsonify({'error': '{} input is missing'.format(attr)}), 400
        chosen_data[attr] = val
    try:
        tag = model.predict(age=chosen_data['age'], climate=chosen_data['climate'], skin_type=chosen_data['skin_type'])
        return jsonify({'tag': tag})
    except ValueError:
        return jsonify({'tag': None})


if __name__ == '__main__':
    app.run(port=5003)
