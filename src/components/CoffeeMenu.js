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

  const salad = [
    {
      className: "salad",
      imageSrc: "/menu/salad/GreekSalasdVeg.webp ",
      name: "Greek Salad (Veg)",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/GreekSalasdNonVeg.webp ",
      name: "Greek Salad (Non-Veg)",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/EggAndGreens.webp ",
      name: "Egg And Greens",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/CobbSalad.webp ",
      name: "Cobb Salad (Veg)",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/CobbSaladChicken.webp ",
      name: "Cobb Salad (Non-Veg)",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/ChickenCaesar.webp ",
      name: "Caesar Salad (Chicken)",
      subname: "",
      price: "349",
    },
    {
      className: "salad",
      imageSrc: "/menu/salad/Caesar.webp ",
      name: "Caesar Salad (Veg)",
      subname: "",
      price: "349",
    },
  ];

  const sandwich = [
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/BbqChickenSandwich.webp",
      name: "Bbq Chicken Sandwich",
      subname: "Popcorn Syrup, Pineapple Crush, Ice-cream and Milk",
      price: "349",
    },
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/SpicyCilentroChickenSandwich.webp",
      name: "Spicy Cilentro Chicken Sandwich  ",
      subname: "Oreo Biscuit, Ice-cream, Peanut Butter and Milk",
      price: "349",
    },
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/BbqPaneerSandwich.webp",
      name: "Bbq Paneer Sandwich",
      subname: "Banana, Expresso, Ice-cream and Milk",
      price: "349",
    },
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/PeriPeriPaneerSandwich.webp",
      name: "Peri Peri Paneer Sandwich",
      subname: "Blueberry Puree, Ice-cream, White Chocolate and Milk",
      price: "349",
    },
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/SpicedEggSandwich.webp",
      name: "Spiced Egg Sandwich",
      subname: "Blueberry Puree, Ice-cream, White Chocolate and Milk",
      price: "349",
    },
    {
      className: "sandwich",
      imageSrc: "/menu/sandwich/GrilledVegAndPestoSandwich.webp",
      name: "Grilled Veg And Pesto Sandwich",
      subname: "Blueberry Puree, Ice-cream, White Chocolate and Milk",
      price: "349",
    },
  ];
  // const lushSignatureDrinks = [
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Bamboleo",
  //     subname: "Passion Fruit Syrup, Coconut Syrup, Milk",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Cocumint Cooler",
  //     subname: "Fresh coconut with the touch of cucumber and mint",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Ping Pong",
  //     subname: "Pomegranate, Raspberry, Cranberry",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "The Paradise",
  //     subname: "Strawberry & Passion Fruit Syrup, Orange and Pineapple Juice",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Ee Sala Cup Namde",
  //     subname: "Orange Chunks, Basil leaves, Peach Syrup, Orange Juice",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Saffron Cream",
  //     subname: "Saffron Syrup, Amul Cream, Orange Juice",
  //     price: "349",
  //   },
  //   {
  //     className: "lushSignatureDrinks",
  //     imageSrc: "images/lushSignatureDrinks.jpg",
  //     name: "Kick The Kiwi",
  //     subname: "Green Apple, Kiwi Fruit, Lemon, Mint, Triple Sec, Ice-Cubes, Sprite",
  //     price: "349",
  //   },
  // ];

  // const hotbeverages = [
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Cappuccino",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Americano",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Americano Orange",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Caffe Latte",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Latte Mocha",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Latte Macchiato",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Espresso Macchiato",
  //     subname: "",
  //     price: "",
  //   },
  //   {
  //     className: "hotbeverages",
  //     imageSrc: "images/hotbeverages.jpg",
  //     name: "Hot chocolate",
  //     subname: "",
  //     price: "",
  //   },
  // ];

  // const coldBeverages = [
  //   {
  //     className: "coldBeverages",
  //     imageSrc: "images/coldBeverages.jpg",
  //     name: "Coffee Frappe",
  //     subname: "Milk, Ice Cubes, Espresso, Chocolate Sauce",
  //     price: "249",
  //   },
  //   {
  //     className: "coldBeverages",
  //     imageSrc: "images/coldBeverages.jpg",
  //     name: "Coffee Velvet",
  //     subname: "Milk, Ice Cubes, Espresso, Sponge Velvet, Cream",
  //     price: "399",
  //   },
  //   {
  //     className: "coldBeverages",
  //     imageSrc: "images/coldBeverages.jpg",
  //     name: "Iced Caffee Latte",
  //     subname: "Milk, Ice Cubes, Espresso, Chocolate Sauce",
  //     price: "349",
  //   },
  // ];

  // const mainCourse = [
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Peri Peri Paneer Steak",
  //     subname: "vegetables on the side.",
  //     price: "449",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Cauliflower Steak",
  //     subname: "",
  //     price: "349",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Veg Delight Rice",
  //     subname: "",
  //     price: "349",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Panneer Delight Rice",
  //     subname: "",
  //     price: "429",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Chicken Stroganoff",
  //     subname: "",
  //     price: "449",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Chicken Steak Rice",
  //     subname: "",
  //     price: "449",
  //   },
  //   {
  //     className: "mainCourse",
  //     imageSrc: "images/mainCourse.jpg",
  //     name: "Teco Lane Prawns",
  //     subname: "",
  //     price: "449",
  //   },
  // ];

  // const riceBowls = [
  //   {
  //     className: "riceBowls",
  //     imageSrc: "images/riceBowls.jpg",
  //     name: "Turmaric Garlic Fried Rice With Chilly Paneer",
  //     subname: "",
  //     price: "399",
  //   },
  //   {
  //     className: "riceBowls",
  //     imageSrc: "images/riceBowls.jpg",
  //     name: "Mushroom Stroganoff",
  //     subname: "",
  //     price: "309",
  //   },
  //   {
  //     className: "riceBowls",
  //     imageSrc: "images/riceBowls.jpg",
  //     name: "Paneer Stroganoff",
  //     subname: "",
  //     price: "399",
  //   },
  //   {
  //     className: "riceBowls",
  //     imageSrc: "images/riceBowls.jpg",
  //     name: "Turmaric Garlic Fried Rice With Chicken",
  //     subname: "",
  //     price: "469",
  //   },
  // ];

  const ItalianThinCrustPizzas = [
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/CajunChickenPizza.webp",
      name: "Cajun Chicken Pizza",
      subname: "",
      price: "399",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/peporonipizza.webp",
      name: "peporoni pizza",
      subname: "",
      price: "439",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/paneerpperiperipizza.webp",
      name: "paneer pperi peri pizza",
      subname: "",
      price: "529",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/chickensausage.webp",
      name: "chicken sausage",
      subname: "",
      price: "469",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/periperichicken.webp",
      name: "peri peri chicken",
      subname: "",
      price: "469",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/VegMexicanaPizza.webp",
      name: "Veg Mexicana Pizza",
      subname: "",
      price: "469",
    },
    {
      className: "ItalianThinCrustPizzas",
      imageSrc: "/menu/ItalianThinCrustPizzas/SeaFoodPizza.webp",
      name: "Sea Food Pizza",
      subname: "",
      price: "469",
    },
  ];

  const mains = [
    {
      className: "mains",
      imageSrc: "/menu/main/PeriPeriChickenSteak.webp",
      name: "Peri Peri Chicken Steak",
      subname: "Masala Powder, Lemon Syrup, Ice Cubes",
      price: "129",
    },
    {
      className: "mains",
      imageSrc: "/menu/main/CilantroCottageCheeseSteak.webp",
      name: "Cilantro Cottage Cheese Steak",
      subname: "Sugar Syrup, Lemon Syrup, Ice Cubes",
      price: "119",
    },
    {
      className: "mains",
      imageSrc: "/menu/main/CajunCottageCheeseSteak.webp",
      name: "Cajun Cottage Cheese Steak",
      subname: "Lemon Syrup, Ice Cubes, Salt",
      price: "119",
    },
  ];

  const riceBowl = [
    {
      className: "riceBowl",
      imageSrc: "/menu/riceBowl/EggAkooriRiceBowl.webp",
      name: "Egg Akoori Rice Bowl.",
      subname: "",
      price: "349",
    },
    {
      className: "riceBowl",
      imageSrc: "/menu/riceBowl/BurntgarlicShrimpFriedRice.webp",
      name: "Burnt garlic Shrimp Fried Rice.",
      subname: "",
      price: "299",
    },
    {
      className: "riceBowl",
      imageSrc: "/menu/riceBowl/BurntgarlicChickenFriedRice.webp",
      name: "Burnt garlic Chicken Fried Rice.",
      subname: "",
      price: "349",
    },
    {
      className: "riceBowl",
      imageSrc: "/menu/riceBowl/BurntgarlicFriedRice.webp",
      name: "Burnt garlic Fried Rice.",
      subname: "",
      price: "349",
    },
  ];

  // const mocktails = [
  //   {
  //     className: "mocktails",
  //     imageSrc: "images/mocktails.jpg",
  //     name: "Virgin Mojito",
  //     subname: "Mint Syrup, Mint Leaves, Lemon Wedges, Ice Cubes",
  //     price: "249",
  //   },
  //   {
  //     className: "mocktails",
  //     imageSrc: "images/mocktails.jpg",
  //     name: "Blue Curacao",
  //     subname: "Blue Curacao, Mint Leaves, Lemon Wedges, Ice Cubes",
  //     price: "299",
  //   },
  //   {
  //     className: "mocktails",
  //     imageSrc: "images/mocktails.jpg",
  //     name: "Strawberry Mojito",
  //     subname: "Strawberry Crush, Mint Leaves, Lemon Wedges, Ice Cubes",
  //     price: "349",
  //   },
  //   {
  //     className: "mocktails",
  //     imageSrc: "images/mocktails.jpg",
  //     name: "Peach",
  //     subname: "Peach, Mint Leaves, Lemon Wedges, Ice Cubes",
  //     price: "299",
  //   },
  //   {
  //     className: "mocktails",
  //     imageSrc: "images/mocktails.jpg",
  //     name: "Mango",
  //     subname: "Mango Crush, Mint Leaves, Lemon Wedges, Ice Cubes",
  //     price: "349",
  //   },
  // ];

  // const pastas = [
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/SpaghettiAglioEOlioWithChicken.webp",
  //     name: "Spaghetti Aglio E Olio With Chicken",
  //     subname: "Mixed in pasta sauce and fresh basil served with garlic bread on side.",
  //     price: "399",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/SpaghettiAglioEOlio.webp",
  //     name: "Spaghetti Aglio e Olio",
  //     subname: "Mixed in dry garlic, dry herbs, chilli flakes, tomato and olives.",
  //     price: "419",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/CubanMacAndCheese.webp",
  //     name: "Cuban Mac And Cheese",
  //     subname: "Macaroni mixed in bechamel sauce, cheddar, parmesan cheese",
  //     price: "399",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/SpaghettiPomodoroWithChicken.webp",
  //     name: "Spaghetti Pomodoro With Chicken",
  //     subname: "A classic favorite creamy white sauce, Penne Pasta mixed with blanched exotic Vegetables like Broccoli, Zucchini, Bell Pepper, Black Olives",
  //     price: "389",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/SpaghettiPomodoro.webp",
  //     name: "Spaghetti Pomodoro",
  //     subname: "Alfredo Cream Sauce.Mix Sauce.Red Sauce.",
  //     price: "449",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/PenneAlaVodka.webp",
  //     name: "Penne Ala Vodka",
  //     subname: "",
  //     price: "469",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/pennealfradowhitepasta.webp",
  //     name: "penne alfrado white pasta",
  //     subname: "Alfredo Cream Sauce and Mix Sauce (With Pink Sauce)",
  //     price: "449",
  //   },
  //   {
  //     className: "pastas",
  //     imageSrc: "/menu/pasta/pennealfradochicken.webp",
  //     name: "penne alfrado chicken",
  //     subname: "Honey sweetened chicken, chilli sauce, marmalade and green onion",
  //     price: "449",
  //   },
  // ];

  // const burgers = [
  //   {
  //     className: "burgers",
  //     imageSrc: "images/burgers.jpg",
  //     name: "Vegetable Patty Burger",
  //     subname: "Spiced vegetables with masala paneer in a patty on a burger bun.",
  //     price: "349",
  //   },
  //   {
  //     className: "burgers",
  //     imageSrc: "images/burgers.jpg",
  //     name: "Paneer Crispy Burger",
  //     subname: "Grilled paneer topped with sour cream.",
  //     price: "399",
  //   },
  //   {
  //     className: "burgers",
  //     imageSrc: "images/burgers.jpg",
  //     name: "Grilled Chicken Salsa Burger",
  //     subname: "Chicken breasts pan-fried and topped with tomato salsa, sour cream",
  //     price: "399",
  //   },
  //   {
  //     className: "burgers",
  //     imageSrc: "images/burgers.jpg",
  //     name: "Schnitzel and Cheese Chicken Burger",
  //     subname: "Schnitzel of crumbed chicken breast in a toasted burger with cheese",
  //     price: "399",
  //   },
  // ];
  const soup = [
    {
      className: "soup",
      imageSrc: "/menu/soup/greenSoupChicken.webp",
      name: "green Consume Chicken",
      subname: "",
      price: "349",
    },
  ];

  const appetizersVeg = [
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/crumbfriedcottagecheesefinger.webp",
      name: "crumb fried cottage cheese finger",
      subname: "",
      price: "349",
    },
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/CottageCheesePotatoCroquettes.webp",
      name: "Cottage Cheese Potato Croquettes",
      subname: "",
      price: "349",
    },
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/NachosReloaded.webp",
      name: "Nachos Reloaded",
      subname: "",
      price: "399",
    },
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/CheeseGarlicBread.webp",
      name: "Cheese Garlic Bread ",
      subname: "",
      price: "249",
    },
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/southernspicyChickenWings.webp",
      name: "southern spicy Chicken Wings",
      subname: "",
      price: "249",
    },
    {
      className: "appetizersVeg",
      imageSrc: "/menu/appetizer/NachosReloadedchicken.webp",
      name: "Nachos Reloaded chicken",
      subname: "",
      price: "249",
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
            onClick={handleFilterKeyChange("salad")}
            data-href="salad"
          >
            Salad
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("sandwich")}
            data-href="sandwich"
          >
            Sandwich
          </a>
          {/* <a
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
          </a> */}
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("ItalianThinCrustPizzas")}
            data-href="ItalianThinCrustPizzas"
          >
            Italian Thin Crust Pizzas
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("soup")}
            data-href="soup"
          >
            Soup
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("riceBowl")}
            data-href="riceBowl"
          >
            riceBowl
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("mains")}
            data-href="mains"
          >
            mains
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("iced-teas")}
            data-href="iced-teas"
          >
            Iced Teas
          </a>
          {/* <a
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
          </a> */}
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
          style={{ backgroundImage: "url(Logo/logo.png)" }}
        >
          <div className="row all-menu-items">
            {salad.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {sandwich.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {/* {hotbeverages.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))} */}
            {ItalianThinCrustPizzas.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {soup.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {mains.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {riceBowl.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
            {/* {mocktails.map((item, index) => (
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))} */}
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
                      <img src={item.imageSrc} alt={item.name} loading="lazy" />
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
