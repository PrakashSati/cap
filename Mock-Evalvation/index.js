let container = document.getElementById("container");

    let getData = async (url) => {
        let res = await fetch(url);
        let data = await res.json();
        showData(data);
    }   
   
    getData(`https://fakestoreapi.com/products`);

    let showData = (arr) => {
        container.innerHTML = ""
        arr.forEach(ele => {
            let image = document.createElement("img");
            image.src = ele.image;

            let title = document.createElement(`h3`);
            title.innerText = ele.title;

            let price = document.createElement("p");
            price.innerText = ele.price;

            let div = document.createElement(`div`);

            div.append(image, title, price);
            container.append(div);

        });
    }

    let selectCategory = document.getElementById(`selectCategory`);

    selectCategory.addEventListener("change", handleChange);

    function handleChange(){
        let value = selectCategory.value
        
        let url = `https://fakestoreapi.com/products/category/${value}`

        getData(url)
    }

   let sorting = document.getElementById("sorting");

    sorting.addEventListener("change", sortingFun);
    
    function sortingFun(){
        let value = sorting.value;
        console.log(value);

        let url = `https://fakestoreapi.com/products?sort=${value}`;
        getData(url);
    }
    let search = document.getElementById("search");
    search.addEventListener("click", searchFun)
    function searchFun(){
        // let value = search.value
        let url = `https://fakestoreapi.com/products/`
        getData(`https://fakestoreapi.com/products`)
    }