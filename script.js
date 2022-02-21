console.log("Hello world");

const data = [
    {
        name: "Tusif",
        age: 21,
        city: "Nawada",
        language: "JavaScript",
        framework: "Reactjs",
        image: "https://randomuser.me/api/portraits/men/1.jpg"

    },
    {
        name: "Suhel",
        age: 26,
        city: "Delhi",
        language: "C",
        framework: "Clang",
        image: "https://randomuser.me/api/portraits/men/22.jpg"

    },
    {
        name: "ali",
        age: 25,
        city: "Delhi",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/29.jpg"

    },
    {
        name: "Usama",
        age: 21,
        city: "Delhi",
        language: "C++",
        framework: "C++Frame",
        image: "https://randomuser.me/api/portraits/men/33.jpg"

    },
]

function CvIterator(profiles) {
    let nextindex = 0;
    return {
        next: function () {

            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } :
                { done: true }

        }
    }

}
const candidates = CvIterator(data);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">Works in: ${currentCandidate.language}</li>
    <li class="list-group-item">Frameworks: ${currentCandidate.framework}</li>
    </ul>`
    }

    else {
        // alert("end of application");
        window.location.reload();
    }

}

