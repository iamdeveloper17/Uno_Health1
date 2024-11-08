// Make a GET request to an API
// axios.get('https://api.example.com/products')
//   .then(function (response) {
//     // Handle success
//     console.log('Data:', response.data);
//   })
//   .catch(function (error) {
//     // Handle error
//     console.log('Error:', error);
//   });

const names = document.querySelector('#product_name')

const data = [
    {
      "id": 1,
      "name": "Defibrillator",
      "description": "A device used to restore a normal heart rhythm.",
      "category": "Cardiology",
      "price": "$1,500",
      "image": "/images/Defibrillator.png"
    },
    {
      "id": 2,
      "name": "X-Ray Machine",
      "description": "A device that uses radiation to create images of the inside of the body.",
      "category": "Radiology",
      "price": "$25,000",
      "image": "/images/X-Ray_Machine.png"
    },
    {
      "id": 3,
      "name": "ECG Machine",
      "description": "Monitors the electrical activity of the heart.",
      "category": "Cardiology",
      "price": "$2,000",
      "image": "/images/ECG_machine.png"
    },
    {
      "id": 4,
      "name": "Ultrasound Machine",
      "description": "Uses sound waves to create images of internal organs.",
      "category": "Radiology",
      "price": "$10,000",
      "image": "/images/Ultrasound_machine.png"
    },
    {
      "id": 5,
      "name": "Infusion Pump",
      "description": "Delivers fluids, such as nutrients or medications, into a patient's body.",
      "category": "Anesthesia",
      "price": "$3,500",
      "image": "/images/infusion_pump.png"
    },
    {
      "id": 6,
      "name": "MRI Scanner",
      "description": "Uses strong magnetic fields and radio waves to create detailed images of organs.",
      "category": "Radiology",
      "price": "$200,000",
      "image": "/images/MRI_scanner.png"
    },
    {
      "id": 7,
      "name": "Ventilator",
      "description": "Assists patients who are unable to breathe adequately on their own.",
      "category": "Respiratory",
      "price": "$8,000",
      "image": "/images/Ventilator.png"
    },
    {
      "id": 8,
      "name": "Oxygen Concentrator",
      "description": "Provides concentrated oxygen to patients with breathing issues.",
      "category": "Respiratory",
      "price": "$600",
      "image": "/images/oxygen_concentrator.png"
    },
    {
      "id": 9,
      "name": "Patient Monitor",
      "description": "Monitors vital signs such as heart rate, blood pressure, and oxygen levels.",
      "category": "Monitoring",
      "price": "$4,500",
      "image": "/images/patient_moniter.png"
    },
    {
      "id": 10,
      "name": "Surgical Laser",
      "description": "A device used in surgery to remove or cut tissue using focused light.",
      "category": "Surgery",
      "price": "$50,000",
      "image": "/images/surgical_laser.png"
    }
  ]

  const product_name = data.map((e)=>{
    return `
    <a href="#">
    <img src=${e.image} />
    <h2>${e.name}</h2>
    <h4>${e.price}</h4>
    <p>${e.description}</p>
    </a>
    `
  })

  names.innerHTML = product_name.join("")
