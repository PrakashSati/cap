let department = document.querySelector('#department');
let gender = document.querySelector('#gender');
let salary = document.querySelector('#salary');
let nextBtn = document.querySelector('#next');
let pervBtn = document.querySelector('#perv');
let count = 1;
let pageCount = 1;
let tbody = document.querySelector('tbody');
let fetchDataContainer = document.querySelector('#fetchDataContainer');
let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10`;
let fetchRequest = async (url) => {
   let res = await fetch(url);
    let Data = await res.json();
    showData(Data.data);
}
fetchRequest(url);


let showData= (data) => {
    tbody.innerHTML = null;
    data.forEach(ele => {
        let employeesCard = document.createElement('tr');
        employeesCard.className = employeesCard;
        let sno = document.createElement('td');
        sno.innerText = count;
        let employeeName = document.createElement('td');
        employeeName.innerText = ele.name;
        let employeeGender = document.createElement('td');
        employeeGender.innerText = ele.gender;
        let employeeDepartment = document.createElement('td');
        employeeDepartment.innerText = ele.department;
        let employeeSalary = document.createElement('td');
        employeeSalary.innerText = ele.salary;

        employeesCard.append(sno, employeeName, employeeGender, employeeDepartment, employeeSalary);
        tbody.append(employeesCard);
        count++;
    });
};


// adding event listener on department select tag;
department.addEventListener('change',() => {
    departmentFilter();
});

// departmentFilter function that filter our data accoring to departments;
let departmentFilter = () => {
    let value = department.value;
    if(value =='hr' || value == 'marketing' || value == 'finance' || value == 'engineering' || value == 'operations') {
        let Url =`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCount}&limit=10&filterBy=department&filterValue=${value}`;
        fetchRequest(Url);
    };
    count = 1;
};




// adding event listener on gender select tag;
gender.addEventListener('change',() => {
    genderFilter();
});

// genderFilter function that filter our data accoring to gender;
let genderFilter = async () => {
    let value = gender.value;
    if(value == 'male' || value == 'female' || value == 'others'){
        let Url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCount}&limit=10&filterBy=gender&filterValue=${value}`;
        fetchRequest(Url);
    }
    count = 1;
};




// adding event listener on salary select tag;
salary.addEventListener('change',() => {
    salaryFilter();
})
// salaryFilter function that sort our data accoring to ascending and descending order respected to salary;
let salaryFilter = async () => {
    let value = salary.value;
    if(value == 'asc' || value == 'desc') {
        let Url =`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCount}&limit=10&filterBy=gender&filterValue=female&sort=salary&order=${value}`;
        fetchRequest(Url);
    }
    count = 1;
};
    
// adding addEventListener on next btn for changing the page; 
nextBtn.addEventListener('click', () => {
    nextHandel();
});


// nextHandel function that increase our pages by 1;
let nextHandel = () => {
    pageCount++;
    if(pageCount > 10) {
        pageCount = 1;
    }
    if(count > 100) {
        count = 1;
    }
    let Url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCount}&limit=10";
    fetchRequest(Url);
};



// adding addEventListener on perv btn for changing the page; 
pervBtn.addEventListener('click', () => {
    pervHandel();
});
    
    

// pervHandel function that decrease our pages by 1;
let pervHandel = () => {
    pageCount--;
    if(pageCount < 1) {
        pageCount = 10;
    }
    if(count < 0 || count > 100) {
        count = 1;
    }
    let Url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pageCount}&limit=10";
    fetchRequest(Url);
};