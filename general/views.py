from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.

def home(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        job_type = request.POST['job_type']
        description = request.POST['description']
        message = "Hello, " + '\n' + name + ' just filled out your contact form, check the details below: \n' + ' ' + '\n' + 'Name: ' + name + '\n' + 'Email: ' + email + '\n' + 'Phone: ' + phone + '\n' + 'Job Type: ' + job_type + '\n' + 'Description: ' + description 
        subject = "New Contact Form Entry From " + name
        send_mail(
            subject,
            message,
            email,
            ['adebimpehabeeb10@gmail.com'],
            fail_silently= False

        )
     
        return render(request, 'index.html', {'name':name})
    else:
        return render(request, 'index.html', {})    
