from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .my_project import MyModel

class PredictStressLevel(APIView):
    def post(self, request):
        data = request.data
        model = MyModel()
        prediction = model.stresslevel_prediction([data.get('humidity', 0), data.get('Temperature', 0), data.get('step_count', 0)])
        return Response({'prediction': prediction}, status=status.HTTP_200_OK)

