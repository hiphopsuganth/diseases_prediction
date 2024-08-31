import React, { useState } from 'react';
import Select from 'react-select';

// Step 1: Define all symptoms with their weights as options
const options = [
  { value: 'itching', label: 'Itching (Weight: 1)' },
  { value: 'skin_rash', label: 'Skin Rash (Weight: 3)' },
  { value: 'nodal_skin_eruptions', label: 'Nodal Skin Eruptions (Weight: 4)' },
  { value: 'continuous_sneezing', label: 'Continuous Sneezing (Weight: 4)' },
  { value: 'shivering', label: 'Shivering (Weight: 5)' },
  { value: 'chills', label: 'Chills (Weight: 3)' },
  { value: 'joint_pain', label: 'Joint Pain (Weight: 3)' },
  { value: 'stomach_pain', label: 'Stomach Pain (Weight: 5)' },
  { value: 'acidity', label: 'Acidity (Weight: 3)' },
  { value: 'ulcers_on_tongue', label: 'Ulcers on Tongue (Weight: 4)' },
  { value: 'muscle_wasting', label: 'Muscle Wasting (Weight: 3)' },
  { value: 'vomiting', label: 'Vomiting (Weight: 5)' },
  { value: 'burning_micturition', label: 'Burning Micturition (Weight: 6)' },
  { value: 'spotting_urination', label: 'Spotting Urination (Weight: 6)' },
  { value: 'fatigue', label: 'Fatigue (Weight: 4)' },
  { value: 'weight_gain', label: 'Weight Gain (Weight: 3)' },
  { value: 'anxiety', label: 'Anxiety (Weight: 4)' },
  { value: 'cold_hands_and_feets', label: 'Cold Hands and Feets (Weight: 5)' },
  { value: 'mood_swings', label: 'Mood Swings (Weight: 3)' },
  { value: 'weight_loss', label: 'Weight Loss (Weight: 3)' },
  { value: 'restlessness', label: 'Restlessness (Weight: 5)' },
  { value: 'lethargy', label: 'Lethargy (Weight: 2)' },
  { value: 'patches_in_throat', label: 'Patches in Throat (Weight: 6)' },
  { value: 'irregular_sugar_level', label: 'Irregular Sugar Level (Weight: 5)' },
  { value: 'cough', label: 'Cough (Weight: 4)' },
  { value: 'high_fever', label: 'High Fever (Weight: 7)' },
  { value: 'sunken_eyes', label: 'Sunken Eyes (Weight: 3)' },
  { value: 'breathlessness', label: 'Breathlessness (Weight: 4)' },
  { value: 'sweating', label: 'Sweating (Weight: 3)' },
  { value: 'dehydration', label: 'Dehydration (Weight: 4)' },
  { value: 'indigestion', label: 'Indigestion (Weight: 5)' },
  { value: 'headache', label: 'Headache (Weight: 3)' },
  { value: 'yellowish_skin', label: 'Yellowish Skin (Weight: 3)' },
  { value: 'dark_urine', label: 'Dark Urine (Weight: 4)' },
  { value: 'nausea', label: 'Nausea (Weight: 5)' },
  { value: 'loss_of_appetite', label: 'Loss of Appetite (Weight: 4)' },
  { value: 'pain_behind_the_eyes', label: 'Pain Behind the Eyes (Weight: 4)' },
  { value: 'back_pain', label: 'Back Pain (Weight: 3)' },
  { value: 'constipation', label: 'Constipation (Weight: 4)' },
  { value: 'abdominal_pain', label: 'Abdominal Pain (Weight: 4)' },
  { value: 'diarrhoea', label: 'Diarrhoea (Weight: 6)' },
  { value: 'mild_fever', label: 'Mild Fever (Weight: 5)' },
  { value: 'yellow_urine', label: 'Yellow Urine (Weight: 4)' },
  { value: 'yellowing_of_eyes', label: 'Yellowing of Eyes (Weight: 4)' },
  { value: 'acute_liver_failure', label: 'Acute Liver Failure (Weight: 6)' },
  { value: 'fluid_overload', label: 'Fluid Overload (Weight: 6)' },
  { value: 'swelling_of_stomach', label: 'Swelling of Stomach (Weight: 7)' },
  { value: 'swelled_lymph_nodes', label: 'Swelled Lymph Nodes (Weight: 6)' },
  { value: 'malaise', label: 'Malaise (Weight: 6)' },
  { value: 'blurred_and_distorted_vision', label: 'Blurred and Distorted Vision (Weight: 5)' },
  { value: 'phlegm', label: 'Phlegm (Weight: 5)' },
  { value: 'throat_irritation', label: 'Throat Irritation (Weight: 4)' },
  { value: 'redness_of_eyes', label: 'Redness of Eyes (Weight: 5)' },
  { value: 'sinus_pressure', label: 'Sinus Pressure (Weight: 4)' },
  { value: 'runny_nose', label: 'Runny Nose (Weight: 5)' },
  { value: 'congestion', label: 'Congestion (Weight: 5)' },
  { value: 'chest_pain', label: 'Chest Pain (Weight: 7)' },
  { value: 'weakness_in_limbs', label: 'Weakness in Limbs (Weight: 7)' },
  { value: 'fast_heart_rate', label: 'Fast Heart Rate (Weight: 5)' },
  { value: 'pain_during_bowel_movements', label: 'Pain During Bowel Movements (Weight: 5)' },
  { value: 'pain_in_anal_region', label: 'Pain in Anal Region (Weight: 6)' },
  { value: 'bloody_stool', label: 'Bloody Stool (Weight: 5)' },
  { value: 'irritation_in_anus', label: 'Irritation in Anus (Weight: 6)' },
  { value: 'neck_pain', label: 'Neck Pain (Weight: 5)' },
  { value: 'dizziness', label: 'Dizziness (Weight: 4)' },
  { value: 'cramps', label: 'Cramps (Weight: 4)' },
  { value: 'bruising', label: 'Bruising (Weight: 4)' },
  { value: 'obesity', label: 'Obesity (Weight: 4)' },
  { value: 'swollen_legs', label: 'Swollen Legs (Weight: 5)' },
  { value: 'swollen_blood_vessels', label: 'Swollen Blood Vessels (Weight: 5)' },
  { value: 'puffy_face_and_eyes', label: 'Puffy Face and Eyes (Weight: 5)' },
  { value: 'enlarged_thyroid', label: 'Enlarged Thyroid (Weight: 6)' },
  { value: 'brittle_nails', label: 'Brittle Nails (Weight: 5)' },
  { value: 'swollen_extremeties', label: 'Swollen Extremities (Weight: 5)' },
  { value: 'excessive_hunger', label: 'Excessive Hunger (Weight: 4)' },
  { value: 'extra_marital_contacts', label: 'Extra Marital Contacts (Weight: 5)' },
  { value: 'drying_and_tingling_lips', label: 'Drying and Tingling Lips (Weight: 4)' },
  { value: 'slurred_speech', label: 'Slurred Speech (Weight: 4)' },
  { value: 'knee_pain', label: 'Knee Pain (Weight: 3)' },
  { value: 'hip_joint_pain', label: 'Hip Joint Pain (Weight: 2)' },
  { value: 'muscle_weakness', label: 'Muscle Weakness (Weight: 2)' },
  { value: 'stiff_neck', label: 'Stiff Neck (Weight: 4)' },
  { value: 'swelling_joints', label: 'Swelling Joints (Weight: 5)' },
  { value: 'movement_stiffness', label: 'Movement Stiffness (Weight: 5)' },
  { value: 'spinning_movements', label: 'Spinning Movements (Weight: 6)' },
  { value: 'loss_of_balance', label: 'Loss of Balance (Weight: 4)' },
  { value: 'unsteadiness', label: 'Unsteadiness (Weight: 4)' },
  { value: 'weakness_of_one_body_side', label: 'Weakness of One Body Side (Weight: 4)' },
  { value: 'loss_of_smell', label: 'Loss of Smell (Weight: 3)' },
  { value: 'bladder_discomfort', label: 'Bladder Discomfort (Weight: 4)' },
  { value: 'foul_smell_ofurine', label: 'Foul Smell of Urine (Weight: 5)' },
  { value: 'continuous_feel_of_urine', label: 'Continuous Feel of Urine (Weight: 6)' },
  { value: 'passage_of_gases', label: 'Passage of Gases (Weight: 5)' },
  { value: 'internal_itching', label: 'Internal Itching (Weight: 4)' },
  { value: 'toxic_look_(typhos)', label: 'Toxic Look (Typhos) (Weight: 5)' },
  { value: 'depression', label: 'Depression (Weight: 3)' },
  { value: 'irritability', label: 'Irritability (Weight: 2)' },
  { value: 'muscle_pain', label: 'Muscle Pain (Weight: 2)' },
  { value: 'altered_sensorium', label: 'Altered Sensorium (Weight: 2)' },
  { value: 'red_spots_over_body', label: 'Red Spots Over Body (Weight: 3)' },
  { value: 'belly_pain', label: 'Belly Pain (Weight: 4)' },
  { value: 'abnormal_menstruation', label: 'Abnormal Menstruation (Weight: 6)' },
  { value: 'dischromic_patches', label: 'Dischromic Patches (Weight: 6)' },
  { value: 'watering_from_eyes', label: 'Watering from Eyes (Weight: 4)' },
  { value: 'increased_appetite', label: 'Increased Appetite (Weight: 5)' },
  { value: 'polyuria', label: 'Polyuria (Weight: 4)' },
  { value: 'family_history', label: 'Family History (Weight: 5)' },
  { value: 'mucoid_sputum', label: 'Mucoid Sputum (Weight: 4)' },
  { value: 'rusty_sputum', label: 'Rusty Sputum (Weight: 4)' },
  { value: 'lack_of_concentration', label: 'Lack of Concentration (Weight: 3)' },
  { value: 'visual_disturbances', label: 'Visual Disturbances (Weight: 3)' },
  { value: 'receiving_blood_transfusion', label: 'Receiving Blood Transfusion (Weight: 5)' },
  { value: 'receiving_unsterile_injections', label: 'Receiving Unsterile Injections (Weight: 2)' },
  { value: 'coma', label: 'Coma (Weight: 7)' },
  { value: 'stomach_bleeding', label: 'Stomach Bleeding (Weight: 6)' },
  { value: 'distention_of_abdomen', label: 'Distention of Abdomen (Weight: 4)' },
  { value: 'history_of_alcohol_consumption', label: 'History of Alcohol Consumption (Weight: 5)' },
  { value: 'fluid_overload', label: 'Fluid Overload (Weight: 4)' },
  { value: 'blood_in_sputum', label: 'Blood in Sputum (Weight: 5)' },
  { value: 'prominent_veins_on_calf', label: 'Prominent Veins on Calf (Weight: 6)' },
  { value: 'palpitations', label: 'Palpitations (Weight: 4)' },
  { value: 'painful_walking', label: 'Painful Walking (Weight: 2)' },
  { value: 'pus_filled_pimples', label: 'Pus Filled Pimples (Weight: 2)' },
  { value: 'blackheads', label: 'Blackheads (Weight: 2)' },
  { value: 'scurring', label: 'Scurring (Weight: 2)' },
  { value: 'skin_peeling', label: 'Skin Peeling (Weight: 3)' },
  { value: 'silver_like_dusting', label: 'Silver Like Dusting (Weight: 2)' },
  { value: 'small_dents_in_nails', label: 'Small Dents in Nails (Weight: 2)' },
  { value: 'inflammatory_nails', label: 'Inflammatory Nails (Weight: 2)' },
  { value: 'blister', label: 'Blister (Weight: 4)' },
  { value: 'red_sore_around_nose', label: 'Red Sore Around Nose (Weight: 2)' },
  { value: 'yellow_crust_ooze', label: 'Yellow Crust Ooze (Weight: 3)' },
  { value: 'prognosis', label: 'Prognosis (Weight: 5)' }
];

const MultiSelectDropdown = () => {
  // Step 2: Use state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Step 3: Handle selection changes
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h3>Select Symptoms</h3>
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        placeholder="Select symptoms..."
      />
      {/* Step 4: Display selected items as tags */}
      <div style={{ marginTop: '20px' }}>
        {selectedOptions.map(option => (
          <span key={option.value} style={{
            display: 'inline-block',
            backgroundColor: '#007bff',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '20px',
            margin: '5px',
          }}>
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
