window.navigator.geolocation.getCurrentPosition(function (data){
    console.log(data);

    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    let k = 3;
    //document.write(latitude,longitude);

    $.ajax({
        url: "https://api.opencagedata.com/geocode/v1/json?q=22.9867569+87.8549755&key=1702b8d036904e5ead1aa0cc88da0bf2",
        success:function (data){
            console.log(data);
            let village = data.results[0].components.village;
            let district =  data.results[0].components.state_district;
            let state =  data.results[0].components.state;
            let country =  data.results[0].components.country;
            let continent =  data.results[0].components.continent;

            document.getElementById("address").innerHTML = `<h2><b>${village}</b></h2><h4>${district}</h4><h4>${state}</h4><h4>${country}</h4><h4>${continent}</h4>`
        },
        error:function (){
            console.log("some error");
        }
    });

    $.ajax({
        url:"https://api.unsplash.com/search/photos?per_page=${k}&query=${village}&client_id=VV7Xwqd4dJcZobakbJSpu76rZ9AYFJroxdFvYg1U43Y",
        success:function (data){
            let url3 = data.results[0].urls.regular;

            document.getElementById("village").innerHTML = `<img src="${url3}">`

        },
        error:function (){
            console.log("some error ocurred")
        }
    })

    $.ajax({
        url:"https://api.unsplash.com/search/photos?per_page=${k}&query=${district}&client_id=VV7Xwqd4dJcZobakbJSpu76rZ9AYFJroxdFvYg1U43Y",
        success:function (data){
            let url3 = data.results[0].urls.regular;

            document.getElementById("district").innerHTML = `<img src="${url3}">`

        },
        error:function (){
            console.log("some error ocurred")
        }
    })

    $.ajax({
        url:"https://api.unsplash.com/search/photos?per_page=${k}&query=${country}&client_id=VV7Xwqd4dJcZobakbJSpu76rZ9AYFJroxdFvYg1U43Y",
        success:function (data){
            let url3 = data.results[0].urls.regular;

            document.getElementById("country").innerHTML = `<img src="${url3}">`

        },
        error:function (){
            console.log("some error ocurred")
        }
    })
})