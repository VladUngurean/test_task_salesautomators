document.getElementById('dealForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector(".create_job").textContent = "Request is sent"

    //data from inputs start --------------------------------
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let jobType = document.getElementById('job_type').value;
    let jobInfo = document.getElementById('job_info').value;
    let jobDescription = document.getElementById('job_desc').value;
    let address = document.getElementById('adress').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let price = document.getElementById('price').value;
    let serviceLocation = document.getElementById('service_location').value;
    let date = document.getElementById('date').value;
    let startHours = document.getElementById('start_hours').value;
    let endHours = document.getElementById('end_hours').value;
    let technician = document.getElementById('technician').value;
    //data from inputs end --------------------------------

    const apiToken = '809168eab345252b31b3f3fca6403329fbd5e6f6';
    const dealUrl = `https://api.pipedrive.com/v1/deals?api_token=${apiToken}`;

    let dealData = {
        title: `Deal for ${firstName} ${lastName}`,
        value: price,
        '1b1d5b63ee03f66186246f5b9494ad5e70bc249e': address,
        '59b8729b74894335b3cb5650e3d750c8b67ecdf8': jobType,
        '3b901cc3c1c13eadc390eea305286a856e28cc29': date,
        '0b8a208bceadc8275df9a0d1338ebd299f12e3a6': startHours,
        '3a4beb4f2451d6f81ebc274470ab6f4ef237882b': endHours,
        '340cbf5ed7db57d72810aa34c11f2e0bf193fbb4': serviceLocation,
        '9783ef1063cb4926e8c0f422c5c30debaefb6b0d': technician,
        '92575e431f1296e290da74f2bb033baaa8738b32': phone,
        '51e612d26cadee663dc30ddf41ba41f047308812': email,
        '0863bcba65322983962344bbd74772e1804ecc5b': jobInfo,
        '60e47ba07a8593e77558ec7755e4c1e02c22da49': jobDescription,
        '275a3869ce5688df6ec3a7769279d51e4bfbc0b0': city,
        '2b24ba8261731f8505da09e325159a6923e82433': state,
    };

    axios.post(dealUrl, dealData)
        .then(response => {
            if (response.data.success) {
                document.getElementById('dealForm').reset();
                document.querySelector("body").innerHTML = ""
                document.querySelector("body").innerHTML = "<p style='text-align:center; font-size:25px'>Deal created successfully! <br> Wait a second...</p>"
                setTimeout(() => {
                    location.reload();
                }, 3000);
            } else {
                alert('Error creating deal');
                document.getElementById('dealForm').reset();
                location.reload();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});