import dill
import pandas as pd
from sklearn.preprocessing import Imputer, LabelEncoder
from sklearn.naive_bayes import GaussianNB


class RecommendationModel(object):
    def __init__(self, data_file_path='', model_file_path=''):
        self.data_file_path = data_file_path
        self.model_file_path = model_file_path
        self.encoder = {}
        self.model = None

    def add_data(self, age, climate, skin_type, tag):
        with open(self.data_file_path, 'a') as f:
            f.write('\n{age},{climate},{skin_type},{tag}'.format(
                age=age, climate=climate, skin_type=skin_type, tag=tag))
            # Can retrain the model here if needed
            # self.train()

    def predict(self, age, climate, skin_type):
        age_val, climate_val, skin_type_val = self.transform_to_val(
            age=age, skin_type=skin_type, climate=climate)
        return self.model.predict([[age_val, climate_val, skin_type_val]])[0]

    @staticmethod
    def load_model(model_file_path):
        with open(model_file_path, 'rb') as f:
            model = dill.load(f)
            model.model_file_path = model_file_path
            return model

    def save_model(self):
        with open(self.model_file_path, 'wb') as f:
            dill.dump(self, f)

    def transform_to_val(self, age, climate, skin_type):
        age_val = self.encoder['age'].transform([age])[0]
        climate_val = self.encoder['climate'].transform([climate])[0]
        skin_type_val = self.encoder['skin_type'].transform([skin_type])[0]
        return age_val, climate_val, skin_type_val

    def train(self):
        df = pd.read_csv(self.data_file_path)
        for col_name in ['age', 'climate', 'skin_type']:
            self.encoder[col_name] = LabelEncoder()
            df[col_name] = self.encoder[col_name].fit_transform(df[col_name])

        features = df.drop('tag', axis=1)
        target = df.loc[:, 'tag']

        self.model = GaussianNB()
        self.model.fit(features, target)
        self.save_model()