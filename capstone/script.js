(function() {
    "use strict";

    let messages = [
        {
            "id": "#truck",
            "title": "Light Trucks and SUVs",
            "message": "In America, trucks and SUVs are classified as light trucks, exempting them from the standards that passenger cars must follow. For instance, they are not required to be fuel-efficient, leading to excessive gas consumption that harms both the environment and the owner's wallet. Additionally, their design, including high bumpers, makes them more dangerous and potentially more lethal in collisions. The elevated design of trucks also reduces the visibility of the close field of vision."
        },
        {
            "id": "#disabledParking",
            "title": "Cars and Disability",
            "message": "Not everyone possesses the physical ability to drive due to various reasons, such as age-related conditions, disabilities, or health issues. Elderly individuals may face challenges like diminished reflexes and vision impairments, while people with certain disabilities might struggle with the physical demands of operating a vehicle. Additionally, chronic health conditions can impede one's capacity to drive safely."
        },
        {
            "id": "#bus",
            "title": "Buses and Public Transportations",
            "message": "Americans heavily rely on cars, resulting in more spaces and resources being allocated for automobiles and their infrastructure. Consequently, this leaves fewer resources and less space for public transportation. However, public transportation is superior to private cars in many aspects, including efficiency, environmental impact, and accessibility."
        },
        {
            "id": "#crosswalk",
            "title": "Cars and Health",
            "message": "Cars promote sedentary, less active lifestyles, which can lead to health problems such as obesity, heart disease, and high blood pressure. Beyond physical health, mental well-being is also impacted by car use. Being stuck in traffic can decrease mood and increase stress levels. Additionally, allocating more space for cars reduces green spaces, which are beneficial for mental health. Cars also contribute to social isolation, reducing opportunities to form and maintain community connections."
        },
        {
            "id": "#car",
            "title": "Private Cars",
            "message": "Urban sprawl refers to the rapid outward expansion of cities and towns, often characterized by low-density housing zones. This expansion makes owning a car a necessity rather than a choice for everyday tasks such as visiting the doctor or grocery shopping. However, not everyone can afford a car. Combined with inadequate public transportation, this results in limited access to resources and amenities for underserved communities."
        },
        {
            "id": "#parkingStructure",
            "title": "Parking Spaces and Inefficient Land Usage",
            "message": "Inefficient land use is one of the major arguments against cars. Accommodating more cars requires extensive space for parking. In commercial zones, for every 1,000 square feet of retail space, there must be parking for at least 5 to 10 cars. This allocation of space for parking reduces the availability of land for other, potentially more beneficial uses such as more affordable housing or social resources."
        },
        {
            "id": "#speedLimit",
            "title": "Speed Limit and Pedestrian Safety",
            "message": "In 2021, approximately 7,388 pedestrians lost their lives and around 60,577 were injured in traffic accidents. Notably, 75% of these fatalities occurred on roads with speed limits of 30 mph or higher. This highlights the increased risk pedestrians face on higher-speed roadways, underscoring the need for improved safety measures in these areas."
        },
        
    ]

    console.log(messages[0].message);
    for (let i = 0; i < messages.length; i++) {
        $(messages[i].id).on("click", function() {
            infoAlert(messages[i].title, messages[i].message);
        });
    }
})();