const usd = document.querySelector("#usd");
const som = document.querySelector("#som");
const euro = document.querySelector("#euro");

const convert = (elem, target, isTrue, rate) => {
    elem.addEventListener("input", () => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                isTrue ?
                    (target.value = (elem.value / data[rate]).toFixed(2))
                : 
                    (target.value = (elem.value * data[rate]).toFixed(2));
                elem.value === "" ? (target.value = "") : null;
        })
        .catch(error => console.error(error));
    });
};

convert(som, usd, 9, "usd-som");
convert(usd, som, "", "usd-som");
convert(som, euro, 21, "euro-som");
convert(euro, som, "", "euro-som");
convert(euro, usd, 13, "euro-dollar");
convert(usd, euro, "", "euro-dollar");