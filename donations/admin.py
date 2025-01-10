from django.contrib import admin
from .models import Donor, Charity, DonationTransaction

# Register your models here.

admin.site.register(Donor)
admin.site.register(Charity)
admin.site.register(DonationTransaction)
