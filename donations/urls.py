from django.urls import path
from .views import DonorListCreate, CharityListCreate, DonationTransactionListCreate

urlpatterns = [
    path('donors/', DonorListCreate.as_view(), name='donor-list-create'),
    path('charities/', CharityListCreate.as_view(), name='charity-list-create'),
    path('transactions/', DonationTransactionListCreate.as_view(), name='transaction-list-create'),
]
