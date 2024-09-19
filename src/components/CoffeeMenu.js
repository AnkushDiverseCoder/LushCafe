import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  
  const bachelors = [
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Butterscotch",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Dark Chocolate",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Hazelnut",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Nutella",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Brownie",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Red Velvet",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "White Chocolate",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Mango",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Blueberry",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Popcorn",
      subname: "",
      price: "349",
    },
    {
      className: "bachelors",
      imageSrc: "images/bachelors.jpg",
      name: "Kit Kat",
      subname: "",
      price: "349",
    },
  ];
  
  const couples = [
    {
      className: "couples",
      imageSrc: "images/couples.jpg",
      name: "Popcorn Pineapple",
      subname: "Popcorn Syrup, Pineapple Crush, Ice-cream and Milk",
      price: "349",
    },
    {
      className: "couples",
      imageSrc: "images/couples.jpg",
      name: "Peanut Butter Oreo",
      subname: "Oreo Biscuit, Ice-cream, Peanut Butter and Milk",
      price: "349",
    },
    {
      className: "couples",
      imageSrc: "images/couples.jpg",
      name: "Bancoffee",
      subname: "Banana, Expresso, Ice-cream and Milk",
      price: "349",
    },
    {
      className: "couples",
      imageSrc: "images/couples.jpg",
      name: "Blueberry White Chocolate",
      subname: "Blueberry Puree, Ice-cream, White Chocolate and Milk",
      price: "349",
    },
  ];
  const lushSignatureDrinks = [
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Bamboleo",
      subname: "Passion Fruit Syrup, Coconut Syrup, Milk",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Cocumint Cooler",
      subname: "Fresh coconut with the touch of cucumber and mint",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Ping Pong",
      subname: "Pomegranate, Raspberry, Cranberry",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "The Paradise",
      subname: "Strawberry & Passion Fruit Syrup, Orange and Pineapple Juice",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Ee Sala Cup Namde",
      subname: "Orange Chunks, Basil leaves, Peach Syrup, Orange Juice",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Saffron Cream",
      subname: "Saffron Syrup, Amul Cream, Orange Juice",
      price: "349",
    },
    {
      className: "lushSignatureDrinks",
      imageSrc: "images/lushSignatureDrinks.jpg",
      name: "Kick The Kiwi",
      subname: "Green Apple, Kiwi Fruit, Lemon, Mint, Triple Sec, Ice-Cubes, Sprite",
      price: "349",
    },
  ];
  
  const hotbeverages = [
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Cappuccino",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Americano",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Americano Orange",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Caffe Latte",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Latte Mocha",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Latte Macchiato",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Espresso Macchiato",
      subname: "",
      price: "",
    },
    {
      className: "hotbeverages",
      imageSrc: "images/hotbeverages.jpg",
      name: "Hot chocolate",
      subname: "",
      price : "",
    },
  ];
  
  const coldBeverages = [
    {
      className: "coldBeverages",
      imageSrc: "images/coldBeverages.jpg",
      name: "Coffee Frappe",
      subname: "Milk, Ice Cubes, Espresso, Chocolate Sauce",
      price: "249",
    },
    {
      className: "coldBeverages",
      imageSrc: "images/coldBeverages.jpg",
      name: "Coffee Velvet",
      subname: "Milk, Ice Cubes, Espresso, Sponge Velvet, Cream",
      price: "399",
    },
    {
      className: "coldBeverages",
      imageSrc: "images/coldBeverages.jpg",
      name: "Iced Caffee Latte",
      subname: "Milk, Ice Cubes, Espresso, Chocolate Sauce",
      price: "349",
    },
  ];
  
  const mainCourse = [
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Peri Peri Paneer Steak",
      subname: "vegetables on the side.",
      price: "449",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Cauliflower Steak",
      subname: "",
      price: "349",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Veg Delight Rice",
      subname: "",
      price: "349",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Panneer Delight Rice",
      subname: "",
      price: "429",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Chicken Stroganoff",
      subname: "",
      price: "449",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Chicken Steak Rice",
      subname: "",
      price: "449",
    },
    {
      className: "mainCourse",
      imageSrc: "images/mainCourse.jpg",
      name: "Teco Lane Prawns",
      subname: "",
      price: "449",
    },
  ];
  
  const riceBowls = [
    {
      className: "riceBowls",
      imageSrc: "images/riceBowls.jpg",
      name: "Turmaric Garlic Fried Rice With Chilly Paneer",
      subname: "",
      price: "399",
    },
    {
      className: "riceBowls",
      imageSrc: "images/riceBowls.jpg",
      name: "Mushroom Stroganoff",
      subname: "",
      price: "309",
    },
    {
      className: "riceBowls",
      imageSrc: "images/riceBowls.jpg",
      name: "Paneer Stroganoff",
      subname: "",
      price: "399",
    },
    {
      className: "riceBowls",
      imageSrc: "images/riceBowls.jpg",
      name: "Turmaric Garlic Fried Rice With Chicken",
      subname: "",
      price: "469",
    },
  ];
  
  const grillFish = [
    {
      className: "grillFish",
      imageSrc: "images/grillFish.jpg",
      name: "Chermoula Chicken Steak With Espagnole Sauce",
      subname: "",
      price: "399",
    },
    {
      className: "grillFish",
      imageSrc: "images/grillFish.jpg",
      name: "Cilentro Baked Fish With Orange Butter Sauce",
      subname: "",
      price: "439",
    },
    {
      className: "grillFish",
      imageSrc: "images/grillFish.jpg",
      name: "Prawns In White Lemon Butter Sauce",
      subname: "",
      price: "529",
    },
    {
      className: "grillFish",
      imageSrc: "images/grillFish.jpg",
      name: "Grill Fish (Lemon Butter Garlic Sauce)",
      subname: "",
      price: "469",
    },
  ];
  
  const lemanades = [
    {
      className: "lemanades",
      imageSrc: "images/lemanades.jpg",
      name: "Masala",
      subname: "Masala Powder, Lemon Syrup, Ice Cubes",
      price: "129",
    },
    {
      className: "lemanades",
      imageSrc: "images/lemanades.jpg",
      name: "Sweet",
      subname: "Sugar Syrup, Lemon Syrup, Ice Cubes",
      price: "119",
    },
    {
      className: "lemanades",
      imageSrc: "images/lemanades.jpg",
      name: "Salt",
      subname: "Lemon Syrup, Ice Cubes, Salt",
      price: "119",
    },
    {
      className: "lemanades",
      imageSrc: "images/lemanades.jpg",
      name: "Lemonade Mixture",
      subname: "Lemon, Sugar Syrup, Soda",
      price: "119",
    },
  ];
  
  const smoothies = [
    {
      className: "smoothies",
      imageSrc: "images/smoothies.jpg",
      name: "Avocado Smoothie",
      subname: "Avocado, Ice-cream and Curd",
      price: "349",
    },
    {
      className: "smoothies",
      imageSrc: "images/smoothies.jpg",
      name: "Blueberry Smoothie",
      subname: "Blueberry, Ice-cream and Curd",
      price: "299",
    },
    {
      className: "smoothies",
      imageSrc: "images/smoothies.jpg",
      name: "Strawberry Smoothie",
      subname: "Avocado, Ice-cream and Curd",
      price: "349",
    },
  ];
  
  const mocktails = [
    {
      className: "mocktails",
      imageSrc: "images/mocktails.jpg",
      name: "Virgin Mojito",
      subname: "Mint Syrup, Mint Leaves, Lemon Wedges, Ice Cubes",
      price: "249",
    },
    {
      className: "mocktails",
      imageSrc: "images/mocktails.jpg",
      name: "Blue Curacao",
      subname: "Blue Curacao, Mint Leaves, Lemon Wedges, Ice Cubes",
      price: "299",
    },
    {
      className: "mocktails",
      imageSrc: "images/mocktails.jpg",
      name: "Strawberry Mojito",
      subname: "Strawberry Crush, Mint Leaves, Lemon Wedges, Ice Cubes",
      price: "349",
    },
    {
      className: "mocktails",
      imageSrc: "images/mocktails.jpg",
      name: "Peach",
      subname: "Peach, Mint Leaves, Lemon Wedges, Ice Cubes",
      price: "299",
    },
    {
      className: "mocktails",
      imageSrc: "images/mocktails.jpg",
      name: "Mango",
      subname: "Mango Crush, Mint Leaves, Lemon Wedges, Ice Cubes",
      price: "349",
    },
  ];
  
  const pastas = [
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Spaghetti Pomodoro",
      subname: "Mixed in pasta sauce and fresh basil served with garlic bread on side.",
      price: "399",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Spaghetti Aglio e Olio",
      subname: "Mixed in dry garlic, dry herbs, chilli flakes, tomato and olives.",
      price: "419",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Mac and Cheese",
      subname: "Macaroni mixed in bechamel sauce, cheddar, parmesan cheese",
      price: "399",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Veg Penne Alfredo",
      subname: "A classic favorite creamy white sauce, Penne Pasta mixed with blanched exotic Vegetables like Broccoli, Zucchini, Bell Pepper, Black Olives",
      price: "389",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Chicken Penne Pasta",
      subname: "Alfredo Cream Sauce.Mix Sauce.Red Sauce.",
      price: "449",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Crispy Chicken Pasta",
      subname: "",
      price: "469",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Chicken Pasta Macro",
      subname: "Alfredo Cream Sauce and Mix Sauce (With Pink Sauce)",
      price: "449",
    },
    {
      className: "pastas",
      imageSrc: "images/pastas.jpg",
      name: "Spaghette Pasta Chicken",
      subname: "Honey sweetened chicken, chilli sauce, marmalade and green onion",
      price: "449",
    },
  ];
  
  const burgers = [
    {
      className: "burgers",
      imageSrc: "images/burgers.jpg",
      name: "Vegetable Patty Burger",
      subname: "Spiced vegetables with masala paneer in a patty on a burger bun.",
      price: "349",
    },
    {
      className: "burgers",
      imageSrc: "images/burgers.jpg",
      name: "Paneer Crispy Burger",
      subname: "Grilled paneer topped with sour cream.",
      price: "399",
    },
    {
      className: "burgers",
      imageSrc: "images/burgers.jpg",
      name: "Grilled Chicken Salsa Burger",
      subname: "Chicken breasts pan-fried and topped with tomato salsa, sour cream",
      price: "399",
    },
    {
      className: "burgers",
      imageSrc: "images/burgers.jpg",
      name: "Schnitzel and Cheese Chicken Burger",
      subname: "Schnitzel of crumbed chicken breast in a toasted burger with cheese",
      price: "399",
   },
  ];
  
  const appetizersVeg = [
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Overload Nachos",
      subname: "Tortilla chips or totopos covered with cheese or cheese sauce as well as a variety of other toppings and garnishes.",
      price: "349",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Orange Chilli Mushroom (Chef Special)",
      subname: "Indo-Chinese appetizer of mushroom tossed in orange sauce, spicy and slightly tangy chilli sauce.",
      price: "349",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Potato Cheese Shortz",
      subname: "Potatoes and herbs stuffed with the gooiest cheese and coated in crunchy golden crumbs and served with sauce.",
      price: "399",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Crispy Onion Rings",
      subname: "",
      price: "249",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Cheese Fingers",
      subname: "",
      price: "399",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Golden Babycorn",
      subname: "Corn tossed in a sweet and spicy sauce for delightfully flavorful, crunchy dish.",
      price: "349",
    },
    {
      className: "appetizers-veg",
      imageSrc: "images/appetizers-veg.jpg",
      name: "Paneer Majestic",
      subname: "Fresh Indian cottage Cheese strips, tossed in spicy yogurt based sauce, green chilies, curry leaves to enhance the flavor",
      price: "399",
    },
  ];
  
  return (
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Choose Best of
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Lush Caffe Coffee Menu
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("bachelors")}
            data-href="bachelors"
          >
            Bachelors
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("couples")}
            data-href="couples"
          >
            Couples
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("lushSignatureDrinks")}
            data-href="lushSignatureDrinks"
          >
            Lush Signature Drinks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hotbeverages")}
            data-href="hotbeverages"
          >
            Hot Beverages
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("coldBeverages")}
            data-href="coldBeverages"
          >
            Cold Beverages
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("mainCourse")}
            data-href="mainCourse"
          >
            Main Course
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("riceBowls")}
            data-href="riceBowls"
          >
            Rice Bowls
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("grillFish")}
            data-href="grillFish"
          >
            Grill Fish
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("smoothies")}
            data-href="smoothies"
          >
            Smoothies
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("lemanades")}
            data-href="lemanades"
          >
            Lemanades
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("iced-teas")}
            data-href="iced-teas"
          >
            Iced Teas
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("mocktails")}
            data-href="mocktails"
          >
            mocktails
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("pastas")}
            data-href="pastas"
          >
            Pastas
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("burgers")}
            data-href="burgers"
          >
            Burgers
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("appetizersVeg")}
            data-href="appetizersVeg"
          >
            appetizersVeg
          </a>
        </div>
        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            {bachelors.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {couples.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {hotbeverages.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {coldBeverages.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {mainCourse.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {lushSignatureDrinks.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {riceBowls.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {grillFish.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {lemanades.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {smoothies.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {mocktails.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {pastas.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {burgers.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
            {appetizersVeg.map((item, index) => (
              <div
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 ${item.className}`}
                key={index}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.imageSrc} className="has-popup-image">
                      <img src={item.imageSrc} alt={item.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeeMenu;
