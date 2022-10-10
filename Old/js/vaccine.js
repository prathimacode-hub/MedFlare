var dateField = document.getElementById('date');
var doseField = document.getElementById('date');
var age18 = document.getElementById('18+');
var date = document.getElementById('date');
var results = document.getElementById('results');
var state = document.getElementById('state');
var selected_district = document.getElementById('district');
var pincode= $("pincode");

var DISTRICT = $("input[type='radio'][name='district']:checked").val();

var states = {
    "Andaman and Nicobar Islands": 1,
    "Andhra Pradesh": 2,
    "Arunachal Pradesh": 3,
    "Assam": 4,
    "Bihar": 5,
    "Chandigarh": 6,
    "Chhattisgarh": 7,
    "Dadra and Nagar Haveli": 8,
    "Daman and Diu": 37,
    "Delhi": 9,
    "Goa": 10,
    "Gujarat": 11,
    "Haryana": 12,
    "Himachal Pradesh": 13,
    "Jammu and Kashmir": 14,
    "Jharkhand": 15,
    "Karnataka": 16,
    "Kerala": 17,
    "Ladakh": 18,
    "Lakshadweep": 19,
    "Madhya Pradesh": 20,
    "Maharashtra": 21,
    "Manipur": 22,
    "Meghalaya": 23,
    "Mizoram": 24,
    "Nagaland": 25,
    "Odisha": 26,
    "Puducherry": 27,
    "Punjab": 28,
    "Rajasthan": 29,
    "Sikkim": 30,
    "Tamil Nadu": 31,
    "Telangana": 32,
    "Tripura": 33,
    "Uttar Pradesh": 34,
    "Uttarakhand": 35,
    "West Bengal": 36
}
var districts = {};

function getDate() {
    const d = dateField.value;
    return d.split('-').reverse().join('-')
}

function getAge() {
    return age18.checked ? 18 : 45;
}

function getDose() {
    return $("input[type='radio'][name='dose']:checked").val();
}

function setStates() {
    for (const s in states) {
        var opt = document.createElement('option');
        opt.value = states[s]
        opt.text = s
        state.appendChild(opt)
    }
    setDistricts();
}

function setDistricts(d = null) {
    if (!state.value){
        const def = selected_district.children[0]
        selected_district.innerHTML = '';
        selected_district.appendChild(def)
        return;
    }
    var req = new XMLHttpRequest();
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state.value}`
    req.open('GET', url, true);
    req.responseType = 'json';
    req.onload = function() {
        var status = req.status;
        if (status === 200) {
            districts = req.response.districts;
            const def = selected_district.children[0];
            console.log(def);
            selected_district.innerHTML = '';
            selected_district.appendChild(def)
            DISTRICTS = []
            for (const d of districts) {
                var opt = document.createElement('option');
                opt.value = d.district_id;
                opt.text = d.district_name;
                selected_district.appendChild(opt)
                DISTRICTS.push(d.district_id);
            }
            if (d) selected_district.value = d;
        }
    };
    req.send();
}

function clearDistricts() {
    $("#div_radios").empty()
}

function addDistricts(d = null) {
    $('#div_radios').append()
    $('#div_radios').append('<input class="btn-check" onclick="onDistrictSelect(this);" type="radio" id="'+d.district_id+'" name="district" value="'+d.district_id+'"><label style="margin: 2px;" class="btn btn-sm btn-outline-primary" for="'+d.district_id+'">'+d.district_name+'</label>');
}


function get(callback, district, match_count) {
    var req = new XMLHttpRequest();
    const d_id = district;
    const date = getDate();
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${d_id}&date=${date}`;
    req.open('GET', url, true);
    req.responseType = 'json';
    req.onload = function () {
        var status = req.status;
        if (status === 200)
            callback(d_id, null, req.response, match_count);
        else
            callback(d_id, status, req.response, match_count);
    };
    req.send();
}


DISTRICTS = []

function get_callback(district_id, err, res, match_count){
    if (err) return
    const date = getDate();
    const age = getAge();
    const map_dose = {
        "dose1": "available_capacity_dose1",
        "dose2": "available_capacity_dose2",
        "both": "available_capacity",
    }

    var capacity_var = getDose();
    var available_capacity_var = map_dose[capacity_var]
    let count = 0;
    var district_name = res.centers[0]["district_name"]

    const available = res.centers.filter(center => {
        count += center.sessions[0].min_age_limit === age;
        return center.sessions.some(s => (s[available_capacity_var] > 0 && s.min_age_limit === age))
    });
    const template = center => `
        <div class="p-1" style="border: 1px solid black">
            <b>${center.name}, Pincode: ${center.pincode}</b> <span class="badge rounded-pill bg-primary">${center.sessions[0]["vaccine"]}</span> <span class="badge rounded-pill bg-success">${center.fee_type}</span><br>
            ${center.sessions.filter(s => s[available_capacity_var] > 0).map(s => s.date + '- <strong>Total Doses:</strong> <mark>' + s.available_capacity + '</mark>, <strong>Dose 1:</strong> <mark>'+ s.available_capacity_dose1+ '</mark>, <strong>Dose 2:</strong> <mark>'+ s.available_capacity_dose2+ '</mark> <span class="badge bg-secondary">' + s.min_age_limit + '+</span>').join('<br>')}<br>
        </div>
    `;

    if (available.length === 0) {

        results.innerHTML += `<h4 style="display: none;">${district_name}</h4>`
        results.innerHTML += `<div id="result_msg_${district_id}" style="display: none;" class="alert alert-danger">Found ${count} centers listed for ${age}+ age group in your district</div>`

        // results.innerHTML += `<div>All ${age}+ vaccine centers are fully booked<br>Please keep checking for updates</div> <hr>`
    } else {
        match_count = match_count + 1
        console.log(match_count);
        results.innerHTML += `<div id="result_msg_${district_id}" class="alert alert-success"><h4>${district_name}</h4>Found <b>${count} centers</b> listed for ${age}+ age group in your district, out of which <b>${available.length} centers</b> have available slots, head over to the <b><a href="https://selfregistration.cowin.gov.in/" target="_blank">official CoWIN website</a></b> to book the slot</div>`
        results.innerHTML += available.map(c => template(c)).join(' ')
        results.innerHTML += `<hr>`
        var div_1 = document.getElementById('div_1');
        div_1.outerHTML = ""
    }
}


function check() {
    if (!state.value){
        alert("Select State");
        return;
    }
    results.innerHTML = ""
    let match_count = 0;
    if (selected_district.value == "All") {
        for (const d in DISTRICTS) {
            var district_id = DISTRICTS[d];
            get(callback=get_callback, district=district_id, match_count=match_count)

        }
    }else {
            get(callback=get_callback, district=selected_district.value, match_count=match_count)
    }
    if (match_count === 0){
        results.innerHTML = `<div id="div_1" class="alert alert-danger">No Result found</div>`
    }

}


window.onload = () => {
    const s = localStorage.getItem('state')
    const d = localStorage.getItem('district')
    date.valueAsDate = new Date();
    setStates();
}