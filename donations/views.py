from django.shortcuts import render
from rest_framework import generics
from .models import Donor, Charity, DonationTransaction
from .serializers import DonorSerializer, CharitySerializer, DonationTransactionSerializer

# Create your views here.

class DonorListCreate(generics.ListCreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

class CharityListCreate(generics.ListCreateAPIView):
    queryset = Charity.objects.all()
    serializer_class = CharitySerializer

class DonationTransactionListCreate(generics.ListCreateAPIView):
    queryset = DonationTransaction.objects.all()
    serializer_class = DonationTransactionSerializer
