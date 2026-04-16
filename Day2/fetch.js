// fetch("https://fakestoreapi.com/products")
//     .then((product) => (product.json()))
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
const getData = async() => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("fetch error");
    }
}
getData();