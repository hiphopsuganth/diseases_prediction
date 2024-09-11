from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To handle CORS if React and Flask are on different ports

# Configure the PostgreSQL database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/herbal'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a model for the 'patients' table
class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<Patient {self.name}>'

# Endpoint to handle form submission
@app.route('/submit-details', methods=['POST'])
def submit_details():
    data = request.json
    new_patient = Patient(
        name=data['name'],
        gender=data['gender'],
        age=data['age'],
        email=data['email'],
        phone=data['phone']
    )
    db.session.add(new_patient)
    db.session.commit()
    return jsonify({'message': 'Patient details saved successfully'}), 201

# Function to create database tables
def initialize_db():
    with app.app_context():
        db.create_all()  # Create tables if they don't exist
        print("Database tables created.")

if __name__ == '__main__':
    initialize_db()  # Call to create tables when starting the app
    app.run(debug=True)
