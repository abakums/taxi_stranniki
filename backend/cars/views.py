from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import serializers, status

from cars.models import Brand, Model, Color


class CarsGetAPIView(APIView):
    permission_classes = [AllowAny]

    class OutputSerializer(serializers.Serializer):
        class ColorsSerializer(serializers.ModelSerializer):
            class Meta:
                model = Color
                fields = ("title",)

        class CarsSerializer(serializers.ModelSerializer):
            class ModelsSerializer(serializers.ModelSerializer):
                class Meta:
                    model = Model
                    fields = ("title", "value")

            class Meta:
                model = Brand
                fields = ("title", "value", "models")

            models = ModelsSerializer(many=True)

        cars = CarsSerializer(many=True)
        colors = ColorsSerializer(many=True)

    def get_queryset(self):
        return {
            "cars": Brand.objects.all(),
            "colors": Color.objects.all()
        }

    def get(self, request):
        data = self.OutputSerializer(self.get_queryset()).data
        return Response(data=data, status=status.HTTP_200_OK)
