import numpy as np
import pickle
import streamlit as st  

class MyModel:
    def __init__(self):
        self.loaded_model = pickle.load(open(r'C:/Users/mihir/Desktop/hackthon/stress-level-detection-api-master/stress_trained (2).sav','rb'))

    def stresslevel_prediction(self, input_data):
        id_np_array = np.asarray(input_data)
        id_reshaped = id_np_array.reshape(1,-1)
        prediction = self.loaded_model.predict(id_reshaped)

        if prediction[0] == 0:
            return "Stress Level: LOW"
        elif prediction[0] == 1:
            return "Stress Level: MEDIUM"
        else:   
            return "Stress Level: nothing"
                            
def main():
    st.title('STRESS LEVEL PREDICTION WEB APP')
    
    Humidity = st.text_input('Humidity Value')
    Temperature = st.text_input('Body Temperature')
    Step_count = st.text_input('Number of Steps')
    
    model = MyModel()
    
    # Prediction code
    diagnosis = ''
    
    if st.button('PREDICT'):
        diagnosis = model.stresslevel_prediction([Humidity,Temperature,Step_count])
        
    st.success(diagnosis)
                            
if __name__ == '__main__':
    main()
