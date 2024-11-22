from rest_framework import serializers
from .models import Donor, Charity, DonationTransaction

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donor
        fields = '__all__'

class CharitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Charity
        fields = '__all__'

class DonationTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationTransaction
        fields = '__all__'