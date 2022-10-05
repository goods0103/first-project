// const func1 = (str) => {
//     var str2 = ""
//     for(var i=0; i<str.length; i++ ){
        
//         if(str[i] === " "){
//             str2 += "-";
//         }
//         else
//             str2 += str[i];
//     }
//     console.log(str2);
// }

// func1("this is fucking React");

// const str = "React is fuck"

// const func1 =  str.replace(/ /g, "-").toLowerCase()

// console.log(func1);

// const { render } = ReactDOM;
// const Welcome = () => (
//     <div id = "welcome">
//         <h1>Hello world</h1>
//     </div>
// );

// render(<Welcome />, document.getElementById('traget'));

// let color_lawn = {
//     title: "잔디",
//     color: "#00FF00",
//     rating: 0
// };

// function rateColor(obj, rating){
//     // obj.rating = rating;
//     // return obj;
//     return Object.assign({}, obj, {rating: rating});
// }

// const rateColor2 = (obj, rating) => ({
//     ...obj, rating
// })

// console.log(color_lawn.rating);

// console.log(rateColor2(color_lawn, 5).rating);
// console.log(color_lawn.rating);
useEffect(() => {
    console.log(document.location);
    console.log(window.location.href);
  }, []);

function Header(text){
    const h1 = document.createElement('h1');
    h1.innerText = text;
    const div = document.getElementsById("container");
    div.appendChild(h1);
}

Header("Header() caused side effects");