import React from 'react';
import './App.css'; 
import MyButton from './MyButton';

function TransparentContainer() {
  return (
    <div className="page-container">
      <div className="transparent-container ">
        <h2>About "AI Doc"</h2>
        <p><strong>Welcome to Our Disease Prediction and Herbal Medication Recommendation Platform</strong> </p>
        <p>In today's fast-paced world, health is often compromised due to a lack of timely intervention and accurate diagnosis. Our platform bridges the gap between traditional wisdom and modern technology to bring you a comprehensive solution for disease prediction and herbal medication recommendations. </p>
        <MyButton  value={'Start Now'}/>
        <br />
       <p> <b>Warning Message for AI DOC Project</b> <br />

<b>Attention:</b>

AI DOC Disease Prediction System

Please be aware that while our AI DOC system provides predictions based on input symptoms, it is important to use this information responsibly. Here are some critical points to consider: <br /> <br />

   <b> Medical Advice:</b> The predictions and information provided by AI DOC are based on machine learning models trained on historical data. They should not replace professional medical advice. Always consult a healthcare professional for accurate diagnosis and treatment. <br /> <br />

   <b> Accuracy: </b> The accuracy of disease predictions may vary. The model's predictions are based on the symptoms you provide, and its performance may be affected by the completeness and correctness of the input data. <br /> <br />

   <b> Data Privacy:</b> Ensure that you are using AI DOC in accordance with relevant data protection regulations. Avoid sharing sensitive or personal health information without proper consent and security measures. <br /> <br />

   <b> Model Limitations:</b> The AI model is continuously being improved, but it may not account for all possible conditions or variations in symptoms. Use the system as a supplementary tool rather than a definitive diagnosis.

   <br /> <br /> <b> Feedback and Support: </b> If you encounter issues or have feedback on the predictions, please reach out to our support team. Your input helps us improve the accuracy and functionality of AI DOC.

    <br /> <h2>Thank you for using AI DOC. <br />Your health and safety are our top priority </h2></p>
      </div>
    </div>
  );
}

export default TransparentContainer;
